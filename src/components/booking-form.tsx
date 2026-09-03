import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../components/button';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';

interface BookingFormData {
  date: string;
  time: string;
  guests: number;
  occasion: string;
}

interface BookingFormProps {
  availableTimes?: string[];
  dispatch?: React.Dispatch<{
    type: string;
    day?: Date;
    date?: string[];
  }>;
}

const bookingSchema = Yup.object({
  date: Yup.string()
    .required('Please choose a date.'),

  time: Yup.string()
    .required('Please choose a time.'),

  guests: Yup.number()
    .typeError('Guests must be a number.')
    .min(1, 'At least 1 guest is required.')
    .max(10, 'Maximum 10 guests are allowed.')
    .required('Please enter the number of guests.'),

  occasion: Yup.string()
    .oneOf(['Birthday', 'Anniversary'])
    .required('Please choose an occasion.'),
});

const BookingForm = ({
  availableTimes = [],
  dispatch,
}: BookingFormProps) => {
  const navigate = useNavigate();

  const initialValues: BookingFormData = {
    date: '',
    time: '17:00',
    guests: 1,
    occasion: 'Birthday',
  };

  const handleSubmit = (values: BookingFormData) => {
    try {
      const success = submitAPI(values);

      if (!success) {
        throw new Error('Failed to submit reservation');
      }

      toast.success('Reservation confirmed!');
      navigate('/');
    } catch (error) {
      console.error('Failed to make reservation:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={bookingSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form
          aria-label="Booking Form"
          data-testid="booking-form"
          className="mx-auto max-w-150"
        >
          {/* Date */}
          <div className="mb-5">
            <label
              htmlFor="date"
              className="mb-2 block font-semibold"
            >
              Choose date
            </label>

            <Field
              type="date"
              id="date"
              name="date"
              className="w-full rounded-md border px-4 py-3"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const date = e.target.value;

                setFieldValue('date', date);

                dispatch?.({
                  type: 'UPDATE_TIMES',
                  day: new Date(date),
                });
              }}
            />

            <ErrorMessage
              name="date"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          {/* Time */}
          <div className="mb-5">
            <label
              htmlFor="time"
              className="mb-2 block font-semibold"
            >
              Choose time
            </label>

            <Field
              as="select"
              id="time"
              name="time"
              className="w-full rounded-md border px-4 py-3"
            >
              <option value="">Select a time</option>

              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Field>

            <ErrorMessage
              name="time"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          {/* Guests */}
          <div className="mb-5">
            <label
              htmlFor="guests"
              className="mb-2 block font-semibold"
            >
              Number of guests
            </label>

            <Field
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              className="w-full rounded-md border px-4 py-3"
            />

            <ErrorMessage
              name="guests"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          {/* Occasion */}
          <div className="mb-6">
            <label
              htmlFor="occasion"
              className="mb-2 block font-semibold"
            >
              Occasion
            </label>

            <Field
              as="select"
              id="occasion"
              name="occasion"
              className="w-full rounded-md border px-4 py-3"
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </Field>

            <ErrorMessage
              name="occasion"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          <Button
            ariaLabel='Make Your Reservation'
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Booking...' : 'Make Your Reservation'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
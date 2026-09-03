import {useState, type FormEvent} from 'react';
import Button from '../components/button';
import {toast} from 'sonner';
import {useNavigate} from 'react-router';

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

const BookingForm = ({availableTimes, dispatch}: BookingFormProps) => {
  const [formData, setFormData] = useState<BookingFormData>({
    date: '',
    time: '17:00',
    guests: 1,
    occasion: 'Birthday'
  });
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const payload = {
        date: formData.date,
        time: formData.time,
        guests: formData.guests,
        occasion: formData.occasion
      };

      const success = submitAPI(payload);
      if (!success) {
        throw new Error('Failed to submit reservation');
      }
      toast.success('Reservation confirmed!');
      setFormData({
        date: '',
        time: '',
        guests: 0,
        occasion: 'Birthday'
      });
      navigate('/');
    } catch (error) {
      console.error('Failed to make reservation:', error);
      toast.error('Something went wrong. Please try again.' + error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form data-testid='booking-form' onSubmit={handleSubmit} className='mx-auto max-w-150'>
      <div className='flex flex-col gap-6'>
        {/* Date */}
        <div data-testid='date-input' className='flex flex-col gap-2'>
          <label htmlFor='res-date' className='font-bold text-primary-gray'>
            Choose date
          </label>

          <input
            type='date'
            id='res-date'
            name='date'
            value={formData.date}
            onChange={e => {
              handleChange(e);

              dispatch?.({
                type: 'UPDATE_TIMES',
                day: new Date(e.target.value)
              });
            }}
            required
            className='h-12 rounded-lg border border-primary-gray/30 bg-white px-4 outline-none transition focus:border-primary-yellow focus:ring-2 focus:ring-primary-yellow/30'
          />
        </div>

        {/* Time */}
        <div data-testid='time-input' className='flex flex-col gap-2'>
          <label htmlFor='res-time' className='font-bold text-primary-gray'>
            Choose time
          </label>

          <select id='res-time' name='time' value={formData.time} onChange={handleChange} required className='h-12 rounded-lg border border-primary-gray/30 bg-white px-4 outline-none transition focus:border-primary-yellow focus:ring-2 focus:ring-primary-yellow/30'>
            {availableTimes?.map(time => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        {/* Guests */}
        <div data-testid='guests-input' className='flex flex-col gap-2'>
          <label htmlFor='guests' className='font-bold text-primary-gray'>
            Number of guests
          </label>

          <input type='number' id='guests' name='guests' min='1' max='10' value={formData.guests} onChange={handleChange} required className='h-12 rounded-lg border border-primary-gray/30 bg-white px-4 outline-none transition focus:border-primary-yellow focus:ring-2 focus:ring-primary-yellow/30' />
        </div>

        {/* Occasion */}
        <div data-testid='occasion-input' className='flex flex-col gap-2'>
          <label htmlFor='occasion' className='font-bold text-primary-gray'>
            Occasion
          </label>

          <select id='occasion' name='occasion' value={formData.occasion} onChange={handleChange} required className='h-12 rounded-lg border border-primary-gray/30 bg-white px-4 outline-none transition focus:border-primary-yellow focus:ring-2 focus:ring-primary-yellow/30'>
            <option value='Birthday'>Birthday</option>
            <option value='Anniversary'>Anniversary</option>
          </select>
        </div>

        {/* Submit */}
        <div data-testid='submit-input' className='pt-2'>
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Making Reservation...' : 'Make Your Reservation'}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;

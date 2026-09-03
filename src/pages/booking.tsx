import {useEffect, useReducer} from 'react';
import BookingForm from '../components/booking-form';

const Booking = () => {
  const initializeTimes = () => {
    return {day: new Date(), data: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']};
  };

  const updateTimes = (
    state: {day?: Date; data?: string[]},
    action: {
      type: string;
      day?: Date;
      date?: string[];
    }
  ) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return {day: action.day, data: action.date};

      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  useEffect(() => {
    const data = fetchAPI(new Date(availableTimes.day || '')) as string[];
    dispatch({
      type: 'UPDATE_TIMES',
      day: availableTimes.day,
      date: data
    });
  }, [availableTimes.day]);

  return (
    <section className='bg-secondary-3 py-12 md:py-16'>
      <div className='custom-container mx-auto'>
        <div className='mb-8 md:mb-12 text-center'>
          <h1 className='text-3xl font-extrabold text-primary-gray md:text-4xl'>Make a Reservation</h1>
          <p className='mt-2 text-secondary-4'>Reserve your table and enjoy a wonderful dining experience with us.</p>
        </div>
        <BookingForm availableTimes={availableTimes.data} dispatch={dispatch} />
      </div>
    </section>
  );
};

export default Booking;

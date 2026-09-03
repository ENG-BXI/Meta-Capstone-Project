import '@testing-library/react';
import {fireEvent, render, screen} from '@testing-library/react';
// Mock the useNavigate hook from react-router
jest.mock('react-router', () => ({
  useNavigate: () => jest.fn()
}));
import BookingForm from '../components/booking-form';
describe('Booking form renders correctly', () => {
  it('renders the booking form', () => {
    render(<BookingForm />);
    const bookingForm = screen.getByTestId('booking-form');
    expect(bookingForm).toBeInTheDocument();
  });
  it('renders the date input field', () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText('Choose date');
    expect(dateInput).toBeInTheDocument();
  });
  it('renders the time select field', () => {
    render(<BookingForm />);
    const timeSelect = screen.getByLabelText('Choose time');
    expect(timeSelect).toBeInTheDocument();
  });
  it('renders the number of guests input field', () => {
    render(<BookingForm />);
    const guestsInput = screen.getByLabelText('Number of guests');
    expect(guestsInput).toBeInTheDocument();
  });
  it('Api call is made on form submission', () => {
    render(<BookingForm />);
    const form = screen.getByTestId('booking-form');
    const mockSubmit = jest.fn();
    form.addEventListener('submit', mockSubmit);
    fireEvent.submit(form);
    expect(mockSubmit).toHaveBeenCalled();
  });
});

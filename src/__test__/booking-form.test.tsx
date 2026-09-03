import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

// Mock the useNavigate hook from react-router
jest.mock('react-router', () => ({
  useNavigate: () => jest.fn(),
}));

import BookingForm from '../components/booking-form';

describe('Booking form renders correctly', () => {
  beforeEach(() => {
    globalThis.submitAPI = jest.fn(() => true);
  });

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
  it('shows validation errors when submitting an empty form', async () => {
    render(<BookingForm />);
    const form = screen.getByTestId('booking-form');
    fireEvent.submit(form);
    expect(
      await screen.findByText('Please choose a date.')
    ).toBeInTheDocument();
    expect(globalThis.submitAPI).not.toHaveBeenCalled();
  });
  it('shows validation error when guests are more than 10', async () => {
    render(<BookingForm />);
    const guestsInput = screen.getByLabelText('Number of guests');
    fireEvent.change(guestsInput, {
      target: {
        value: '11',
      },
    });
    fireEvent.submit(screen.getByTestId('booking-form'));
    expect(
      await screen.findByText('Maximum 10 guests are allowed.')
    ).toBeInTheDocument();
    expect(globalThis.submitAPI).not.toHaveBeenCalled();
  });
  it('calls submitAPI when form is submitted with valid data', async () => {
    render(
      <BookingForm
        availableTimes={['17:00', '18:00', '19:00']}
      />
    );
    fireEvent.change(screen.getByLabelText('Choose date'), {
      target: {
        value: '2026-09-10',
      },
    });
    fireEvent.change(screen.getByLabelText('Choose time'), {
      target: {
        value: '18:00',
      },
    });
    fireEvent.change(screen.getByLabelText('Number of guests'), {
      target: {
        value: '4',
      },
    });
    fireEvent.change(screen.getByLabelText('Occasion'), {
      target: {
        value: 'Birthday',
      },
    });
    fireEvent.submit(screen.getByTestId('booking-form'));
    await waitFor(() => {
      expect(globalThis.submitAPI).toHaveBeenCalled();
    });
  });
});

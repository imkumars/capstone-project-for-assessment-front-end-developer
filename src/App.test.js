import { fireEvent, render, screen } from '@testing-library/react';
//import App from './App';
import BookingForm from "./Components/Pages/Booking_Page/BookingForm";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//Test data
const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const dispatchMethod = () => {};
const submitFromFunction = () => {};


//Test to check if Label "Choose date" is present on the web app
test("Check if label element 'Choose date' is present", () => {
  render(<BookingForm availableTimes={availableTimes} dispatchMethod={dispatchMethod} submitFromFunction={submitFromFunction} />);
  const labelElement = screen.getByText(/choose Date/i);
  expect(labelElement).toBeInTheDocument();
});

//Test to check if Label "Choose time" is present on the web app
test("Check if label element 'Choose time' is present", () => {
  render(<BookingForm availableTimes={availableTimes} dispatchMethod={dispatchMethod} submitFromFunction={submitFromFunction} />);
  const labelElement = screen.getByText(/choose time/i);
  expect(labelElement).toBeInTheDocument();
});

//Test to check if Label "Number of guests" is present on the web app
test("Check if label element 'Number of guests' is present", () => {
  render(<BookingForm availableTimes={availableTimes} dispatchMethod={dispatchMethod} submitFromFunction={submitFromFunction} />);
  const labelElement = screen.getByText(/Number of guests/i);
  expect(labelElement).toBeInTheDocument();
});

//Test to check if Label "Occasion" is present on the web app
test("Check if label element 'Occasion' is present", () => {
  render(<BookingForm availableTimes={availableTimes} dispatchMethod={dispatchMethod} submitFromFunction={submitFromFunction} />);
  const labelElement = screen.getByText(/Occasion/);
  expect(labelElement).toBeInTheDocument();
});


//Test to check if Button "Make Your reservation" is present on the web app
test("Check if button element 'Make Your reservation' is present", () => {
  render(<BookingForm availableTimes={availableTimes} dispatchMethod={dispatchMethod} submitFromFunction={submitFromFunction} />);
  const buttonElement = screen.getByText(/Make Your reservation/)
  expect(buttonElement).toBeInTheDocument();
});


//Test select options
test("check select options", () => {
  render(<BookingForm availableTimes={availableTimes} dispatchMethod={dispatchMethod} submitFromFunction={submitFromFunction} />);
  const selectElementOccasion = screen.getByLabelText(/Occasion/);
  const selectElementChooseTime = screen.getByLabelText(/choose time/i);

  expect(selectElementOccasion).toBeInTheDocument();
  expect(selectElementChooseTime).toBeInTheDocument();

  expect(selectElementOccasion).toHaveDisplayValue("Birthday");
  expect(selectElementChooseTime).toHaveDisplayValue(availableTimes[0]);
});

//Test when select option for Occasion are changed
test("verify select option for occasion", () => {
  render(<BookingForm availableTimes={availableTimes} dispatchMethod={dispatchMethod} submitFromFunction={submitFromFunction} />);
  const selectElementOccasion = screen.getByLabelText(/Occasion/);

  fireEvent.change(selectElementOccasion, {target: {value: "Birthday"}});
  expect(selectElementOccasion.value).toBe("Birthday");
  expect(selectElementOccasion).toHaveDisplayValue("Birthday");

  fireEvent.change(selectElementOccasion, {target: {value: "Anniversary"}});
  expect(selectElementOccasion.value).toBe("Anniversary");
  expect(selectElementOccasion).toHaveDisplayValue("Anniversary");
});

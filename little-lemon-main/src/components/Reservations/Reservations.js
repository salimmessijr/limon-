import BookingForm from "../BookingForm/BookingForm";
import "./reservations.scss";

const Reservations = () => {
  return (
    <div className="reservations-wrapper">
      Reserve your table by completing this form:
      <BookingForm />
    </div>
  );
};

export default Reservations;

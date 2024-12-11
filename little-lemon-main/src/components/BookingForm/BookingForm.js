import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./booking-form.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = () => {
  const defaultAvailableTimes = () => [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  const availableTimes = defaultAvailableTimes();

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: 1,
      occasion: "",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Please choose a date"),
      time: Yup.string().required("Please choose a time"),
      guests: Yup.number()
        .min(1, "At least 1 guest is required")
        .max(10, "Maximum 10 guests allowed")
        .required("Please enter the number of guests"),
      occasion: Yup.string().required("Please select an occasion"),
    }),
    onSubmit: (values, { resetForm }) => {
      toast.success(
        <div className="toast-wrapper">
          <strong>Reservation Confirmed!</strong>
          <p>
            Your reservation for {values.date} at {values.time} has been
            successfully made.
          </p>
        </div>,
        {
          position: "bottom-center",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          className: "notification",
          style: {
            background: "#EE9972",
            color: "#333333",
            fontFamily: "Karla",
          },
        }
      );
      resetForm();
    },
  });

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={formik.handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.date && formik.errors.date ? (
          <div className="error">{formik.errors.date}</div>
        ) : null}

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={formik.values.time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="" label="Select time" />
          {availableTimes.map((availableTime, index) => (
            <option key={index} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
        {formik.touched.time && formik.errors.time ? (
          <div className="error">{formik.errors.time}</div>
        ) : null}

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          value={formik.values.guests}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.guests && formik.errors.guests ? (
          <div className="error">{formik.errors.guests}</div>
        ) : null}

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formik.values.occasion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="" label="Select occasion" />
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion ? (
          <div className="error">{formik.errors.occasion}</div>
        ) : null}

        <input
          className="submit-button"
          type="submit"
          value="Make your reservation"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default BookingForm;

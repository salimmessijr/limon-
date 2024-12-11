import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "../BookingForm";
import { toast } from "react-toastify";

jest.mock("react-toastify", () => ({
  ...jest.requireActual("react-toastify"),
  toast: {
    success: jest.fn(),
  },
  ToastContainer: jest.fn(() => null),
}));

describe("Booking Form", () => {
  it("Renders form labels", () => {
    render(<BookingForm />);
    const dateLabel = screen.getByText("Choose date");
    const timeLabel = screen.getByText("Choose time");
    const guestsLabel = screen.getByText("Number of guests");
    const occasionLabel = screen.getByText("Occasion");
    expect(dateLabel).toBeInTheDocument();
    expect(timeLabel).toBeInTheDocument();
    expect(guestsLabel).toBeInTheDocument();
    expect(occasionLabel).toBeInTheDocument();
  });

  describe("when the user enters all the inputs", () => {
    it("should submit the form successfully", async () => {
      render(<BookingForm />);

      const dateInput = screen.getByLabelText("Choose date");
      const timeInput = screen.getByLabelText("Choose time");
      const guestsInput = screen.getByLabelText("Number of guests");
      const occasionInput = screen.getByLabelText("Occasion");

      fireEvent.change(dateInput, { target: { value: "2024-12-15" } });
      fireEvent.change(timeInput, { target: { value: "19:00" } });
      fireEvent.change(guestsInput, { target: { value: "5" } });
      fireEvent.change(occasionInput, { target: { value: "Birthday" } });

      const submitButton = screen.getByRole("button", {
        name: /Make Your reservation/i,
      });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(toast.success).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("when the user does not enters all the inputs", () => {
    it("should not submit the form", async () => {
      render(<BookingForm />);

      const dateInput = screen.getByLabelText("Choose date");
      const timeInput = screen.getByLabelText("Choose time");
      const guestsInput = screen.getByLabelText("Number of guests");
      const occasionInput = screen.getByLabelText("Occasion");

      fireEvent.change(dateInput, { target: { value: "" } });
      fireEvent.change(timeInput, { target: { value: "19:00" } });
      fireEvent.change(guestsInput, { target: { value: "5" } });
      fireEvent.change(occasionInput, { target: { value: "Birthday" } });

      const submitButton = screen.getByRole("button", {
        name: /Make Your reservation/i,
      });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(toast.success).toHaveBeenCalledTimes(0);
      });
    });
  });
});

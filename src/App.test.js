import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

test("shows the default additional information for animals without details", () => {
  render(<App />);

  const alert = jest.spyOn(window, "alert").mockImplementation(() => {});
  const lionCard = screen
    .getByRole("heading", { name: "Lion" })
    .closest("article");

  fireEvent.click(within(lionCard).getByRole("button", { name: "More Info" }));

  expect(alert).toHaveBeenCalledWith("notes: No Additional Information");
  alert.mockRestore();
});

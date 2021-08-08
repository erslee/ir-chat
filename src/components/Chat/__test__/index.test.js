import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Chat } from "../index";

test("chat message adds to messege list", async () => {
  const component = render(<Chat />);
  const inputField = await component.findByTestId("input");

  await userEvent.type(inputField, "abc");
  fireEvent.submit(inputField);

  const items = await component.findAllByText("abc");

  expect(items).toHaveLength(1);
});

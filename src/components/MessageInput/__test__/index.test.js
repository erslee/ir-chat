import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MessageInput } from "../index";

test("cleanup text after send form", async () => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();
  const { getByTestId } = render(
    <MessageInput onChange={onChange} onSubmit={onSubmit} />
  );
  const inputField = getByTestId("input");

  await userEvent.type(inputField, "abc");

  expect(inputField.value).toBe("abc");
  fireEvent.submit(inputField);
  expect(inputField.value).toBe("");
});

test("fire onSubmit on form submit", () => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();
  const { getByTestId } = render(
    <MessageInput onChange={onChange} onSubmit={onSubmit} />
  );
  const inputField = getByTestId("input");
  const sendBtn = getByTestId("sendbtn");

  fireEvent.change(inputField, {
    target: { value: "abc" },
  });

  expect(inputField.value).toBe("abc");

  fireEvent.submit(inputField);

  expect(onSubmit).toHaveBeenCalledTimes(1);
});

test("fire onSubmit on button click", () => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();
  const { getByTestId } = render(
    <MessageInput onChange={onChange} onSubmit={onSubmit} />
  );
  const inputField = getByTestId("input");
  const sendBtn = getByTestId("sendbtn");

  fireEvent.change(inputField, {
    target: { value: "abc" },
  });

  expect(inputField.value).toBe("abc");

  fireEvent.click(sendBtn);

  expect(onSubmit).toHaveBeenCalledTimes(1);
});

test("do not fire onSubmit if form is empty", () => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();
  const { getByTestId } = render(
    <MessageInput onChange={onChange} onSubmit={onSubmit} />
  );
  const inputField = getByTestId("input");
  const sendBtn = getByTestId("sendbtn");

  expect(inputField.value).toBe("");

  fireEvent.submit(inputField);
  fireEvent.click(sendBtn);

  expect(onSubmit).toHaveBeenCalledTimes(0);
});

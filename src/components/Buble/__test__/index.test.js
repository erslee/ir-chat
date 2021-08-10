import { render } from "@testing-library/react";
import { Buble } from "../index";
import { format } from 'timeago.js';

const dataItem = {
  avatar: "https://loremflickr.com/25/25",
  title: "Elit magna",
  avatarFlexible: true,
  position: "left",
  type: "text",
  text: "Lorem ipsum dolor sit amet",
  date: new Date(),
};

test("message contains text", async () => {
  const component = render(<Buble data={dataItem} />);
  const node = await component.findByTestId('text')
  expect(node.textContent).toBe(dataItem.text);
});

test("message contains date", async () => {
    const component = render(<Buble data={dataItem} />);
    const node = await component.findByTestId('date')
    expect(node.textContent).toBe(format(dataItem.date));
});

test("message contains name", async () => {
    const component = render(<Buble data={dataItem} />);
    const node = await component.findByTestId('title')
    expect(node.textContent).toBe(dataItem.title);
});

test("message contains avatar", async () => {
    const component = render(<Buble data={dataItem} />);
    const node = await component.findByRole("img");
    expect(node.src).toBe(dataItem.avatar);
});

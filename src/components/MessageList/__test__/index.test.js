import { render } from "@testing-library/react";
import { MessageList } from "../index";

const dataItem = {
  avatar: "https://loremflickr.com/25/25",
  title: "Elit magna",
  avatarFlexible: true,
  position: "left",
  type: "text",
  text: "Lorem ipsum dolor sit amet",
  date: new Date(),
};

test("message list contains messages", async () => {
  const itemsNum = Math.floor(Math.random() * 20);
  const data = [];

  for (let i = 0; i < itemsNum; i++) {
    data.push(dataItem);
  }

  const component = render(<MessageList dataSource={data} />);

  const items = await component.findAllByText("Lorem ipsum dolor sit amet");

  expect(items).toHaveLength(itemsNum);
});

test("is typing symbol appears", async () => {
  const component = render(<MessageList dataSource={[]} isTyping={false} />);

  const typingIndicator = await component.findByTestId('isTyping');

  expect(typingIndicator.textContent).toBe('');

  component.rerender(<MessageList dataSource={[]} isTyping={true} />)

  expect(typingIndicator.textContent).toBe('...');
})

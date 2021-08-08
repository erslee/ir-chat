import { render } from "@testing-library/react";

import { ChatHeader } from "../index";

test("have to render name and picture", () => {
  const data = {
    name: "abc def",
    picture: "https://loremflickr.com/45/45",
  };
  const { getByTestId, getByRole } = render(<ChatHeader {...data} />);
  const avatar = getByRole("img");
  const name = getByTestId("name");

  expect(name.textContent).toBe(data.name);
  expect(avatar.src).toBe(data.picture);
});

import { render } from "@testing-library/react";

import { Avatar } from "../index";

test("have to picture", () => {
  const data = {
    name: "abc def",
    picture: "http://placeimg.com/100/100/face",
  };
  const { getByRole } = render(<Avatar {...data} />);
  const avatar = getByRole("img");

  expect(avatar.src).toBe(data.picture);
  expect(avatar.alt).toBe(data.name);
});

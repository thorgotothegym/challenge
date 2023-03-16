import { render } from "@testing-library/react";
import { Weather } from "./";

describe("Weather", () => {
  it("Renders Component According To Snapshot", () => {
    const { container } = render(<Weather />);

    expect(container).toMatchSnapshot();
  });
});

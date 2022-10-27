import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Header } from "./index";
import props from "./mock";

describe("<Header />", () => {
  it("should render an image, a heading and a text", () => {
    renderTheme(<Header {...props} showText={undefined} />);

    expect(
      screen.getByRole("heading", { name: "Guilherme Soares" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("img", { name: /Guilherme Soares/i }),
    ).toHaveAttribute("src", props.logo);

    expect(screen.getByText(props.blogDescription)).toBeInTheDocument();
  });

  it("should render image only", () => {
    renderTheme(<Header {...props} showText={false} />);

    expect(
      screen.queryByRole("heading", { name: "Guilherme Soares" }),
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("img", { name: /Guilherme Soares/i }),
    ).toHaveAttribute("src", props.logo);

    expect(screen.queryByText(props.blogDescription)).not.toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(
      <Header {...props} showText={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});

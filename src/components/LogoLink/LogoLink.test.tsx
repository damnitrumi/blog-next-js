import { screen } from "@testing-library/react";
import { LogoLink } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<LogoLink/>", () => {
  it("should render text logo", () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    expect(
      screen.getByRole("heading", { name: "Olá mundo" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Olá mundo" })).toHaveAttribute(
      "href",
      "#target",
    );
  });

  it("should render image logo", () => {
    renderTheme(
      <LogoLink link="#target" srcImg="image.jpg" text="Olá mundo" />,
    );
    expect(screen.getByRole("img", { name: "Olá mundo" })).toHaveAttribute(
      "src",
      "image.jpg",
    );
  });

  it("should render render internal link", () => {
    renderTheme(
      <LogoLink link="/target" text="Olá mundo" srcImg="image.jpg" />,
    );
    expect(screen.getByAltText("Olá mundo")).toHaveAttribute(
      "src",
      "image.jpg",
    );
  });

  it("should render in a new tab", () => {
    renderTheme(
      <LogoLink
        link="/target"
        text="Olá mundo"
        srcImg="image.jpg"
        newTab={true}
      />,
    );
    expect(screen.getByAltText("Olá mundo")).toHaveAttribute(
      "src",
      "image.jpg",
    );
  });

  it("should render render internal link with text only", () => {
    renderTheme(<LogoLink link="/target" text="Olá mundo" />);
    expect(
      screen.getByRole("heading", { name: "Olá mundo" }),
    ).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    renderTheme(
      <LogoLink link="#target" srcImg="image.jpg" text="Olá mundo" />,
    );

    expect(
      screen.getByRole("heading", { name: "Olá mundo" }),
    ).toMatchSnapshot();
  });
});

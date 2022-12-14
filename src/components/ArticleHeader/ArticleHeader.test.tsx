import { screen } from "@testing-library/react";
import { ArticleHeader, ArticleHeaderProps } from ".";
import { renderTheme } from "../../styles/render-theme";
import { formatDate } from "../../utils/format-date";
import mock from "./mock";

const props: ArticleHeaderProps = mock;

describe("<ArticleHeader/>", () => {
  it("should render heading, excerpt, cover img and meta", () => {
    renderTheme(<ArticleHeader {...props} />);

    expect(
      screen.getByRole("heading", { name: props.title }),
    ).toBeInTheDocument();

    expect(screen.getByText(props.excerpt)).toBeInTheDocument();

    expect(screen.getByRole("img", { name: props.title })).toBeInTheDocument();

    expect(screen.getByText(formatDate(props.createdAt))).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<ArticleHeader {...props} />);

    expect(container).toMatchSnapshot();
  });
});

import { screen } from "@testing-library/react";
import { Post, PostProps } from ".";
import { renderTheme } from "../../styles/render-theme";
import { formatDate } from "../../utils/format-date";
import mock from "./mock";

const props: PostProps = mock;

describe("<Post/>", () => {
  it("should render header, excerpt, cover, metadata and post", () => {
    const { container } = renderTheme(<Post {...props} />);

    expect(
      screen.getByRole("heading", { name: props.title }),
    ).toBeInTheDocument();

    expect(screen.getByRole("img", { name: props.title })).toBeInTheDocument();

    expect(screen.getAllByText(/consectetur adipiscing elit/i)[0]).toHaveStyle({
      "font-size": "2.4rem",
    });

    expect(screen.getByText(formatDate(props.createdAt))).toBeInTheDocument();

    expect(
      screen.getByText(/Blockquote: Et sed legere rationibus/i),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});

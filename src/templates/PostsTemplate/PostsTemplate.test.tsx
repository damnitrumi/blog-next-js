import { renderTheme } from "../../styles/render-theme";
import { PostsTemplate, PostsTemplateProps } from ".";
import mock from "./mock";
import { mapData } from "../../utils/map-data";
import mock2 from "./mock2";

const props: PostsTemplateProps = mock;

describe("<PostsTemplate />", () => {
  it("should match snapshot ", () => {
    const { container } = renderTheme(<PostsTemplate {...props} />);

    expect(container).toMatchSnapshot();
  });

  it("should match snapshot without posts", () => {
    const { container } = renderTheme(
      <PostsTemplate {...props} posts={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("should match snapshot with posts using mapData function", () => {
    const data = mapData(mock2);

    const { container } = renderTheme(
      <PostsTemplate settings={data.setting} posts={data.posts} />,
    );

    expect(container).toMatchSnapshot();
  });
});

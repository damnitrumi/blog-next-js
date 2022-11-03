import { Meta, Story } from "@storybook/react/types-6-0";
import { PostGrid, PostGridProps } from ".";
import mock from "./mock";

export default {
  title: "PostGrid",
  component: PostGrid,
  args: mock,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<PostGridProps>;

export const Template: Story<PostGridProps> = (args) => {
  return <PostGrid {...args} />;
};

export const NoPosts: Story<PostGridProps> = () => {
  return <PostGrid />;
};

import { Meta, Story } from "@storybook/react/types-6-0";
import { ArticleHeader, ArticleHeaderProps } from ".";
import mock from "./mock";

export default {
  title: "ArticleHeader",
  component: ArticleHeader,
  args: mock,
} as Meta<ArticleHeaderProps>;

export const Template: Story<ArticleHeaderProps> = (args) => {
  return (
    <>
      <ArticleHeader {...args} />
      <p>It&aposs just an experiment</p>
    </>
  );
};

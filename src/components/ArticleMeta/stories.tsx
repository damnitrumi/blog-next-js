import { Meta, Story } from "@storybook/react/types-6-0";
import { ArticleMeta, ArticleMetaProps } from ".";

import mock from "./mock";

export default {
  title: "ArticleMeta",
  component: ArticleMeta,
  args: mock,
  argTypes: {
    createdAt: {
      control: {
        type: "date",
      },
    },
  },
} as Meta<ArticleMetaProps>;

export const Template: Story<ArticleMetaProps> = (args) => {
  return <ArticleMeta {...args} />;
};
export const NoAuthor: Story<ArticleMetaProps> = (args) => {
  return <ArticleMeta {...args} author={undefined} />;
};
export const NoCategories: Story<ArticleMetaProps> = (args) => {
  return <ArticleMeta {...args} categories={undefined} />;
};
export const NoAuthorAndCategories: Story<ArticleMetaProps> = (args) => {
  return <ArticleMeta {...args} author={undefined} categories={undefined} />;
};

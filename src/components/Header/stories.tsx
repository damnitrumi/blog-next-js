import { Meta, Story } from "@storybook/react/types-6-0";
import { LogoLinkProps } from "../LogoLink";
import { Header, HeaderProps } from "./index";
import mock from "./mock";

export default {
  title: "Header",
  component: Header,
  args: mock,
} as Meta;

export const Template: Story<HeaderProps & LogoLinkProps> = (args) => {
  return <Header {...args} />;
};

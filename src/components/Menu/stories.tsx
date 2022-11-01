import { Menu } from ".";
import mock from "./mock";

export default {
  title: "Menu",
  component: Menu,
  args: mock,
};

export const Template = (args) => {
  return <Menu {...args} />;
};

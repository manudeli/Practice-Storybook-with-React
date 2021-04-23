import React from "react";
import { Button } from "@chakra-ui/core";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    variantColor: { control: "text" },
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;
export const Success = Template.bind({});
Success.args = {
  variantColor: "green",
  children: "Success",
};
export const Danger = Template.bind({});
Danger.args = {
  variantColor: "red",
  children: "Danger",
};

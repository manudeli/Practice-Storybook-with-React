import React from "react";
import { Button } from "@chakra-ui/core";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    variantColor: { control: "text" },
    children: { control: "text" },
    onClick: { action: "clicked" },
    onMouseOver: { action: "mouseovered" },
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

export const Log = () => (
  <Button
    variantColor="blue"
    onClick={() => {
      console.log("Button Clicked");
    }}
  >
    Log
  </Button>
);

export const Knobs = () => (
  <Button variantColor="purple" disabled={boolean("Disabled", false)}>
    {text("Label", "Button Label")}
  </Button>
);

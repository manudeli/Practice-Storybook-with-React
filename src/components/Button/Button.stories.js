import React from "react";
import Button from "./Button";
import Center from "../Center/Center";

export default {
  title: "form/control/Button",
  component: Button,
  // Locally Decorate Story
  // decorators: [(story) => <Center>{story()}</Center>],
  args: {
    children: "Button",
  },
};

export const Primary = () => (
  //Decorator
  <Button variant="primary">Primary</Button>
);
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
};

import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  argTypes: {
    variant: { control: 'select', options: ["contained", "outlined", "text"] }
  },
  args: {
    variant: 'contained',
    children: "Click here!",
  },
};

export const Secondary: Story = {
  ...Primary,
  args: {
    variant: "outlined",
    children: "Click here!",
  },
};

export const Text: Story = {
  ...Primary,
  args: {
    variant: "text",
    children: "Click here!",
  },
};

import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import Logo, { LogoProps } from "../Logo";

const meta: Meta = {
  title: "Components/Atoms/Logo",
  component: Logo,
  tags: ["autodocs"],
};

export default meta;

type Logo = StoryObj<typeof Logo>;

export const Small: Logo = {
  args: {
    id: 1,
    link: "/",
    size: "small",
  },
};

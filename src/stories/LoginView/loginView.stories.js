import React from "react";
import { Login, StyleProvider } from "engageme-ui";
import "engageme-ui/dist/index.css";

const { SIZE } = Login.ENUMS;

export default {
  title: "Example/LoginView",
  component: Login,
  argTypes: {
    size: {
      options: Object.values(SIZE),
      control: { type: "radio" },
    },
  },
};

const Template = (args) => (
  <StyleProvider>
    <Login {...args} />
  </StyleProvider>
);

export const Preview = Template.bind({});
Preview.args = {
  head: (
    <img src="https://previews.123rf.com/images/alluranet/alluranet1712/alluranet171200004/91011424-educaci%C3%B3n-c-plantilla-de-dise%C3%B1o-del-logotipo-de-la-representaci%C3%B3n-.jpg" />
  ),
  label: "Sign in with your favorite account",
  footer: "terms and services",
  facebookId: "628280208129875",
  googleId:
    "428267294745-824i3qka450e4psj89hknvtiav6t5mtk.apps.googleusercontent.com",
};

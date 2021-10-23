import { authRoles } from "app/auth";
import Error404Page from "./Error404Page";

const Error404Config = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false,
        },
        toolbar: {
          display: false,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  auth: authRoles.onlyGuest,
  routes: [
    {
      path: "/404",
      component: Error404Page,
    },
  ],
};

export default Error404Config;

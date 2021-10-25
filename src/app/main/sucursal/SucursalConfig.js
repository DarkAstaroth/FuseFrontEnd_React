import { authRoles } from "app/auth";
import Sucursal from "./Sucursal";

const SucursalConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.admin,
  routes: [
    {
      path: "/ecommerce/sucursales",
      component: Sucursal,
    },
  ],
};

export default SucursalConfig;

import i18next from "i18next";
import ar from "./navigation-i18n/ar";
import en from "./navigation-i18n/en";
import tr from "./navigation-i18n/tr";

i18next.addResourceBundle("en", "navigation", en);
i18next.addResourceBundle("tr", "navigation", tr);
i18next.addResourceBundle("ar", "navigation", ar);

const navigationConfig = [
  {
    id: "applications",
    title: "Applications",
    translate: "E-Commerce",
    type: "group",
    icon: "apps",
    children: [
      {
        id: "sucursales",
        title: "Sucursales",
        translate: "Sucursales",
        type: "item",
        icon: "whatshot",
        url: "/ecommerce/sucursales",
      },
      {
        id: "proveedores",
        title: "Proveedores",
        translate: "Proveedores",
        type: "item",
        icon: "whatshot",
        url: "/ecommerce/proveedores",
      },
    ],
  },
];

export default navigationConfig;

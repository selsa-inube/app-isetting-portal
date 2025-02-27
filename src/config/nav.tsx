import { MdOutlineStart, MdVpnKey, MdLogout } from "react-icons/md";

import { INav } from "@pages/home/types";
const appsConfig = [
  {
    id: 1,
    label: "Privilegios",
    description: "Gestionar los Cargos y sus privilegios",
    icon: <MdVpnKey />,
    url: "/",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/",
        isActive: false,
      },
      {
        path: "/privileges",
        label: "Privilegios",
        id: "/privileges",
        isActive: true,
      },
    ],
  },
];

const nav: INav = {
  items: {
    title: "MENU",
    sections: {
      administrate: {
        name: "",
        links: {
          positions: {
            id: "privileges",
            label: "Cargos Inube",
            icon: <MdOutlineStart />,
            path: "/privileges",
          },
        },
      },
    },
  },
  breakpoint: "848px",
};

const userMenu = [
  {
    id: "section",
    title: "",
    links: [
      {
        id: "logout",
        title: "Cerrar sesión",
        path: "/logout",
        iconBefore: <MdLogout />,
      },
    ],
    divider: true,
  },
];

const logoutConfig = {
  logoutPath: "/logout",
  logoutTitle: "Cerrar sesión",
};

export { appsConfig, nav, logoutConfig, userMenu };

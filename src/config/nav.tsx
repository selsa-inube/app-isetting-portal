import {
  MdOutlineStart,
  MdVpnKey,
  MdLogout,
  MdOutlineBusinessCenter,
} from "react-icons/md";
import { INav } from "@ptypes/home/INav";
import { useAuth0 } from "@auth0/auth0-react";
import { enviroment } from "./environment";
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

const useNavigationConfig = () => {
  const { logout } = useAuth0();

  const navigation = {
    nav: {
      reactPortalId: "portal",
      title: "MENU",
      sections: [
        {
          subtitle: "Privilegios",
          links: [
            {
              path: "/privileges/positions",
              label: "Cargos Inube",
              icon: <MdOutlineStart />,
              id: "/positions",
            },
            {
              path: "/privileges/users",
              label: "Usuarios",
              id: "/users",
              icon: <MdOutlineBusinessCenter />,
            },
          ],
          isOpen: false,
          onClose: () => {},
          onToggle: () => {},
        },
      ],
      actions: [
        {
          id: "logout",
          label: "Cerrar sesión",
          icon: <MdLogout />,
          action: () => {
            localStorage.clear();
            logout({
              logoutParams: {
                returnTo: enviroment.REDIRECT_URI,
              },
            });
          },
        },
      ],
      footerLabel: "©2025 - Inube",
      displaySubtitles: true,
      collapse: true,
    },
    breakpoint: "700px",
  };

  return navigation;
};
const nav: INav = {
  items: {
    title: "MENU",
    sections: {
      administrate: {
        name: "",
        links: {
          positions: {
            id: "privileges",
            label: "Privilegios",
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

export { appsConfig, nav, useNavigationConfig, logoutConfig, userMenu };

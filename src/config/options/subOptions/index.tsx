import {
  MdGroup,
  MdOutlineBusinessCenter,
  MdSupervisedUserCircle,
} from "react-icons/md";

const subOptions = [
  {
    publicCode: "Privilegios",
    publicCodeOption: "users",
    icon: <MdOutlineBusinessCenter />,
    url: "/privileges/users",
    domain: "catalogs",
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

      {
        path: "/privileges/users",
        label: "Usuarios",
        id: "/users",
        isActive: true,
      },
    ],
  },
  {
    publicCode: "Privilegios",
    publicCodeOption: "Cargos de las unidades de negocio",
    icon: <MdGroup />,
    url: "/privileges/positions",
    domain: "catalogs",
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

      {
        path: "/privileges/positions",
        label: "Cargos de las unidades de negocio",
        id: "/positions",
        isActive: true,
      },
    ],
  },
  {
    publicCode: "Privilegios",
    publicCodeOption: "Cargos de los operadores",
    icon: <MdSupervisedUserCircle />,
    url: "/privileges/missions",
    domain: "catalogs",
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

      {
        path: "/privileges/missions",
        label: "Cargos de los operadores",
        id: "/missions",
        isActive: true,
      },
    ],
  },
];

export { subOptions };

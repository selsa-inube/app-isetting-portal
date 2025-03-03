import { MdOutlineBusinessCenter } from "react-icons/md";

const PrivilegeOptionsConfig = [
  {
    id: 1,
    icon: <MdOutlineBusinessCenter />,
    label: "Cargos",
    description:
      "Gestionar todo lo relacionado con los permisos para los usuarios de la Plataforma INUBE",
    url: "/privileges/positions",
    domain: "positions",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/",
        isActive: false,
      },
      {
        path: "/positions",
        label: "Cargos",
        id: "/positions",
        isActive: false,
      },
      {
        path: "/privileges/positions",
        label: "Cargos",
        id: "/privileges/positions",
        isActive: true,
      },
    ],
  },
];

const PaginationConfig = {
  PageRecord: 10,
};

export { PrivilegeOptionsConfig, PaginationConfig };

import { MdOutlineBusinessCenter } from "react-icons/md";

const PrivilegeOptionsConfig = [
  {
    id: 1,
    icon: <MdOutlineBusinessCenter />,
    label: "Cargos",
    description:
      "Gestionar todo lo relacionado con los permisos para los usuarios de la Plataforma INUBE",
    url: "/positions",
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
        isActive: true,
      },
    ],
  },
];

const PaginationConfig = {
  PageRecord: 1,
};

export { PrivilegeOptionsConfig, PaginationConfig };

import {
  MdGroup,
  MdOutlineBusinessCenter,
  MdOutlineStart,
} from "react-icons/md";

const options = [
  {
    publicCode: "Privilegios",
    icon: <MdOutlineStart />,
    url: "/privileges",
  },
];

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
    publicCodeOption: "Cargos Inube",
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
        label: "Cargos Inube",
        id: "/positions",
        isActive: true,
      },
    ],
  },
];

const normalizeOptionsByPublicCode = (publicCode: string) =>
  options.find((data) => data.publicCode === publicCode);

const normalizesubOptionsByPublicCode = (
  publicCode: string,
  publicCodeSubOption: string
) =>
  subOptions.find(
    (data) =>
      data.publicCode === publicCode &&
      data.publicCodeOption === publicCodeSubOption
  );
export {
  options,
  normalizeOptionsByPublicCode,
  normalizesubOptionsByPublicCode,
};

import {
  MdBusinessCenter,
  MdOutlinePeopleAlt,
  MdOutlinePerson,
  MdOutlineWorkOutline,
} from "react-icons/md";

const options = [
  {
    publicCode: "Cargos de los operadores",
    icon: <MdBusinessCenter />,
    url: "/missions",
  },
  {
    publicCode: "Cargos de las unidades de negocio",
    icon: <MdOutlineWorkOutline />,
    url: "/positions",
  },
  {
    publicCode: "Funcionarios",
    icon: <MdOutlinePerson />,
    url: "/users",
  },
  {
    publicCode: "Encargos",
    icon: <MdOutlinePeopleAlt />,
    url: "/assignments",
  },
];

export { options };

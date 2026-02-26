import { MdAdd } from "react-icons/md";

const menuPositionLinks = (disabled: boolean) => [
  {
    description: "Solicitar cargo ",
    path: "/positions/add-position",
    icon: <MdAdd />,
    disabled: disabled,
  },
];

export { menuPositionLinks };

import { MdAdd } from "react-icons/md";

const menuMissionsLinks = (disabled: boolean) => [
  {
    description: "Solicitar cargo ",
    path: "/missions/add-mission",
    icon: <MdAdd />,
    disabled: disabled,
  },
];

export { menuMissionsLinks };

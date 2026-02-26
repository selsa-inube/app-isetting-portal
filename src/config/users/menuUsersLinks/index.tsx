import { MdAdd } from "react-icons/md";

const menuUsersLinks = (disabled: boolean) => [
  {
    description: "Agregar funcionario ",
    path: "/users/addUser",
    icon: <MdAdd />,
    disabled: disabled,
  },
];

export { menuUsersLinks };

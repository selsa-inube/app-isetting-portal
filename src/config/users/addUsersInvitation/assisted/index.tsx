const createUserConfig = [
  {
    id: 1,
    title: "Usuarios",
    description:
      "Consultar, crear, editar y eliminar los privilegios de un usuario.",
    route: "/privileges/users/add-users",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/home",
        isActive: false,
      },
      {
        path: "/privileges",
        label: "Privilegios",
        id: "/privileges",
        isActive: false,
      },
      {
        path: "/privileges/users",
        label: "Usuarios",
        id: "/privileges/users",
        isActive: false,
      },
      {
        path: "/privileges/users/add-users",
        label: "Agregar usuario",
        id: "/privileges/users/add-users",
        isActive: true,
      },
    ],
  },
];

export { createUserConfig };

const createUserInvitationConfig = [
  {
    id: 1,
    title: "Usuarios",
    description:
      "Consultar, crear, editar y eliminar los privilegios de un usuario.",
    route: "/privileges/users/invitation-users",
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
        path: "/privileges/users/invitation-users",
        label: "Invitar usuario",
        id: "/privileges/users/invitation-users",
        isActive: true,
      },
    ],
  },
];

export { createUserInvitationConfig };

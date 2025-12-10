import { IAssistedStep } from "@inubekit/inubekit";

const addStaffRolesSteps: IAssistedStep[] = [
  {
    id: 1,
    number: 1,
    name: "Información general",
    description: "Por favor completa la información general.",
  },

  {
    id: 2,
    number: 2,
    name: "Selección de roles",
    description: "Selecciona los roles que necesites.",
  },

  {
    id: 3,
    number: 3,
    name: "Verificación",
    description:
      "Verifica las opciones activadas, si es necesario cámbialas o por el contrario si todo está correcto dale enviar.",
  },
];

export { addStaffRolesSteps };

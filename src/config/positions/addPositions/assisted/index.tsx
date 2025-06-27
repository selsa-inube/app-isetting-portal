import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";
import { IAssistedStep, Icon } from "@inubekit/inubekit";

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

const createPositionConfig = [
  {
    id: 1,
    title: "Consulta de cargos vigentes",
    description:
      "Consultar, crear, editar y eliminar los privilegios de un cargo.",
    route: "/privileges/positions/add-position",
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
        path: "/privileges/positions",
        label: "Cargos Inube",
        id: "/privileges/positions",
        isActive: false,
      },
      {
        path: "/privileges/positions/add-position",
        label: "Solicitar nuevo cargo",
        id: "/privileges/positions/add-position",
        isActive: true,
      },
    ],
  },
];

const finishAssistedPositionModalConfig = {
  title: "Finalizar registro",
  description: "¿Está seguro de que desea finalizar el proceso de creación?",
  actionText: "Finalizar",
  appearance: "success",
};

const finishAssistedPositionMessagesConfig = {
  success: {
    id: 1,
    icon: <Icon appearance="dark" icon={<MdThumbUpOffAlt />} size="18px" />,
    title: "Creación exitosa",
    description: (value: string) =>
      `Hemos creado el cargo ${value} exitosamente.`,
    appearance: "success",
  },
  failed: {
    id: 2,
    icon: <Icon appearance="dark" icon={<MdErrorOutline />} size="18px" />,
    title: "¡Uy, algo ha salido mal!",
    description: (value: string) =>
      `Hemos presentado un error creando el cargo ${value}.`,
    appearance: "danger",
  },
};

const finishAssistedModalConfig = {
  title: "Finalizar registro",
  description: "¿Está seguro de que desea finalizar el proceso de creación?",
  actionText: "Finalizar",
  appearance: "success",
};

export {
  addStaffRolesSteps,
  createPositionConfig,
  finishAssistedPositionModalConfig,
  finishAssistedPositionMessagesConfig,
  finishAssistedModalConfig,
};

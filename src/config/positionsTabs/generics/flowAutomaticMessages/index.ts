import { ComponentAppearance } from "@ptypes/aparences.types";

const flowAutomaticMessages = {
  errorSendingData: {
    title: "Error al enviar los datos",
    description:
      "No fue posible al enviar los datos, por favor intenta más tarde",
    appearance: ComponentAppearance.DANGER,
    duration: 5000,
  },
  errorQueryingData: {
    title: "Error al consultar la creacion solicitud",
    description:
      "No fue posible consultar la creacion solicitud por favor intenta más tarde",
    appearance: ComponentAppearance.DANGER,
    duration: 5000,
  },
  errorCreateRequest: {
    title: "Error en la solicitud",
    description: "Verifique su solicitud en la pestaña solicitudes en tramite",
    appearance: ComponentAppearance.DANGER,
    duration: 5000,
  },
  requestInQueue: {
    title: "Solicitud en cola",
    description: "Verifique su solicitud en la pestaña solicitudes en tramite",
    appearance: ComponentAppearance.WARNING,
    duration: 5000,
  },
  SuccessfulCreateRequest: {
    title: "¡Creación de solicitud exitosa!",
    description: "Se creo el cargo con éxito",
    appearance: ComponentAppearance.SUCCESS,
    duration: 5000,
  },
};

export { flowAutomaticMessages };

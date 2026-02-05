import { EComponentAppearance } from "@enum/appearances";

const flowAutomaticMessages = (action?: string, entity?: string) => {
  const flowAutomatic = {
    errorSendingData: {
      title: "¡Ups! Algo salió mal",
      description: "La solicitud No se envio correctamente",
      appearance: EComponentAppearance.DANGER,
      duration: 3000,
    },
    errorQueryingData: {
      title: "Error al realizar la acción",
      description:
        "No fue posible realizar la acción, por favor intenta más tarde",
      appearance: EComponentAppearance.DANGER,
      duration: 3000,
    },
    errorCreateRequest: {
      title: "Error en la solicitud",
      description: "Verificar su solicitud en solicitudes en tramite",
      appearance: EComponentAppearance.DANGER,
      duration: 3000,
    },
    successfulCreateRequest: {
      title: `${entity} ${action} con éxito!`,
      description: `${entity} fue ${action} con éxito!`,
      appearance: EComponentAppearance.SUCCESS,
      duration: 3000,
    },
  };

  return flowAutomatic;
};

export { flowAutomaticMessages };

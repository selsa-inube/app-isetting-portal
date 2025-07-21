import { EComponentAppearance } from "@enum/appearances";

const withoutBusinessUnitsMessage = {
  errorBusinessUnits: {
    title: "Error en el servicio",
    description:
      "Error al obtener los de las unidades de negocio.",
    appearance: EComponentAppearance.DANGER,
    duration: 3000,
  },
  withoutUnits :{
     title: "Sin unidades de negocio",
    description:
      "El funcionario no tiene unidades de negocio relacionadas.",
    appearance: EComponentAppearance.DANGER,
    duration: 3000,
  }
};

export { withoutBusinessUnitsMessage };

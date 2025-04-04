import { IAssistedStep } from "@inubekit/inubekit";

// const AddPositionsStepsConfig = (NameDescription: string) => {
const AddPositionsSteps: IAssistedStep[] = [
  {
    id: 1,
    number: 1,
    name: "Datos generales",
    description: "Selecciona o agrega un nuevo destino.",
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
    description: "Confirma la información diligenciada en pasos anteriores.",
  },
];
//   return AddPositionsSteps;
// };

const titleButtonTextAssited = {
  before: "Atrás",
  after: "Siguiente",
  finish: "Enviar",
};

export { AddPositionsSteps, titleButtonTextAssited };

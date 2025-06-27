import { IRequestSteps } from "@ptypes/feedback/requestProcess/IRequestSteps";

const requestStepsMock: IRequestSteps[] = [
  { name: "Solicitud radicada", status: "completed" },
  { name: "Evaluando requisitos", status: "completed" },
  { name: "Agregando", status: "completed" },
  { name: "Destino agregado", status: "completed" },
];

export { requestStepsMock };

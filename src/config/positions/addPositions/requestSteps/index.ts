import { IRequestSteps } from "@ptypes/feedback/requestProcess/IRequestSteps";

const requestStepsInitial: IRequestSteps[] = [
  { name: "Solicitud radicada", status: "pending" },
  { name: "Agregando", status: "pending" },
  { name: "Destino agregado", status: "pending" },
];

export { requestStepsInitial };

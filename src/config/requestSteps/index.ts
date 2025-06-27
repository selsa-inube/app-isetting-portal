import { IRequestSteps } from "@ptypes/requestsInProgress/IRequestSteps";

const requestStepsInitial: IRequestSteps[] = [
  { name: "Solicitud radicada", status: "pending" },
  { name: "Agregando", status: "pending" },
  { name: "Solicitud agregada", status: "pending" },
];

export { requestStepsInitial };

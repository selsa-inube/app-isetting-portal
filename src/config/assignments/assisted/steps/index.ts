import { IAssistedStep } from "@inubekit/inubekit";

const addAssignmentsSteps: IAssistedStep[] = [
  {
    id: 1,
    number: 1,
    name: "Funcionario encargado",
    description: "Selecciona al funcionario que tomará las responsabilidades.",
  },
  {
    id: 2,
    number: 2,
    name: "Unidades de negocio del encargo",
    description: "Selecciona las unidades de negocio que tomará el funcionario.",
  },
  {
    id: 3,
    number: 3,
    name: "Roles por unidad de negocio",
    description: "Selecciona para cada U.N los roles para el funcionario encargado.",
  },
  {
    id: 4,
    number: 4,
    name: "Motivo y cubrimiento",
    description: "Define el periodo del encargo y describe su motivo.",
  },
  {
    id: 5,
    number: 5,
    name: "Verificación",
    description: "Confirma la información diligenciada en pasos anteriores.",
  },
];

export { addAssignmentsSteps };

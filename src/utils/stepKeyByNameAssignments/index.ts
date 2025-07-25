import { addAssignmentsSteps } from "@config/assignments/assisted/steps";

const stepKeyByNameAssignments = Object.fromEntries(
  addAssignmentsSteps.map((step) => [step.name, step.number]),
);

export { stepKeyByNameAssignments };

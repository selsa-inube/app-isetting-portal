import { addStaffRolesSteps } from "@config/positions/addPositions/assisted";

const stepKeyByNamePositions = Object.fromEntries(
  addStaffRolesSteps.map((step) => [step.name, step.number]),
);

export { stepKeyByNamePositions };

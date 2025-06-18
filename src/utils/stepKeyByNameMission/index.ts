import { assistedSteps } from "@config/missions/missionTab/assisted/assistedSteps";

const stepKeyByNameMission = Object.fromEntries(
  assistedSteps.map((step) => [step.name, step.number]),
);

export { stepKeyByNameMission };

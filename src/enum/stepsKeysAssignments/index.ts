import { stepKeyByNameAssignments } from "@utils/stepKeyByNameAssignments";

const stepsKeysAssignments = {
  OFFICIAL_IN_CHARGE: stepKeyByNameAssignments["Funcionario encargado"],
  BUSINESS_UNITS_ASSIGNMENT:
    stepKeyByNameAssignments["Unidades de negocio del encargo"],
  ROLES_BY_BUSINESS_UNIT:
    stepKeyByNameAssignments["Roles por unidad de negocio"],
  REASON_AND_COVERAGE: stepKeyByNameAssignments["Motivo y cubrimiento"],
  VERIFICATION: stepKeyByNameAssignments["Verificación"],
};

export { stepsKeysAssignments };

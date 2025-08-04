import { stepsKeysAssignments } from "@enum/stepsKeysAssignments";
import { IVerificationBoxes } from "@ptypes/assignments/assisted/IAddAssignmentForms/IVerificationBoxes";
import { RenderOfficialInChargeVerification } from "../officialInChargeVerification";
import { RenderBusinessUnitVerification } from "../businessUnitVerification";
import { RenderRolesByUnitVerification } from "../rolesByBusinessUnitVerification";
import { RenderReasonAndCoverageVerification } from "../reasonAndCoverageVerification";

const VerificationBoxes = (props: IVerificationBoxes) => {
  const { updatedData, stepKey, isMobile } = props;

  return (
    <>
      {stepKey === stepsKeysAssignments.OFFICIAL_IN_CHARGE && (
        <RenderOfficialInChargeVerification
          values={updatedData.officialInCharge.values}
        />
      )}
      {stepKey === stepsKeysAssignments.BUSINESS_UNITS_ASSIGNMENT && (
        <RenderBusinessUnitVerification
          values={updatedData.businessUnitOfficial.values}
        />
      )}
      {stepKey === stepsKeysAssignments.ROLES_BY_BUSINESS_UNIT && (
        <RenderRolesByUnitVerification
          values={updatedData.rolesByBusinessUnits.values}
          isMobile={isMobile}
        />
      )}
       {stepKey === stepsKeysAssignments.REASON_AND_COVERAGE && (
        <RenderReasonAndCoverageVerification
          values={updatedData.reasonAndCoverage.values}
          isMobile={isMobile}
        />
      )}
      
    </>
  );
};

export { VerificationBoxes };

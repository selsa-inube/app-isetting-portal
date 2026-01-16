import { useMediaQuery } from "@inubekit/inubekit";
import { IVerificationBoxes } from "@ptypes/verification/IVerificationBoxes";
import { RenderStepTwoVerification } from "./renderStepTwoVerification";
import { EStepsKeysPositions } from "@enum/stepsKeysPositions";
import { RenderPersonalInfoVerification } from "./renderPersonalInfoVerification";
import { mediaQueryMobile } from "@config/environment";

const VerificationBoxes = (props: IVerificationBoxes) => {
  const { updatedData, stepKey } = props;

  const isMobile = useMediaQuery(mediaQueryMobile);

  return (
    <>
      {stepKey === EStepsKeysPositions.GENERAL_INFO && (
        <RenderPersonalInfoVerification
          values={updatedData.generalInformation.values}
          isMobile={isMobile}
        />
      )}
      {stepKey === EStepsKeysPositions.ROLES && (
        <RenderStepTwoVerification
          values={updatedData.rolesStaff.values}
          isMobile={isMobile}
        />
      )}
    </>
  );
};

export { VerificationBoxes };

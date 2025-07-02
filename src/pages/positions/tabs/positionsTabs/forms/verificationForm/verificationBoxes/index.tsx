import { useMediaQuery } from "@inubekit/inubekit";
import { IVerificationBoxes } from "@ptypes/verification/IVerificationBoxes";
import { RenderStepTwoVerification } from "./renderStepTwoVerification";
import { stepsKeysPositions } from "@enum/stepsKeysPositions";
import { RenderPersonalInfoVerification } from "./renderPersonalInfoVerification";
import { enviroment } from "@config/environment";

const VerificationBoxes = (props: IVerificationBoxes) => {
  const { updatedData, stepKey } = props;

  const isMobile = useMediaQuery(enviroment.IS_MOBILE_970);

  return (
    <>
      {stepKey === stepsKeysPositions.GENERAL_INFO && (
        <RenderPersonalInfoVerification
          values={updatedData.generalInformation.values}
          isMobile={isMobile}
        />
      )}
      {stepKey === stepsKeysPositions.ROLES && (
        <RenderStepTwoVerification
          values={updatedData.rolesStaff.values}
          isMobile={isMobile}
        />
      )}
    </>
  );
};

export { VerificationBoxes };

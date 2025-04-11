import { useMediaQuery } from "@inubekit/inubekit";
import { IVerificationBoxes } from "@ptypes/verification/IVerificationBoxes";
import { renderPersonalInfoVerification } from "./renderPersonalInfoVerification";
import { renderStepTwoVerification } from "./renderStepTwoVerification";

const VerificationBoxes = (props: IVerificationBoxes) => {
  const { updatedData, stepKey } = props;
  const isMobile = useMediaQuery("(max-width: 990px)");

  return (
    <>
      {stepKey === 1 &&
        renderPersonalInfoVerification({
          values: updatedData.generalInformation.values,
          isMobile: isMobile,
        })}
      {stepKey === 2 &&
        renderStepTwoVerification({
          values: updatedData.rolesStaff.values,
          isMobile: isMobile,
        })}
    </>
  );
};

export { VerificationBoxes };

import { useMediaQuery } from "@inubekit/inubekit";
import { IFormAddPosition } from "@ptypes/forms/verificationForm/IFormAddPosition";
import { renderPersonalInfoVerification } from "@utils/forms/renderPersonalInfoVerification";
import { renderStepTwoVerification } from "@utils/forms/renderStepTwoVerification";

interface IVerificationBoxes {
  updatedData: IFormAddPosition;
  stepKey: number;
}

const VerificationBoxes = (props: IVerificationBoxes) => {
  const { updatedData, stepKey } = props;

  const isMobile = useMediaQuery("(max-width: 990px)");

  return (
    <>
      {stepKey === 1 &&
        renderPersonalInfoVerification(
          updatedData.generalInformation.values,
          isMobile
        )}
      {stepKey === 2 &&
        renderStepTwoVerification(updatedData.rolesStaff.values, isMobile)}
    </>
  );
};

export { VerificationBoxes };

import { useMediaQuery } from "@inubekit/inubekit";
import { IFormAddPosition } from "../types";
import {
  renderPersonalInfoVerification,
  renderStepTwoVerification,
} from "./utils";

interface IVerificationBoxes {
  updatedData: IFormAddPosition;
  stepKey: number;
}

const VerificationBoxes = ({ updatedData, stepKey }: IVerificationBoxes) => {
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

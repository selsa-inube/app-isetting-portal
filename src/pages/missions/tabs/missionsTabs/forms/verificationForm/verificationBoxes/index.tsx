import { stepKeysMission } from "@enum/stepsKeysMission";
import { RenderGeneralinfoVerification } from "../GeneralinfoVerification";
import { IVerificationBoxes } from "@ptypes/missions/assisted/IVerificationBoxes";

const VerificationBoxes = (props: IVerificationBoxes) => {
  const { updatedData, stepKey, isMobile } = props;

  return (
    <>
      {stepKey === stepKeysMission.GENERAL_INFO && (
        <RenderGeneralinfoVerification
          values={updatedData.generalInformation.values}
          isMobile={isMobile}
        />
      )}
      
    </>
  );
};

export { VerificationBoxes };

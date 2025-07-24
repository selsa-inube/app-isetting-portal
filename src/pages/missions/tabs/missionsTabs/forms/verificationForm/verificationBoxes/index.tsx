import { stepKeysMission } from "@enum/stepsKeysMission";
import { IVerificationBoxes } from "@ptypes/missions/assisted/IVerificationBoxes";
import { RenderGeneralinfoVerification } from "../GeneralinfoVerification";

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

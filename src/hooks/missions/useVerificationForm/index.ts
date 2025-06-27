import { useMediaQuery } from "@inubekit/inubekit";
import { assistedSteps } from "@config/missions/missionTab/assisted/assistedSteps";
import { verificationLabels } from "@config/missions/missionTab/assisted/verification";
import { IUseVerification } from "@ptypes/missions/IUseVerification";
import { basic } from "@design/tokens";

const useVerification = (props: IUseVerification) => {
  const {
    showRequestProcessModal,
    saveMission,
    showPendingReqModal,
  } = props;

  const isTablet = useMediaQuery("(max-width: 1224px)");

  const isMobile = useMediaQuery("(max-width: 990px)");

  const canShowRequestProcess = showRequestProcessModal && saveMission;

  const canShowPendingRequest =
    showPendingReqModal && saveMission && saveMission.requestNumber.length > 0;

  const steps = assistedSteps.filter((step) => 
 step.name.toLowerCase() !== verificationLabels.verification)
      
const gapStack = isTablet ? basic.spacing.s150 : basic.spacing.s200

  return {
    steps,
    isTablet,
    isMobile,
    canShowRequestProcess,
    canShowPendingRequest,
    gapStack,
  };
};

export { useVerification };

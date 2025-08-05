import { useMediaQuery } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { verificationLabels } from "@config/assignments/assisted/verification";
import { enviroment } from "@config/environment";
import { addAssignmentsSteps } from "@config/assignments/assisted/steps";
import { IUseVerification } from "@ptypes/assignments/IUseVerification";

const useVerification = (props: IUseVerification) => {
  const { showRequestProcessModal, saveAssignments, showPendingReqModal } = props;

  const isTablet = useMediaQuery(enviroment.IS_MOBILE_1200);

  const isMobile = useMediaQuery(enviroment.IS_MOBILE_970);

  const canShowRequestProcess = showRequestProcessModal && saveAssignments;

  const canShowPendingRequest =
    showPendingReqModal && saveAssignments && saveAssignments.requestNumber.length > 0;

  const steps = addAssignmentsSteps.filter(
    (step) => step.name.toLowerCase() !== verificationLabels.verification
  );

  const gapStack = isTablet ? basic.spacing.s150 : basic.spacing.s200;

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

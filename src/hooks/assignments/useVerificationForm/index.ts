import { useMediaQuery } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { verificationLabels } from "@config/assignments/assisted/verification";
import { mediaQueryTablet, mediaQueryTabletMain } from "@config/environment";
import { addAssignmentsSteps } from "@config/assignments/assisted/steps";
import { IUseVerification } from "@ptypes/assignments/IUseVerification";

const useVerification = (props: IUseVerification) => {
  const { showRequestProcessModal, saveAssignments, showPendingRequestModal } =
    props;

  const isTablet = useMediaQuery(mediaQueryTablet);

  const isMobile = useMediaQuery(mediaQueryTabletMain);

  const canShowRequestProcess = showRequestProcessModal && saveAssignments;

  const canShowPendingRequest =
    showPendingRequestModal &&
    saveAssignments &&
    saveAssignments.requestNumber.length > 0;

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

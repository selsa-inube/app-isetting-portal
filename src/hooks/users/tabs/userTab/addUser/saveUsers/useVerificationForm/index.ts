import { useMediaQuery } from "@inubekit/inubekit";
import { IUseVerificationForm } from "@ptypes/users/tabs/userTab/addUser/forms/verificationForm/IUseVerificationForm";

const useVerificationForm = (props: IUseVerificationForm) => {
  const { showRequestProcessModal, saveUsers, showPendingReqModal } = props;

  const isMobile = useMediaQuery("(max-width: 990px)");

  const canShowRequestProcess = showRequestProcessModal && saveUsers;

  const canShowPendingRequest = showPendingReqModal && saveUsers.requestNumber;

  return {
    isMobile,
    canShowRequestProcess,
    canShowPendingRequest,
  };
};

export { useVerificationForm };

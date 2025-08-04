import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { IFlagAppearance, useFlag } from "@inubekit/inubekit";
import { ChangeToRequestTab } from "@context/changeToRequestTab";
import { postSaveRequest } from "@services/saveRequest/postSaveRequest";
import { EUseCase } from "@enum/useCase";
import { statusRequestFinished } from "@config/status/statusRequestFinished";
import { requestStatusMessage } from "@config/assignments/generic/requestStatusMessage";
import { flowAutomaticMessages } from "@config/assignments/generic/flowAutomaticMessages";
import { interventionHumanMessage } from "@config/assignments/generic/interventionHumanMessage";
import { IUseSaveAssigments } from "@ptypes/hooks/assignments/IUseSaveAssigments";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { useRequest } from "../useRequest";

const useSaveAssignments = (props: IUseSaveAssigments) => {
  const {
    useCase,
    userAccount,
    sendData,
    data,
    setSendData,
    setShowModal,
    setErrorFetchSaveData,
    setEntryDeleted,
  } = props;

  const [saveAssignments, setsaveAssignments] = useState<ISaveDataResponse>();
  const [statusRequest, setStatusRequest] = useState<string>();
  const { addFlag } = useFlag();

  const [showPendingReqModal, setShowPendingReqModal] = useState(false);
  const [loadingSendData, setLoadingSendData] = useState(false);

  const { setChangeTab } = useContext(ChangeToRequestTab);

  const navigate = useNavigate();
  const navigatePage = "/assigments";

  const fetchSaveAssigmentsData = async () => {
    setLoadingSendData(true);
    try {
      const saveData = await postSaveRequest(userAccount, data);
      setsaveAssignments(saveData);
    } catch (error) {
      console.info(error);
      if (setErrorFetchSaveData) {
        setErrorFetchSaveData(true);
      }
      setSendData(false);
      navigate(navigatePage);
      addFlag({
        title: flowAutomaticMessages().errorSendingData.title,
        description: flowAutomaticMessages().errorSendingData.description,
        appearance: flowAutomaticMessages().errorSendingData
          .appearance as IFlagAppearance,
        duration: flowAutomaticMessages().errorSendingData.duration,
      });
    } finally {
      setLoadingSendData(false);
      setShowModal(false);
    }
  };

  const {
    requestSteps,
    changeRequestSteps,
    handleStatusChange,
    isStatusCloseModal,
    isStatusRequestFinished,
    isStatusIntAutomatic,
  } = useRequest({
    setSendData,
    useCase,
    statusRequest: statusRequest || "",
    saveAssignments: saveAssignments as ISaveDataResponse,
  });

  const handleCloseProcess = () => {
    setSendData(false);
    if (isStatusCloseModal() || isStatusRequestFinished()) {
      handleStatusChange();
    }
    if (useCase !== EUseCase.DELETE) {
      setTimeout(() => {
        navigate(navigatePage);
      }, 3000);
    }
    if (
      setEntryDeleted &&
      statusRequest &&
      statusRequestFinished.includes(statusRequest)
    ) {
      setTimeout(() => {
        setEntryDeleted(
          data.configurationRequestData.payrollForDeductionAgreementId as string
        );
      }, 3000);
    }
  };

  useEffect(() => {
    if (!sendData) return;
    fetchSaveAssigmentsData();
  }, [sendData]);

  useEffect(() => {
    if (isStatusIntAutomatic(saveAssignments?.requestStatus)) {
      setStatusRequest("");
    }
  }, [saveAssignments]);

  useEffect(() => {
    changeRequestSteps();
  }, [statusRequest]);

  const handleCloseRequestStatus = () => {
    setSendData(false);
    setChangeTab(true);
    navigate(navigatePage);
    addFlag({
      title: interventionHumanMessage.successfulCreateRequestIntHuman.title,
      description:
        interventionHumanMessage.successfulCreateRequestIntHuman.description,
      appearance: interventionHumanMessage.successfulCreateRequestIntHuman
        .appearance as IFlagAppearance,
      duration:
        interventionHumanMessage.successfulCreateRequestIntHuman.duration,
    });
  };

  const handleClosePendingReqModal = () => {
    setShowPendingReqModal(false);
    setChangeTab(true);
    navigate(navigatePage);
  };

  const showRequestProcess = sendData && saveAssignments;
  const showRequestStatus =
    showPendingReqModal && saveAssignments?.requestNumber;

  const {
    title: titleRequest,
    description: descriptionRequest,
    actionText: actionTextRequest,
  } = requestStatusMessage(saveAssignments?.staffName);

  return {
    saveAssignments,
    requestSteps,
    showPendingReqModal,
    loadingSendData,
    showRequestProcess,
    showRequestStatus,
    titleRequest,
    descriptionRequest,
    actionTextRequest,
    handleCloseProcess,
    handleCloseRequestStatus,
    handleClosePendingReqModal,
  };
};

export { useSaveAssignments };

import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { IFlagAppearance, useFlag } from "@inubekit/inubekit";

import { postSaveRequest } from "@services/saveRequest/postSaveRequest";
import { ERequestStepsStatus } from "@enum/requestStepsStatus";
import { ChangeToRequestTab } from "@context/changeToRequestTab";
import { EUseCase } from "@enum/useCase";
import { flowAutomaticMessages } from "@config/missions/missionTab/generic/flowAutomaticMessages";
import { interventionHumanMessage } from "@config/missions/missionTab/generic/interventionHumanMessage";
import { statusFlowAutomatic } from "@config/status/statusFlowAutomatic";
import { statusCloseModal } from "@config/status/statusCloseModal";
import { requestStepsInitial } from "@config/requestSteps";
import { operationTypes } from "@config/useCase";
import { requestStepsNames } from "@config/requestStepsNames";
import { statusRequestFinished } from "@config/status/statusRequestFinished";
import { requestStatusMessage } from "@config/missions/missionTab/generic/requestStatusMessage";
import { IUseSaveMission } from "@ptypes/hooks/missions/IUseSaveMission";
import { IRequestSteps } from "@ptypes/requestsInProgress/IRequestSteps";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";

const useSaveMission = (props: IUseSaveMission) => {
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

  const [saveMission, setsaveMission] = useState<ISaveDataResponse>();
  const [statusRequest, setStatusRequest] = useState<string>();
  const { addFlag } = useFlag();
  const [requestSteps, setRequestSteps] =
    useState<IRequestSteps[]>(requestStepsInitial);
  const [showPendingReqModal, setShowPendingReqModal] = useState(false);
  const [loadingSendData, setLoadingSendData] = useState(false);
  const [errorFetchRequest] = useState(false);
  const { setChangeTab } = useContext(ChangeToRequestTab);

  const navigate = useNavigate();
  const navigatePage = "/privileges/missions";

  const fetchSaveMissionData = async () => {
    setLoadingSendData(true);
    try {
      const saveData = await postSaveRequest(userAccount, data);
      setsaveMission(saveData);
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

  const isStatusIntAutomatic = (status: string | undefined): boolean => {
    return status ? statusFlowAutomatic.includes(status) : false;
  };

  const updateRequestSteps = (
    steps: IRequestSteps[],
    stepName: string,
    newStatus: ERequestStepsStatus,
  ): IRequestSteps[] => {
    return steps.map((step) => {
      if (step.name === stepName) {
        return {
          ...step,
          status: newStatus,
        };
      }
      return step;
    });
  };

  const isStatusCloseModal = (): boolean => {
    return statusRequest ? statusCloseModal.includes(statusRequest) : false;
  };

  const isStatusRequestFinished = (): boolean => {
    return statusRequest
      ? statusRequestFinished.includes(statusRequest)
      : false;
  };

  const changeRequestSteps = () => {
    setTimeout(() => {
      if (errorFetchRequest) {
        setRequestSteps((prev) =>
          updateRequestSteps(
            prev,
            requestStepsNames.requestFilled,
            ERequestStepsStatus.ERROR,
          ),
        );
        setSendData(false);
      } else {
        setRequestSteps((prev) =>
          updateRequestSteps(
            prev,
            requestStepsNames.requestFilled,
            ERequestStepsStatus.COMPLETED,
          ),
        );
      }
    }, 1500);
    setTimeout(() => {
      if (isStatusIntAutomatic(statusRequest)) {
        setRequestSteps((prev) =>
          updateRequestSteps(
            prev,
            requestStepsNames.adding,
            ERequestStepsStatus.COMPLETED,
          ),
        );
      }

      if (isStatusRequestFinished()) {
        setRequestSteps((prev) =>
          updateRequestSteps(
            prev,
            requestStepsNames.adding,
            ERequestStepsStatus.COMPLETED,
          ),
        );
        setRequestSteps((prev) =>
          updateRequestSteps(
            prev,
            requestStepsNames.requestAdded,
            ERequestStepsStatus.COMPLETED,
          ),
        );
      }

      if (isStatusCloseModal()) {
        setRequestSteps((prev) =>
          updateRequestSteps(
            prev,
            requestStepsNames.adding,
           ERequestStepsStatus.ERROR,
          ),
        );
      }
    }, 2000);
  };

  const handleStatusChange = () => {
    if (isStatusIntAutomatic(saveMission?.requestStatus)) {
      if (isStatusCloseModal()) {
        setChangeTab(true);
        addFlag({
          title: flowAutomaticMessages().errorCreateRequest.title,
          description: flowAutomaticMessages().errorCreateRequest.description,
          appearance: flowAutomaticMessages().errorCreateRequest
            .appearance as IFlagAppearance,
          duration: flowAutomaticMessages().errorCreateRequest.duration,
        });
      }

      if (isStatusRequestFinished()) {
        addFlag({
          title: flowAutomaticMessages(
            operationTypes[useCase as keyof typeof operationTypes]
          ).successfulCreateRequest.title,
          description: flowAutomaticMessages(
            operationTypes[useCase as keyof typeof operationTypes]
          ).successfulCreateRequest.description,
          appearance: flowAutomaticMessages(
            operationTypes[useCase as keyof typeof operationTypes]
          ).successfulCreateRequest.appearance as IFlagAppearance,
          duration: flowAutomaticMessages(
            operationTypes[useCase as keyof typeof operationTypes]
          ).successfulCreateRequest.duration,
        });
      }
    }
  };

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
    fetchSaveMissionData();
  }, [sendData]);

  useEffect(() => {
    if (isStatusIntAutomatic(saveMission?.requestStatus)) {
      setStatusRequest("");
    }
  }, [saveMission]);

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

  const showRequestProcess = sendData && saveMission;
  const showRequestStatus =
    showPendingReqModal && saveMission?.requestNumber;

  const {
    title: titleRequest,
    description: descriptionRequest,
    actionText: actionTextRequest,
  } = requestStatusMessage(saveMission?.staffName);

  return {
    saveMission,
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

export { useSaveMission };

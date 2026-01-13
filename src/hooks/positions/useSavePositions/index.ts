import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { IFlagAppearance, useFlag, useMediaQuery } from "@inubekit/inubekit";
import { ChangeToRequestTab } from "@context/changeToRequestTab";
import { postSaveRequest } from "@services/saveRequest/postSaveRequest";
import { getRequestInProgressById } from "@services/positions/getRequestInProgressById";
import { ERequestStepsStatus } from "@enum/requestStepsStatus";
import { statusFlowAutomatic } from "@config/status/statusFlowAutomatic";
import { mediaQueryTabletMain } from "@config/environment";
import { requestStepsInitial } from "@config/positions/addPositions/requestSteps";
import { flowAutomaticMessages } from "@config/positionsTabs/generics/flowAutomaticMessages";
import { statusCloseModal } from "@config/status/statusCloseModal";
import { statusRequestFinished } from "@config/status/statusRequestFinished";
import { interventionHumanMessage } from "@config/positionsTabs/generics/interventionHumanMessage";
import { IRequestSteps } from "@ptypes/feedback/requestProcess/IRequestSteps";
import { ISaveDataResponse } from "@ptypes/requestsInProgress/saveData/ISaveDataResponse";
import { IUseSavePositions } from "@ptypes/hooks/IUseSavePositions";

const useSavePositions = (props: IUseSavePositions) => {
  const {
    businessUnits,
    userAccount,
    sendData,
    data,
    setSendData,
    setShowPendingReq,
    setShowModal,
  } = props;
  const [savePositions, setSavePositions] = useState<ISaveDataResponse>();
  const [showPendingReqModal, setShowPendingReqModal] = useState(false);
  const [statusRequest, setStatusRequest] = useState<string>();
  const [loading, setLoading] = useState(false);
  const smallScreen = useMediaQuery(mediaQueryTabletMain);
  const { addFlag } = useFlag();
  const [requestSteps, setRequestSteps] =
    useState<IRequestSteps[]>(requestStepsInitial);

  const { setChangeTab } = useContext(ChangeToRequestTab);

  const navigate = useNavigate();
  const navigatePage = "/positions";

  const fetchSavePositionsData = async () => {
    setLoading(true);
    try {
      const saveData = await postSaveRequest(userAccount, data);
      setSavePositions(saveData);
    } catch (error) {
      console.info(error);
      setSendData(false);
      addFlag({
        title: flowAutomaticMessages.errorSendingData.title,
        description: flowAutomaticMessages.errorSendingData.description,
        appearance: flowAutomaticMessages.errorSendingData
          .appearance as IFlagAppearance,
        duration: flowAutomaticMessages.errorSendingData.duration,
      });
    } finally {
      setLoading(false);
      if (setShowModal) setShowModal(false);
    }
  };

  const fetchRequestInProgressData = async () => {
    try {
      if (!isStatusIntAutomatic(savePositions?.requestStatus)) return;

      const data = await getRequestInProgressById(
        businessUnits,
        savePositions?.settingRequestId || ""
      );
      setStatusRequest(data.requestStatus);
    } catch (error) {
      console.info(error);
      addFlag({
        title: flowAutomaticMessages.errorQueryingData.title,
        description: flowAutomaticMessages.errorQueryingData.description,
        appearance: flowAutomaticMessages.errorQueryingData
          .appearance as IFlagAppearance,
        duration: flowAutomaticMessages.errorQueryingData.duration,
      });
    }
  };

  const updateRequestSteps = (
    steps: IRequestSteps[],
    stepName: string,
    newStatus: ERequestStepsStatus
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

  const isStatusIntAutomatic = (status: string | undefined): boolean => {
    return status ? statusFlowAutomatic.includes(status) : false;
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
    if (isStatusIntAutomatic(statusRequest)) {
      setRequestSteps((prev) =>
        updateRequestSteps(
          prev,
          requestStepsInitial[1].name,
          ERequestStepsStatus.COMPLETED
        )
      );
    }

    if (isStatusRequestFinished()) {
      setRequestSteps((prev) =>
        updateRequestSteps(
          prev,
          requestStepsInitial[1].name,
          ERequestStepsStatus.COMPLETED
        )
      );
      setRequestSteps((prev) =>
        updateRequestSteps(
          prev,
          requestStepsInitial[2].name,
          ERequestStepsStatus.COMPLETED
        )
      );
    }

    if (isStatusCloseModal()) {
      setRequestSteps((prev) =>
        updateRequestSteps(
          prev,
          requestStepsInitial[1].name,
          ERequestStepsStatus.ERROR
        )
      );
    }
  };

  const handleStatusChange = () => {
    setTimeout(() => {
      if (isStatusIntAutomatic(savePositions?.requestStatus)) {
        if (isStatusCloseModal()) {
          setChangeTab(true);
          navigate(navigatePage);
          addFlag({
            title: flowAutomaticMessages.errorCreateRequest.title,
            description: flowAutomaticMessages.errorCreateRequest.description,
            appearance: flowAutomaticMessages.errorCreateRequest
              .appearance as IFlagAppearance,
            duration: flowAutomaticMessages.errorCreateRequest.duration,
          });
        }

        if (isStatusRequestFinished()) {
          navigate(navigatePage);
          addFlag({
            title: flowAutomaticMessages.SuccessfulCreateRequest.title,
            description:
              flowAutomaticMessages.SuccessfulCreateRequest.description,
            appearance: flowAutomaticMessages.SuccessfulCreateRequest
              .appearance as IFlagAppearance,
            duration: flowAutomaticMessages.SuccessfulCreateRequest.duration,
          });
        }
      }
    }, 3000);
  };

  useEffect(() => {
    if (!sendData) return;
    fetchSavePositionsData();
  }, [sendData]);

  useEffect(() => {
    if (isStatusIntAutomatic(savePositions?.requestStatus)) {
      setRequestSteps((prev) =>
        updateRequestSteps(
          prev,
          requestStepsInitial[0].name,
          ERequestStepsStatus.COMPLETED
        )
      );

      const timer = setInterval(() => {
        const checkRequestStatus = async () => {
          if (isStatusCloseModal() || isStatusRequestFinished()) {
            changeRequestSteps();
            clearInterval(timer);
            setTimeout(() => {
              setSendData(false);
            }, 1500);
          } else {
            await fetchRequestInProgressData();
            changeRequestSteps();
          }
        };
        checkRequestStatus();
      }, 2000);

      const timeout = setTimeout(() => {
        clearInterval(timer);
        setSendData(false);
        setShowPendingReqModal(true);
        if (setShowPendingReq) {
          setShowPendingReq(!showPendingReqModal);
        }
      }, 60000);

      return () => {
        clearInterval(timer);
        clearTimeout(timeout);
      };
    }
  }, [savePositions, statusRequest]);

  const handleCloseRequestStatus = () => {
    setChangeTab(true);
    setSendData(false);
    navigate(navigatePage);
    addFlag({
      title: interventionHumanMessage.SuccessfulCreateRequestIntHuman.title,
      description:
        interventionHumanMessage.SuccessfulCreateRequestIntHuman.description,
      appearance: interventionHumanMessage.SuccessfulCreateRequestIntHuman
        .appearance as IFlagAppearance,
      duration:
        interventionHumanMessage.SuccessfulCreateRequestIntHuman.duration,
    });
  };

  useEffect(() => {
    handleStatusChange();
  }, [statusRequest]);

  const handleClosePendingReqModal = () => {
    setChangeTab(true);
    setShowPendingReqModal(false);
    navigate(navigatePage);
  };
  return {
    savePositions,
    requestSteps,
    loading,
    handleCloseRequestStatus,
    handleClosePendingReqModal,
    showPendingReqModal,
    smallScreen,
  };
};

export { useSavePositions };

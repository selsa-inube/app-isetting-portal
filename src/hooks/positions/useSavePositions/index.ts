import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { statusFlowAutomatic } from "@config/status/statusFlowAutomatic";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { IFlagAppearance, useFlag } from "@inubekit/inubekit";
import { requestStepsInitial } from "@config/positions/addPositions/requestSteps";
import { flowAutomaticMessages } from "@config/positionsTabs/generics/flowAutomaticMessages";
import { getRequestInProgressById } from "@services/positions/getRequestInProgressById";
import { statusCloseModal } from "@config/status/statusCloseModal";
import { statusRequestFinished } from "@config/status/statusRequestFinished";
import { interventionHumanMessage } from "@config/positionsTabs/generics/interventionHumanMessage";
import { postSaveRequest } from "@services/saveRequest/postSaveRequest";
import { ChangeToRequestTab } from "@context/changeToRequestTab";
import { IRequestSteps } from "@ptypes/feedback/requestProcess/IRequestSteps";
const UseSavePositions = (
  bussinesUnits: string,
  userAccount: string,
  sendData: boolean,
  data: ISaveDataRequest,
  setSendData: React.Dispatch<React.SetStateAction<boolean>>,
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [savePositions, setSavePositions] = useState<ISaveDataResponse>();
  const [showPendingReqModal, setShowPendingReqModal] = useState(false);
  const [statusRequest, setStatusRequest] = useState<string>();
  const [loading, setLoading] = useState(false);
  const { addFlag } = useFlag();
  const [requestSteps, setRequestSteps] =
    useState<IRequestSteps[]>(requestStepsInitial);
  const [error, setError] = useState(false);
  const { setChangeTab } = useContext(ChangeToRequestTab);

  const navigate = useNavigate();
  const navigatePage = "/privileges/positions";

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
        bussinesUnits,
        savePositions?.settingRequestId || ""
      );
      setStatusRequest(data.requestStatus);
    } catch (error) {
      console.info(error);
      setError(true);
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
    newStatus: "pending" | "completed" | "error"
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
        updateRequestSteps(prev, requestStepsInitial[1].name, "completed")
      );
    }

    if (isStatusRequestFinished()) {
      setRequestSteps((prev) =>
        updateRequestSteps(prev, requestStepsInitial[1].name, "completed")
      );
      setRequestSteps((prev) =>
        updateRequestSteps(prev, requestStepsInitial[2].name, "completed")
      );
    }

    if (isStatusCloseModal()) {
      setRequestSteps((prev) =>
        updateRequestSteps(prev, requestStepsInitial[1].name, "error")
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
        updateRequestSteps(prev, requestStepsInitial[0].name, "completed")
      );

      const timer = setInterval(() => {
        const checkRequestStatus = async () => {
          if (isStatusCloseModal() || isStatusRequestFinished() || error) {
            changeRequestSteps();
            clearInterval(timer);
            setTimeout(() => {
              setSendData(false);
              setShowPendingReqModal(true);
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
        setChangeTab(true);
        navigate(navigatePage);
        addFlag({
          title: flowAutomaticMessages.requestInQueue.title,
          description: flowAutomaticMessages.requestInQueue.description,
          appearance: flowAutomaticMessages.requestInQueue
            .appearance as IFlagAppearance,
          duration: flowAutomaticMessages.requestInQueue.duration,
        });
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
  };
};

export { UseSavePositions };

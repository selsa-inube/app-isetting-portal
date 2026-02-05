import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { IFlagAppearance, useFlag } from "@inubekit/inubekit";

import { ChangeToRequestTab } from "@context/changeToRequestTab";
import { postSaveRequest } from "@services/saveRequest/postSaveRequest";

import { EUseCase } from "@enum/useCase";

import { statusRequestFinished } from "@config/status/statusRequestFinished";
import { requestStatusMessage } from "@config/missions/missionTab/generic/requestStatusMessage";
import { IUseSaveMission } from "@ptypes/hooks/missions/IUseSaveMission";

import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { IRequestMissions } from "@ptypes/missions/assisted/IRequestMissions";

import { postAddMission } from "@services/missions/addMission/postAddMission";
import { deleteMission } from "@services/missions/deleteMission";
import { IRequestDeleteMissions } from "@ptypes/missions/assisted/IRequestMissions/IDeleteDataMission";
import { patchMission } from "@services/missions/editMission";
import { errorObject } from "@utils/errorObject";
import { useRequest } from "@hooks/users/tabs/userTab/addUser/saveUsers/useRequest";
import { IErrors } from "@ptypes/hooks/IErrors";
import { interventionHumanMessage } from "@config/positionsTabs/generics/interventionHumanMessage";

const useSaveMission = (props: IUseSaveMission) => {
  const {
    useCase,
    userAccount,
    sendData,
    data,
    token,
    businessUnits,
    businessManagerCode,
    setSendData,
    setShowModal,
    setEntryDeleted,
  } = props;
  const [saveMission, setsaveMission] = useState<ISaveDataResponse>();
  const [statusRequest, setStatusRequest] = useState<string>();
  const { addFlag } = useFlag();
  const [showPendingReqModal, setShowPendingReqModal] = useState(false);
  const [loadingSendData, setLoadingSendData] = useState(false);
  const [errorFetchRequest, setErrorFetchRequest] = useState(false);
  const [errorData, setErrorData] = useState<IErrors>({} as IErrors);
  const [hasError, setHasError] = useState(false);
  const [networkError, setNetworkError] = useState<IErrors>({} as IErrors);
  const { setChangeTab } = useContext(ChangeToRequestTab);

  const navigate = useNavigate();
  const navigatePage = "/missions";

  const fetchSaveMissionData = async () => {
    setLoadingSendData(true);
    try {
      const saveData = await postSaveRequest(userAccount, data, token);
      setsaveMission(saveData);
      setShowModal(false);
    } catch (error) {
      setSendData(false);
      setHasError(true);
      setErrorData(errorObject(error));
    } finally {
      setLoadingSendData(false);
    }
  };

  const {
    requestSteps,
    changeRequestSteps,
    handleStatusChange,
    isStatusCloseModal,
    isStatusRequestFinished,
    isStatusInAutomatic,
  } = useRequest({
    setSendData,
    useCase,
    statusRequest: statusRequest || "",
    saveData: saveMission as ISaveDataResponse,
    errorFetchRequest,
    networkError,
    entity: "Cargo del operador",
    setHasError,
  });

  const requestConfiguration = {
    configurationRequestData: data?.configurationRequestData,
    settingRequest: {
      requestNumber: saveMission?.requestNumber,
      settingRequestId: saveMission?.settingRequestId,
      requestStatus: saveMission?.requestStatus,
      staffName: saveMission?.staffName,
    },
  };

  const fetchRequestData = async () => {
    try {
      if (useCase === EUseCase.ADD) {
        const newData = await postAddMission(
          businessUnits,
          userAccount,
          requestConfiguration as unknown as IRequestMissions,
          businessManagerCode,
          token,
        );
        setStatusRequest(newData.settingRequest?.requestStatus);
      }
      if (useCase === EUseCase.EDIT) {
        const newData = await patchMission(
          businessUnits,
          userAccount,
          requestConfiguration as unknown as IRequestMissions,
          businessManagerCode,
          token,
        );
        setStatusRequest(newData.settingRequest?.requestStatus);
      }
      if (useCase === EUseCase.DELETE) {
        const newData = await deleteMission(
          businessUnits,
          userAccount,
          requestConfiguration as unknown as IRequestDeleteMissions,
          token,
        );
        setStatusRequest(newData.settingRequest?.requestStatus);
      }
    } catch (error) {
      console.info(error);
      setErrorFetchRequest(true);
      setHasError(true);
      setNetworkError(errorObject(error));
      setShowModal(false);
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
        setEntryDeleted(data.configurationRequestData.missionId as string);
      }, 3000);
    }
  };
  useEffect(() => {
    if (!sendData) return;
    fetchSaveMissionData();
  }, [sendData]);

  useEffect(() => {
    if (isStatusInAutomatic(saveMission?.requestStatus)) {
      fetchRequestData();
    }
  }, [saveMission]);

  useEffect(() => {
    changeRequestSteps();
  }, [statusRequest]);

  const handleCloseRequestStatus = () => {
    setSendData(false);
    navigate(navigatePage);
    setChangeTab(true);
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

  const handleClosePendingReqModal = () => {
    setShowPendingReqModal(false);
    setChangeTab(true);
    navigate(navigatePage);
  };

  const handleToggleErrorModal = () => {
    setHasError(!hasError);
    setShowModal(false);
    if (errorFetchRequest && hasError) {
      setChangeTab(true);
    }
    if (useCase !== EUseCase.DELETE) {
      navigate(navigatePage);
    }
  };

  const isRequestStatusModal =
    showPendingReqModal && saveMission?.requestNumber ? true : false;

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
    isRequestStatusModal,
    hasError,
    errorData,
    networkError,
    errorFetchRequest,
    handleToggleErrorModal,
    handleCloseProcess,
    handleCloseRequestStatus,
    handleClosePendingReqModal,
    titleRequest,
    descriptionRequest,
    actionTextRequest,
  };
};

export { useSaveMission };

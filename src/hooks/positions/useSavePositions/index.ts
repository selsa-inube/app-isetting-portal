import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { IFlagAppearance, useFlag } from "@inubekit/inubekit";
import { ChangeToRequestTab } from "@context/changeToRequestTab";
import { postSaveRequest } from "@services/saveRequest/postSaveRequest";


import { statusRequestFinished } from "@config/status/statusRequestFinished";

import { ISaveDataResponse } from "@ptypes/requestsInProgress/saveData/ISaveDataResponse";
import { IUseSavePositions } from "@ptypes/hooks/IUseSavePositions";

import { EUseCase } from "@src/enum/useCase";

import { requestStatusMessage } from "@src/config/positions/requestStatusMessage";

import { postAddPositions } from "@src/services/positions/postAddPositions";
import { IRequestPositions } from "@src/types/positions/assisted/IRequestPositions";
import { deletePositions } from "@src/services/positions/deletePositons";
import { errorObject } from "@src/utils/errorObject";
import { useRequest } from "@src/hooks/users/tabs/userTab/addUser/saveUsers/useRequest";
import { IErrors } from "@src/types/hooks/IErrors";
import { interventionHumanMessage } from "@src/config/positionsTabs/generics/interventionHumanMessage";
import { patchPosition } from "@src/services/positions/editPositions";

const useSavePositions = (props: IUseSavePositions) => {
  const {
   businessUnits,
    businessManagerCode,
    userAccount,
    data,
    token,
    sendData,
    useCase,
        setSendData,
    setShowModal,
    setEntryDeleted,
  } = props;
  const [savePositions, setSavePositions] = useState<ISaveDataResponse>();
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
  const navigatePage = "/positions";

  const fetchSavePositionsData = async () => {
    setLoadingSendData(true);
    try {
      const saveData = await postSaveRequest(userAccount, data, token);
      setSavePositions(saveData);
   setShowModal(false);
    } catch (error) {
      console.info(error);
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
    saveUsers: savePositions as ISaveDataResponse,
    errorFetchRequest,
    networkError,
    setHasError,
  });


    const requestConfiguration = {
    configurationRequestData:data?.configurationRequestData,
    settingRequest: {
      requestNumber: savePositions?.requestNumber,
      settingRequestId: savePositions?.settingRequestId,
    },
  };
  console.log("requestConfiguration",requestConfiguration);
  const fetchRequestData = async () => {
    try {
      if (useCase === EUseCase.ADD) {
        const newData = await postAddPositions(
          businessUnits,
          userAccount,
          requestConfiguration as unknown as IRequestPositions,
          businessManagerCode,
          token,
        );
        setStatusRequest(newData.settingRequest?.requestStatus);
      }
      if (useCase === EUseCase.EDIT) {
        const newData = await patchPosition(
          businessUnits,
          userAccount,
          requestConfiguration  as unknown as IRequestPositions,
          businessManagerCode,
          token,
        );

        setStatusRequest(newData.settingRequest?.requestStatus);
      }
      if (useCase === EUseCase.DELETE) {
        const newData = await deletePositions(
          businessUnits,
          userAccount,
          requestConfiguration as unknown as IRequestPositions,
          token,
        );


        if (
          setEntryDeleted &&
          newData?.settingRequest?.requestStatus &&
          statusRequestFinished.includes(newData?.settingRequest?.requestStatus)
        ) {
          setEntryDeleted(data.configurationRequestData.missionId as string);
        }
      }
    } catch (error) {
      console.info(error);
      setErrorFetchRequest(true);
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
  };

  useEffect(() => {
    if (!sendData) return;
    fetchSavePositionsData();
  }, [sendData]);

  useEffect(() => {
    if (isStatusInAutomatic(savePositions?.requestStatus)) {
      fetchRequestData();
    }
  }, [savePositions]);

  useEffect(() => {
    changeRequestSteps();
  }, [statusRequest]);
  


  const handleCloseRequestStatus = () => {
    setSendData(false);
    setChangeTab(true);
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
    showPendingReqModal && savePositions?.requestNumber ? true : false;
    
  const {
    title: titleRequest,
    description: descriptionRequest,
    actionText: actionTextRequest,
  } = requestStatusMessage(savePositions?.staffName);
  return {
    savePositions,
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

export { useSavePositions };

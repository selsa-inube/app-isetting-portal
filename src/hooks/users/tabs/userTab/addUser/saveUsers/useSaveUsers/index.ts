import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { IFlagAppearance, useFlag } from "@inubekit/inubekit";

import { EUseCase } from "@enum/useCase";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { useRequest } from "../useRequest";
import { IErrors } from "@src/types/hooks/IErrors";
import { ChangeToRequestTab } from "@src/context/changeToRequestTab";
import { postSaveRequest } from "@src/services/saveRequest/postSaveRequest";
import { errorObject } from "@src/utils/errorObject";
import { interventionHumanMessage } from "@src/config/positionsTabs/generics/interventionHumanMessage";
import { IUseSaveUsers } from "@src/types/users/tabs/userTab/addUser/IUseSaveUsers";
import { postAddUsers } from "@src/services/users/addUsers/postAddUsers";
import { IRequestUsers } from "@src/types/users/tabs/userTab/addUser/IRequestUsers";

const useSaveUsers = (props: IUseSaveUsers) => {
  const {
    businessUnits,
    userAccount,
    data,
    setSendData,
    sendData,
    setShowModal,
    useCase,
  } = props;
  const [saveUsers, setSaveUsers] = useState<ISaveDataResponse>();
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
  const navigatePage = "/";

  const fetchSaveGeneralData = async () => {
    setLoadingSendData(true);
    try {
      const saveData = await postSaveRequest(userAccount, data);
      setSaveUsers(saveData);
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
    saveUsers: saveUsers as ISaveDataResponse,
    errorFetchRequest,
    networkError,
    setHasError,
  });

  const requestConfiguration = {
    ...data?.configurationRequestData,
    settingRequest: {
      requestNumber: saveUsers?.requestNumber,
      settingRequestId: saveUsers?.settingRequestId,
    },
  };

  const fetchRequestData = async () => {
    try {
      if (useCase === EUseCase.ADD) {
        const newData = await postAddUsers(
          businessUnits,
          userAccount,
          requestConfiguration as IRequestUsers
        );
        setStatusRequest(newData.settingRequest?.requestStatus);
      }
      if (useCase === EUseCase.EDIT) {
        const newData = await postAddUsers(
          businessUnits,
          userAccount,
          requestConfiguration as IRequestUsers
        );

        setStatusRequest(newData.settingRequest?.requestStatus);
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
    fetchSaveGeneralData();
  }, [sendData]);

  useEffect(() => {
    if (isStatusInAutomatic(saveUsers?.requestStatus)) {
      fetchRequestData();
    }
  }, [saveUsers]);

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
    showPendingReqModal && saveUsers?.requestNumber ? true : false;

  return {
    saveUsers,
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
  };
};

export { useSaveUsers };

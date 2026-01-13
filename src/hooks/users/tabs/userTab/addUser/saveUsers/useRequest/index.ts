import { useContext, useEffect, useState } from "react";
import { IFlagAppearance, useFlag } from "@inubekit/inubekit";
import { ERequestStepsStatus } from "@enum/requestStepsStatus";
import { statusCloseModal } from "@config/status/statusCloseModal";
import { statusRequestFinished } from "@config/status/statusRequestFinished";
import { operationTypes } from "@config/useCase";
import { statusFlowAutomatic } from "@config/status/statusFlowAutomatic";
import { requestStepsNames } from "@config/requestStepsNames";
import { requestStepsInitial } from "@config/requestSteps";

import { IRequestSteps } from "@src/types/requestsInProgress/IRequestSteps";
import { ChangeToRequestTab } from "@src/context/changeToRequestTab";
import { flowAutomaticMessages } from "@src/config/missions/missionTab/generic/flowAutomaticMessages";
import { IUseUserRequest } from "@src/types/users/tabs/userTab/addUser/IUseRequest";

const useRequest = (props: IUseUserRequest) => {
  const {
    setSendData,
    useCase,
    statusRequest,
    errorFetchRequest,
    saveUsers,
    networkError,
    setHasError,
  } = props;

  const { addFlag } = useFlag();
  const [requestSteps, setRequestSteps] =
    useState<IRequestSteps[]>(requestStepsInitial);
  const { setChangeTab } = useContext(ChangeToRequestTab);
  const isStatusInAutomatic = (status: string | undefined): boolean => {
    return status ? statusFlowAutomatic.includes(status) : false;
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
            ERequestStepsStatus.ERROR
          )
        );
        setSendData(false);
      } else {
        setRequestSteps((prev) =>
          updateRequestSteps(
            prev,
            requestStepsNames.requestFilled,
            ERequestStepsStatus.COMPLETED
          )
        );
      }
    }, 1500);
    setTimeout(() => {
      if (isStatusInAutomatic(statusRequest)) {
        setRequestSteps((prev) =>
          updateRequestSteps(
            prev,
            requestStepsNames.adding,
            ERequestStepsStatus.COMPLETED
          )
        );
      }

      if (isStatusRequestFinished()) {
        setRequestSteps((prev) =>
          updateRequestSteps(
            prev,
            requestStepsNames.adding,
            ERequestStepsStatus.COMPLETED
          )
        );
        setRequestSteps((prev) =>
          updateRequestSteps(
            prev,
            requestStepsNames.requestAdded,
            ERequestStepsStatus.COMPLETED
          )
        );
      }

      if (isStatusCloseModal()) {
        setRequestSteps((prev) =>
          updateRequestSteps(
            prev,
            requestStepsNames.adding,
            ERequestStepsStatus.ERROR
          )
        );
      }
    }, 2000);
  };

  useEffect(() => {
    if (!networkError?.code?.length) {
      return;
    }
    setRequestSteps((prev) =>
      updateRequestSteps(
        prev,
        requestStepsNames.requestFilled,
        ERequestStepsStatus.COMPLETED
      )
    );

    const timeout1 = setTimeout(() => {
      setRequestSteps((prev) =>
        updateRequestSteps(
          prev,
          requestStepsNames.adding,
          ERequestStepsStatus.ERROR
        )
      );
    }, 1000);

    const timeout2 = setTimeout(() => {
      setSendData(false);
      setHasError(true);
    }, 3000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [networkError]);

  const handleStatusChange = () => {
    if (isStatusInAutomatic(saveUsers?.requestStatus)) {
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
          title: flowAutomaticMessages(operationTypes[useCase])
            .successfulCreateRequest.title,
          description: flowAutomaticMessages(operationTypes[useCase])
            .successfulCreateRequest.description,
          appearance: flowAutomaticMessages(operationTypes[useCase])
            .successfulCreateRequest.appearance as IFlagAppearance,
          duration: flowAutomaticMessages(operationTypes[useCase])
            .successfulCreateRequest.duration,
        });
      }
    }
  };

  return {
    requestSteps,
    changeRequestSteps,
    handleStatusChange,
    isStatusInAutomatic,
    isStatusCloseModal,
    isStatusRequestFinished,
  };
};

export { useRequest };

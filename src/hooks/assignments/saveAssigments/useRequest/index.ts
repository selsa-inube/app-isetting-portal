import { operationTypes } from "@config/useCase";
import { requestStepsNames } from "@config/requestStepsNames";
import { statusFlowAutomatic } from "@config/status/statusFlowAutomatic";
import { ERequestStepsStatus } from "@enum/requestStepsStatus";
import { statusCloseModal } from "@config/status/statusCloseModal";
import { IRequestSteps } from "@ptypes/requestsInProgress/IRequestSteps";
import { useContext, useState } from "react";
import { IFlagAppearance, useFlag } from "@inubekit/inubekit";
import { flowAutomaticMessages } from "@config/assignments/generic/flowAutomaticMessages";
import { statusRequestFinished } from "@config/status/statusRequestFinished";
import { ChangeToRequestTab } from "@context/changeToRequestTab";
import { requestStepsInitial } from "@config/requestSteps";
import { IUseRequest } from "@ptypes/hooks/IUseRequest";

const useRequest = (props: IUseRequest) => {
  const { setSendData, useCase, statusRequest, saveAssignments } = props;

  const { addFlag } = useFlag();
  const [requestSteps, setRequestSteps] =
    useState<IRequestSteps[]>(requestStepsInitial);
  const [errorFetchRequest] = useState(false);
  const { setChangeTab } = useContext(ChangeToRequestTab);

  const isStatusIntAutomatic = (status: string | undefined): boolean => {
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
            requestStepsNames.requestFiled,
            ERequestStepsStatus.ERROR
          )
        );
        setSendData(false);
      } else {
        setRequestSteps((prev) =>
          updateRequestSteps(
            prev,
            requestStepsNames.requestFiled,
            ERequestStepsStatus.COMPLETED
          )
        );
      }
    }, 1000);
    setTimeout(() => {
      if (isStatusIntAutomatic(statusRequest)) {
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

  const handleStatusChange = () => {
    if (isStatusIntAutomatic(saveAssignments?.requestStatus)) {
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

  return {
    requestSteps,
    changeRequestSteps,
    handleStatusChange,
    isStatusIntAutomatic,
    isStatusCloseModal,
    isStatusRequestFinished,
  };
};

export { useRequest };

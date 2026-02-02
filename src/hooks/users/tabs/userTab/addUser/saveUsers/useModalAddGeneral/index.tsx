import { useEffect, useState } from "react";
import { EComponentAppearance } from "@enum/appearances";
import { operationTypes } from "@config/useCase";
import { goBackModal } from "@config/goBackModal";
import { IUseModalAddData } from "@ptypes/hooks/IUseModalAddPayroll";
import { errorModal } from "@config/request/errorModal";
import { messageErrorStatusRequest } from "@utils/messageErrorStatusRequest";
import { getDescriptionError } from "@utils/getDescriptionError";
import { messageErrorUseCases } from "@utils/messageErrorUseCases";
import { missionTitle } from "@config/missions/missionTab/missionTitle";

const useModalAddGeneral = (props: IUseModalAddData) => {
  const {
    showGoBackModal,
    loading,
    hasError,
    errorData,
    networkError,
    errorFetchRequest,
    handleCloseModal,
    handleGoBack,
    handleToggleErrorModal,
  } = props;

  const [showDecision, setShowDecision] = useState(false);
  useEffect(() => {
    const decision = showGoBackModal || hasError;
    setShowDecision(decision);
  }, [showGoBackModal, hasError]);

  const modal = () => {
    const initial = {
      title: "",
      subtitle: "",
      description: "",
      actionText: "",
      moreDetails: "",
      icon: <></>,
      onCloseModal: () => void 0,
      onClick: () => void 0,
      withCancelButton: false,
      withIcon: false,
      appearance: EComponentAppearance.PRIMARY,
      appearanceButton: EComponentAppearance.PRIMARY,
    };

    if (!loading && !errorFetchRequest && hasError) {
      return {
        ...errorModal(
          messageErrorStatusRequest(
            errorData.status,
            getDescriptionError(errorData.response),
          ),
        ),
        onCloseModal: handleToggleErrorModal,
        onClick: handleToggleErrorModal,
        withCancelButton: false,
        withIcon: true,
        appearance: EComponentAppearance.WARNING,
        appearanceButton: EComponentAppearance.WARNING,
      };
    }

    if (errorFetchRequest && hasError) {
      return {
        ...errorModal(
          messageErrorUseCases(
            networkError.status,
            operationTypes.addError,
            missionTitle.title,
            getDescriptionError(networkError.response),
          ),
        ),
        onCloseModal: handleToggleErrorModal,
        onClick: handleToggleErrorModal,
        withCancelButton: false,
        withIcon: true,
        appearance: EComponentAppearance.WARNING,
        appearanceButton: EComponentAppearance.WARNING,
      };
    }

    if (showGoBackModal && !errorFetchRequest && !hasError) {
      return {
        ...goBackModal,
        onCloseModal: handleCloseModal,
        onClick: handleGoBack,
        moreDetails: "",
        withCancelButton: true,
        withIcon: false,
        appearance: EComponentAppearance.PRIMARY,
        appearanceButton: EComponentAppearance.PRIMARY,
      };
    }

    return initial;
  };

  const modalData = modal();

  return { modalData, showDecision };
};

export { useModalAddGeneral };

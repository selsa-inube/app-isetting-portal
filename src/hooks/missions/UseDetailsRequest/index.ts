import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@inubekit/inubekit";

import { EUseCase } from "@enum/useCase";

import { mediaQueryTablet } from "@config/environment";
import { IUseDetailsRequest } from "@ptypes/hooks/IUseDetailsRequest";
import { EMisions } from "@enum/missions";
import { detailsRequestModal } from "@config/detailsRequestModal";
import { deleteUseCaseLabels } from "@config/requestsInProgressTab/deleteUseCaseLabels";
import { EBusinessUseCases } from "@enum/businessUseCases";

const useMissionsDetailsRequest = (props: IUseDetailsRequest) => {
  const { configurationData, useNameRequest } = props;
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (configurationData?.configurationRequestData) {
      if (useNameRequest === EMisions.USE_CASE_NAME_DELETE) {
        setShowModal(true);
      } else {
        navigate(`/missions/edit-mission`, {
          state: {
            data: configurationData.configurationRequestData,
            option: EUseCase.DETAILS,
          },
        });
      }
    }
  }, [configurationData, useNameRequest]);

  const screenTablet = useMediaQuery(mediaQueryTablet);

  const handleToggleModal = () => {
    setShowModal(false);
  };

  const modal = () => {
    const initial = {
      title: "",
      subtitle: "",
      description: "",
      actionText: "",
      onCloseModal: () => void 0,
      onClick: () => void 0,
      withCancelButton: false,
    };

    if (showModal) {
      return {
        ...detailsRequestModal,
        onCloseModal: handleToggleModal,
        onClick: handleToggleModal,
        withCancelButton: false,
        withIcon: true,
        description: deleteUseCaseLabels(
          configurationData.configurationRequestData.abbreviatedName,
          EBusinessUseCases.MISSIONS,
        ).description,
      };
    }
    return initial;
  };

  const modalData = modal();

  return {
    screenTablet,
    modalData,
    showModal,
    handleToggleModal,
  };
};

export { useMissionsDetailsRequest };

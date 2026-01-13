import { useEffect, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";

import { eventBus } from "@events/eventBus";
import { detailsRequestInProgressModal } from "@config/requestsInProgressTab/details/detailsRequestInProgressModal";
import { mediaQueryMobile, mediaQueryTablet } from "@config/environment";
import { IUseDetailsMission } from "@ptypes/missions/requestTab/IUseDetailsMission";
import { labelsOfRequest } from "@config/requestsInProgressTab/details/labelsOfRequest";
import { requestType } from "@config/requestType";
import { EModalState } from "@enum/modalState";

const useDetailsMission = (props: IUseDetailsMission) => {
  const { data } = props;

  const [isSelected, setIsSelected] = useState<string>();
  const [showModal, setShowModal] = useState(false);
  const isMobile = useMediaQuery(mediaQueryMobile);

  const normalizeData = {
    id: data.id,
    missionName: data.configurationRequestData.missionName,
    descriptionUse: data.configurationRequestData.descriptionUse,
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };

  const labelsOfRequestDetails = labelsOfRequest.filter(
    (field) => data[field.id]
  );

  const title = `${detailsRequestInProgressModal.labelRequest} ${
    requestType[data.request as keyof typeof requestType] ?? data.request
  }`;

  const screenTablet = useMediaQuery(mediaQueryTablet);

  useEffect(() => {
    eventBus.emit(EModalState.SECOND_MODAL_STATE, showModal);
  }, [showModal]);

  return {
    showModal,
    normalizeData,
    isSelected,
    isMobile,
    title,
    screenTablet,
    labelsOfRequestDetails,
    handleTabChange,
    handleToggleModal,
  };
};

export { useDetailsMission };

import { useEffect, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";

import { eventBus } from "@events/eventBus";
import { detailsRequestInProgressModal } from "@config/requestsInProgressTab/details/detailsRequestInProgressModal";
import { enviroment } from "@config/environment";
import { IUseDetailsMission } from "@ptypes/missions/requestTab/IUseDetailsMission";
import { labelsOfRequest } from "@config/requestsInProgressTab/details/labelsOfRequest";
import { requestType } from "@config/requestType";
import { EModalState } from "@enum/modalState";

const useDetailsMission = (props: IUseDetailsMission) => {
  const { data } = props;

  const [isSelected, setIsSelected] = useState<string>();
  const [showModal, setShowModal] = useState(false);
  const isMobile = useMediaQuery(enviroment.IS_MOBILE_743);

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
    (field) => data[field.id],
  );

   const title = `${detailsRequestInProgressModal.labelRequest} ${
    requestType[data.request as keyof typeof requestType] ?? data.request
  }`;

  const screenTablet = useMediaQuery(enviroment.IS_MOBILE_1200);

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

import { useEffect, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";

import { eventBus } from "@events/eventBus";
import { EModalState } from "@enum/modalState";
import { detailsRequestInProgressModal } from "@config/requestsInProgressTab/details/detailsRequestInProgressModal";
import {
  mediaQueryMobile,
  mediaQueryTablet,
  mediaQueryTabletMain,
} from "@config/environment";
import { labelsOfRequest } from "@config/requestsInProgressTab/details/labelsOfRequest";
import { requestType } from "@config/requestType";
import { IUseDetailsRequest } from "@ptypes/hooks/IUseDetailsRequest";

const useDetailsRequest = (props: IUseDetailsRequest) => {
  const { data } = props;

  const [isSelected, setIsSelected] = useState<string>();
  const [showModal, setShowModal] = useState(false);
  const isMobile = useMediaQuery(mediaQueryMobile);

  const normalizeData = {
    ...data,
    id: data.id,
    reasonForAbsence: `Sí, de ${data.nameOfAbsentStaff}`,
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

  const smallScreen = useMediaQuery(mediaQueryTabletMain);
  const pageLength = 3;
  const columnWidths = [70];

  return {
    showModal,
    normalizeData,
    isSelected,
    isMobile,
    title,
    screenTablet,
    labelsOfRequestDetails,
    smallScreen,
    pageLength,
    columnWidths,
    handleTabChange,
    handleToggleModal,
  };
};

export { useDetailsRequest };

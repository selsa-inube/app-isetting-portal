import { useEffect, useState } from "react";
import { formatDate } from "@utils/date/formatDate";
import { eventBus } from "@events/eventBus";
import { EModalState } from "@enum/modalState";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { IUseDeletePositions } from "@ptypes/hooks/IUseDeletePositions";
import { ERequestType } from "@src/enum/request/requestType";

const useDeletePositions = (props: IUseDeletePositions) => {
  const { data, appData } = props;
  const [showModal, setShowModal] = useState(false);
  const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);
  const [saveData, setSaveData] = useState<ISaveDataRequest>();

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClick = () => {
    setSaveData({
      applicationName: "istaff",
      businessManagerCode: appData.businessManager.publicCode,
      businessUnitCode: appData.businessUnit.publicCode,
      description: "Solicitud de eliminación de un Cargo",
      entityName: "Mission",
      requestDate: formatDate(new Date()),
      useCaseName: "DeleteMission",
      requestType: ERequestType.REMOVE,
      configurationRequestData: {
        positionId: data.missionId,
        positionName: data.namePosition,
        justification: `La eliminación del cargo ${appData.user.userAccount}`,
      },
    });
    setShowRequestProcessModal(true);
  };

  useEffect(() => {
    eventBus.emit(EModalState.SECOND_MODAL_STATE, showModal);
  }, [showModal]);

  return {
    showModal,
    saveData,
    showRequestProcessModal,
    handleToggleModal,
    handleClick,
    setShowRequestProcessModal,
    setShowModal,
  };
};
export { useDeletePositions };

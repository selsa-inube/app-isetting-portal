import { useEffect, useState } from "react";
import { formatDate } from "@utils/date/formatDate";
import { EModalState } from "@enum/modalState";
import { eventBus } from "@events/eventBus";
import { deleteLabels } from "@config/missions/deleteLabels";
import { IUseDeleteMission } from "@ptypes/hooks/missions/IUseDeleteMission";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { ERequestType } from "@src/enum/request/requestType";

const useDeleteMission = (props: IUseDeleteMission) => {
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
      description: deleteLabels.descriptionSaveData,
      entityName: "Mission",
      requestDate: formatDate(new Date()),
      useCaseName: "DeleteMission",
      requestType: ERequestType.REMOVE,
      configurationRequestData: {
        positionId: data.missionId,
        positionName: data.namePosition,
        justification: `${deleteLabels.justification} ${appData.user.userAccount}`,
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
export { useDeleteMission };

import { useEffect, useState } from "react";
import { formatDate } from "@utils/date/formatDate";
import { EModalState } from "@enum/modalState";
import { eventBus } from "@events/eventBus";
import { deleteLabels } from "@config/assignments/details/deleteLabels";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { IUseDeleteDetailsAssignments } from "@ptypes/hooks/assignments/IUseDeleteDetailsAssignments";

const useDeleteDetailsAssignments = (props: IUseDeleteDetailsAssignments) => {
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
      entityName: "Assignments",
      requestDate: formatDate(new Date()),
      useCaseName: "DeleteAssignments",
      configurationRequestData: {
        id: data.id,
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
export { useDeleteDetailsAssignments };

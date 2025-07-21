import { useEffect, useState } from "react";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { formatDate } from "@utils/date/formatDate";
import { eventBus } from "@events/eventBus";
import { EModalState } from "@enum/modalState";
import { IUseDeleteAssignments } from "@ptypes/hooks/assignments/IUseDeleteAssignments";
import { deleteLabels } from "@config/assignments/deleteLabels";

const UseDeleteAssignments = (props: IUseDeleteAssignments) => {
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
      data
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
export { UseDeleteAssignments };

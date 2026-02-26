import { useEffect, useState } from "react";
import { formatDate } from "@utils/date/formatDate";
import { EModalState } from "@enum/modalState";
import { eventBus } from "@events/eventBus";
import { deleteLabels } from "@config/missions/deleteLabels";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { ERequestType } from "@enum/request/requestType";
import { IUseDelete } from "@ptypes/hooks/missions/IUseDeleteMission";
import { EUseCaseTypes } from "@enum/useCaseTypes";
import { useValidateUseCase } from "@hooks/useValidateUseCase";

const useDeleteUser = (props: IUseDelete) => {
  const { data, appData } = props;
  const [showModal, setShowModal] = useState(false);
  const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);
  const [saveData, setSaveData] = useState<ISaveDataRequest>();

  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);

  const { disabledButton } = useValidateUseCase({
    useCase: EUseCaseTypes.DELETE_USER,
  });

  const handleToggleModal = () => {
    if (disabledButton) {
      setShowInfoModal(!showInfoModal);
    } else {
      setShowModal(!showModal);
    }
  };
  const handleToggleInfoModal = () => {
    setShowInfoModal(!showInfoModal);
  };

  const handleClick = () => {
    setSaveData({
      applicationName: "istaff",
      businessManagerCode: appData.businessManager.publicCode,
      businessUnitCode: appData.businessUnit.publicCode,
      description: deleteLabels.descriptionSaveData,
      entityName: "Staff",
      requestDate: formatDate(new Date()),
      useCaseName: "DeleteStaff",
      requestType: ERequestType.REMOVE,
      configurationRequestData: {
        staffId: data.staffId,
        staffName: data.staffName,
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
    handleToggleInfoModal,
    showInfoModal,
  };
};
export { useDeleteUser };

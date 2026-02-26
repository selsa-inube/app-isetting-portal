import { useEffect, useState } from "react";
import { formatDate } from "@utils/date/formatDate";
import { eventBus } from "@events/eventBus";
import { EModalState } from "@enum/modalState";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { IUseDeletePositions } from "@ptypes/hooks/IUseDeletePositions";
import { ERequestType } from "@enum/request/requestType";
import { useStore } from "../usePositionBusinessUnit";
import { EUseCaseTypes } from "@enum/useCaseTypes";
import { useValidateUseCase } from "@hooks/useValidateUseCase";

const useDeletePositions = (props: IUseDeletePositions) => {
  const { data, appData } = props;
  const businessUnitCode = useStore((store) => store.businessUnitCode);
  const [showModal, setShowModal] = useState(false);
  const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);
  const [saveData, setSaveData] = useState<ISaveDataRequest>();
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);

  const { disabledButton } = useValidateUseCase({
    useCase: EUseCaseTypes.DELETE_POSITION,
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
      description: "Solicitud de eliminación de un Cargo",
      entityName: "PositionStaff",
      requestDate: formatDate(new Date()),
      useCaseName: "DeletePosition",
      requestType: ERequestType.REMOVE,
      configurationRequestData: {
        positionId: data.positionId,
        positionName: data.positionName,
        businessManagerCode: appData.businessManager.publicCode,
        businessUnitCode: businessUnitCode,
        modifyJustification: `La eliminación del cargo ${appData.user.userAccount}`,
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
export { useDeletePositions };

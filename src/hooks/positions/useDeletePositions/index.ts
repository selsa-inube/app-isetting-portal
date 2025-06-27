import { useState } from "react";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { formatDate } from "@utils/date/formatDate";
import { IUseDeletePositions } from "@ptypes/hooks/IUseDeletePositions";

const UseDeletePositions = (props: IUseDeletePositions) => {
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
      configurationRequestData: {
        positionId: data.missionId,
        positionName: data.namePosition,
        justification: `La eliminación del cargo ${appData.user.userAccount}`,
      },
    });
    setShowRequestProcessModal(true);
  };

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
export { UseDeletePositions };

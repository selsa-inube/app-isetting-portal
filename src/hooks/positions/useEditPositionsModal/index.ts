import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IEntry } from "@design/table/types";

const UseEditPositionsModal = (data: IEntry) => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const destinationData = {
    missionId: data.missionId,
    missionName: data.missionName,
    descriptionUse: data.descriptionUse,
    MissionByRole: data.MissionByRole,
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleEdit = () => {
    navigate(`/privileges/positions/edit-destination`, {
      state: { data: destinationData },
    });
  };

  return {
    showModal,
    handleToggleModal,
    handleEdit,
  };
};

export { UseEditPositionsModal };

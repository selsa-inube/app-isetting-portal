import { EUseCaseTypes } from "@enum/useCaseTypes";
import { useValidateUseCase } from "@hooks/useValidateUseCase";
import { IEntry } from "@ptypes/design/table/IEntry";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useEditMissionsModal = (data: IEntry) => {
  const navigate = useNavigate();
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const dataMission = {
    missionId: data.missionId,
    missionName: data.missionName,
    descriptionUse: data.descriptionUse,
    missionByRole: data.missionByRole,
  };
  const { disabledButton } = useValidateUseCase({
    useCase: EUseCaseTypes.EDIT_MISSION,
  });

  const handleEdit = () => {
    if (disabledButton) {
      setShowInfoModal(!showInfoModal);
    } else {
      navigate(`/missions/edit-mission`, {
        state: { data: dataMission },
      });
    }
  };

  return {
    handleEdit,
    disabledButton,
    showInfoModal,
  };
};

export { useEditMissionsModal };

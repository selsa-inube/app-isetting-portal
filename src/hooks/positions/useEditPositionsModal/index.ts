import { EUseCaseTypes } from "@enum/useCaseTypes";
import { useValidateUseCase } from "@hooks/useValidateUseCase";
import { IUseEditPositionsModal } from "@ptypes/hooks/IUseEditPositionsModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useEditPositionsModal = (props: IUseEditPositionsModal) => {
  const navigate = useNavigate();
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const { data } = props;

  const destinationData = {
    positionId: data.positionId,
    positionName: data.positionName,
    descriptionUse: data.descriptionUse,
    positionsByRole: data.positionStaffByRoles,
  };
  const { disabledButton } = useValidateUseCase({
    useCase: EUseCaseTypes.EDIT_POSITION,
  });
  const handleEdit = () => {
    if (disabledButton) {
      setShowInfoModal(!showInfoModal);
    } else {
      navigate(`/positions/edit-destination`, {
        state: { data: destinationData },
      });
    }
  };

  return {
    handleEdit,
    disabledButton,
    showInfoModal,
  };
};

export { useEditPositionsModal };

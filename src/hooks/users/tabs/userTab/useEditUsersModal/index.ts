import { EUseCaseTypes } from "@enum/useCaseTypes";
import { useValidateUseCase } from "@hooks/useValidateUseCase";
import { IEntry } from "@ptypes/design/table/IEntry";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useEditUsersModal = (data: IEntry) => {
  const navigate = useNavigate();
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const { disabledButton } = useValidateUseCase({
    useCase: EUseCaseTypes.EDIT_POSITION,
  });
  const handleEdit = () => {
    if (disabledButton) {
      setShowInfoModal(!showInfoModal);
    } else {
      navigate(`/users/edit-user`, {
        state: { data },
      });
    }
  };

  return {
    handleEdit,
    disabledButton,
    showInfoModal,
  };
};

export { useEditUsersModal };

import { IUseEditPositionsModal } from "@ptypes/hooks/IUseEditPositionsModal";
import { useNavigate } from "react-router-dom";

const useEditPositionsModal = (props: IUseEditPositionsModal) => {
  const navigate = useNavigate();

  const { data } = props;

  const destinationData = {
    positionId: data.positionId,
    positionName: data.positionName,
    descriptionUse: data.descriptionUse,
    positionsByRole: data.positionStaffByRoles,
  };

  const handleEdit = () => {
    navigate(`/positions/edit-destination`, {
      state: { data: destinationData },
    });
  };

  return {
    handleEdit,
  };
};

export { useEditPositionsModal };

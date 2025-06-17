import { IEntry } from "@ptypes/table/IEntry";
import { useNavigate } from "react-router-dom";

const UseEditPositionsModal = (data: IEntry) => {
  const navigate = useNavigate();

  const destinationData = {
    positionId: data.positionId,
    positionName: data.positionName,
    descriptionUse: data.descriptionUse,
    positionByRole: data.positionByRole,
  };

  const handleEdit = () => {
    navigate(`/privileges/positions/edit-destination`, {
      state: { data: destinationData },
    });
  };

  return {
    handleEdit,
  };
};

export { UseEditPositionsModal };

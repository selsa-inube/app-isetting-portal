import { IEntry } from "@ptypes/table/IEntry";
import { useNavigate } from "react-router-dom";

const UseEditPositionsModal = (data: IEntry) => {
  const navigate = useNavigate();

  const destinationData = {
    missionId: data.missionId,
    missionName: data.missionName,
    descriptionUse: data.descriptionUse,
    missionByRole: data.missionByRole,
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

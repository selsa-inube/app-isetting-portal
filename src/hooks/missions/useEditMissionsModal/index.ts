import { IEntry } from "@ptypes/table/IEntry";
import { useNavigate } from "react-router-dom";

const useEditMissionsModal = (data: IEntry) => {
  const navigate = useNavigate();

  const dataMission = {
    missionId: data.missionId,
    missionName: data.missionName,
    descriptionUse: data.descriptionUse,
    missionByRole: data.missionByRole,
  };

  const handleEdit = () => {
    navigate(`/privileges/missions/edit-mission`, {
      state: { data: dataMission },
    });
  };

  return {
    handleEdit,
  };
};

export { useEditMissionsModal };

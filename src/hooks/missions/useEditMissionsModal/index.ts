import { IEntry } from "@ptypes/design/table/IEntry";
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
    navigate(`/missions/edit-mission`, {
      state: { data: dataMission },
    });
  };

  return {
    handleEdit,
  };
};

export { useEditMissionsModal };

import { EditRecord } from "@design/feedback/editRecord";
import { useEditMissionsModal } from "@hooks/missions/useEditMissionsModal";
import { IEdit } from "@ptypes/missions/edit/IEdit";

const Edit = (props: IEdit) => {
  const { data } = props;

  const { handleEdit, showInfoModal } = useEditMissionsModal(data);
  return <EditRecord onEdit={handleEdit} showInfoModal={showInfoModal} />;
};

export { Edit };

import { useEditPositionsModal } from "@hooks/positions/useEditPositionsModal";
import { EditRecord } from "@design/feedback/editRecord";
import { IEdit } from "@ptypes/positions/IEdit";

const Edit = (props: IEdit) => {
  const { data } = props;
  const { handleEdit, showInfoModal } = useEditPositionsModal({ data });
  return <EditRecord onEdit={handleEdit} showInfoModal={showInfoModal} />;
};

export { Edit };

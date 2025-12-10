import { useEditPositionsModal } from "@hooks/positions/useEditPositionsModal";
import { EditRecord } from "@design/feedback/editRecord";
import { IEdit } from "@ptypes/positions/IEdit";

const Edit = (props: IEdit) => {
  const { data } = props;

  const { handleEdit } = useEditPositionsModal({data});
  return <EditRecord onEdit={handleEdit} />;
};

export { Edit };

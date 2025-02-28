import { EditRecord } from "@design/feedback/editRecord";
import { IEntry } from "@design/table/types";
import { UseEditPositionsModal } from "@hooks/positions/useEditPositionsModal";

interface IEdit {
  data: IEntry;
}

const Edit = (props: IEdit) => {
  const { data } = props;

  const { handleEdit } = UseEditPositionsModal(data);
  return <EditRecord onEdit={handleEdit} />;
};

export { Edit };

import { EditRecord } from "@design/feedback/editRecord";

import { UseEditPositionsModal } from "@hooks/positions/useEditPositionsModal";
import { IEntry } from "@ptypes/table/IEntry";

interface IEdit {
  data: IEntry;
}

const Edit = (props: IEdit) => {
  const { data } = props;

  const { handleEdit } = UseEditPositionsModal(data);
  return <EditRecord onEdit={handleEdit} />;
};

export { Edit };

import { deleteRequestInProgress } from "@config/positionsTabs/generics/deleteRequestInProgress";
import { DeleteRecord } from "@design/feedback/deleteRecord";

import { UseDeleteRequestInProgress } from "@hooks/positions/useDeleteRequestInProgress";
import { IEntry } from "@ptypes/table/IEntry";

interface IDelete {
  data: IEntry;
  setEntryDeleted: (id: string | number) => void;
}

const Delete = (props: IDelete) => {
  const { data, setEntryDeleted } = props;

  const { showModal, handleToggleModal, handleClick, setJustificationDelete } =
    UseDeleteRequestInProgress(data, setEntryDeleted);

  return (
    <DeleteRecord
      messageDelete={deleteRequestInProgress}
      showModal={showModal}
      onToggleModal={handleToggleModal}
      onClick={handleClick}
      setJustificationDelete={setJustificationDelete}
      loading={false}
    />
  );
};

export { Delete };

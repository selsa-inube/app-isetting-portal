import { EditRecord } from "@design/feedback/editRecord";
import { useEditInConstructionModal } from "@hooks/editInConstruction";

const Edit = () => {
  const { handleEdit } = useEditInConstructionModal();
  return <EditRecord onEdit={handleEdit} />;
};

export { Edit };

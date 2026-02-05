import { GroupRecord } from "@design/feedback/groupRecord";
import { useEditInConstructionModal } from "@hooks/editInConstruction";

const Group = () => {
  const { handleEdit } = useEditInConstructionModal();
  return <GroupRecord onEdit={handleEdit} />;
};

export { Group };

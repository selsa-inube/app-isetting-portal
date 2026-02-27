import { EditRecord } from "@design/feedback/editRecord";
import { useEditUsersModal } from "@hooks/users/tabs/userTab/useEditUsersModal";
import { IEdit } from "@ptypes/users/tabs/userTab/editUser/IEdit";

const Edit = (props: IEdit) => {
  const { data } = props;
  const { handleEdit, showInfoModal } = useEditUsersModal(data);

  return <EditRecord onEdit={handleEdit} showInfoModal={showInfoModal} />;
};

export { Edit };

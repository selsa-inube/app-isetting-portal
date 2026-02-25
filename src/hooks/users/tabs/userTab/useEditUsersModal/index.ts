import { IEntry } from "@ptypes/design/table/IEntry";
import { useNavigate } from "react-router-dom";

const useEditUsersModal = (data: IEntry) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/users/edit-user`, {
      state: { data },
    });
  };

  return {
    handleEdit,
  };
};

export { useEditUsersModal };

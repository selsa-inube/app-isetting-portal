import { IEntry } from "@ptypes/table/IEntry";
import { useState } from "react";

const UseDeleteRequestInProgress = (
  data: IEntry,
  setEntryDeleted: (value: string | number) => void
) => {
  const [showModal, setShowModal] = useState(false);
  const [justificationDelete, setJustificationDelete] = useState("");

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClick = () => {
    setShowModal(!showModal);
    setEntryDeleted(data.id as string);
  };

  return {
    showModal,
    handleToggleModal,
    handleClick,
    setJustificationDelete,
    justificationDelete,
  };
};
export { UseDeleteRequestInProgress };

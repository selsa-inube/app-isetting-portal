import { EModalState } from "@enum/modalState";
import { eventBus } from "@events/eventBus";
import { IEntry } from "@ptypes/table/IEntry";
import { useEffect, useState } from "react";

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

    useEffect(() => {
    eventBus.emit(EModalState.SECOND_MODAL_STATE, showModal);
  }, [showModal]);

  return {
    showModal,
    handleToggleModal,
    handleClick,
    setJustificationDelete,
    justificationDelete,
  };
};
export { UseDeleteRequestInProgress };

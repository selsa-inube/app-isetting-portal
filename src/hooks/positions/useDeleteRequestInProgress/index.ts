import { useEffect, useState } from "react";
import { EModalState } from "@enum/modalState";
import { eventBus } from "@events/eventBus";
import { IUseDeleteRequestInProgress } from "@ptypes/hooks/IUseDeleteRequestInProgress";

const useDeleteRequestInProgress = (props: IUseDeleteRequestInProgress) => {
  const { data, setEntryDeleted } = props;
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
export { useDeleteRequestInProgress };

import { useState } from "react";

import { Button } from "@inubekit/inubekit";
import { IInteractiveModal } from "@ptypes/interactiveModal/InteractiveModalProps";
import { InteractiveModal } from ".";

const story = {
  title: "Components/Feedback/InteractiveModal",
  component: InteractiveModal,
};

const data = {
  missionId: "123",
  descriptionUse: "description",
};

const dataTable = [
  {
    missionId: "123",
  },
  {
    missionId: "456",
  },
];

const Default = (args: IInteractiveModal) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      {showModal && (
        <InteractiveModal {...args} closeModal={() => setShowModal(false)} />
      )}
    </>
  );
};

Default.args = {
  portalId: "portal",
  title: "User Information",
  infoData: data,
  infoTitle: "Información",
  actionsTitle: "Acciones",
  dataTable,
};
export { Default };
export default story;

import { useState } from "react";

import { Button } from "@inubekit/inubekit";

import { InteractiveModal } from ".";
import { InteractiveModalProps } from "./types";

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

const Default = (args: InteractiveModalProps) => {
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

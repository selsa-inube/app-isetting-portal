import { useState } from "react";

import { Button } from "@inubekit/inubekit";
import { IInteractiveModal } from "@ptypes/interactiveModal/InteractiveModalProps";
import { InteractiveModal } from ".";

const story = {
  title: "Components/Feedback/InteractiveModalDetailsUsers",
  component: InteractiveModal,
};

const data = {
  missionId: "Pruebas",
  descriptionUse: "description",
  descriptiosnUse: "description",
  userID: "123",
  username: "John Doe",
  email: "johndoe@example.com",
  phone: "1234567890",
  position: "Software Engineer",
};

const dataTable = [
  {
    missionId: "123",
    descriptionUse: "description",
  },
  {
    missionId: "456",
    descriptionUse: "description",
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
  infoTitle: "Unidades de negocio asignadas al funcionario",
  infoText: "Cerrar",
  actionsTitle: "Acciones",
  dataTable,
};
export { Default };
export default story;

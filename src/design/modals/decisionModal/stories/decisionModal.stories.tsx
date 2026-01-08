import { MdOutlineWarningAmber } from "react-icons/md";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@inubekit/inubekit";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IDecisionModal } from "@ptypes/modals/decisionModal/IDecisionModal";
import { DecisionModal } from "..";

const meta: Meta<typeof DecisionModal> = {
  title: "modals/DecisionModal",
  component: DecisionModal,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<IDecisionModal> = (args) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      {showModal && (
        <DecisionModal {...args} onCloseModal={() => setShowModal(false)} />
      )}
    </>
  );
};

const DeleteProcess = Template.bind({});
DeleteProcess.args = {
  portalId: "portal",
  title: "Eliminar",
  description: "¿Realmente deseas eliminar este roles?",
  actionText: "Eliminar",
  justificationOfDecision: true,
};

const EditProcess = Template.bind({});
EditProcess.args = {
  portalId: "portal",
  title: "Editar",
  description: "¿Realmente deseas editar este roles?",
  actionText: "Continuar",
};

const WithIcon = Template.bind({});
WithIcon.args = {
  portalId: "portal",
  title: "Atención",
  description:
    "El roles debería tener al menos una (1) línea de crédito, en caso contrario este roles NO será utilizable.",
  actionText: "Continuar aún así",
  withIcon: true,
  icon: <MdOutlineWarningAmber />,
  appearance: ComponentAppearance.WARNING,
};

export { WithIcon, EditProcess, DeleteProcess };
export default meta;

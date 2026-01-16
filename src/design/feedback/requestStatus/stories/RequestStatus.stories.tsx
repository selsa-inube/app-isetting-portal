import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@inubekit/inubekit";
import { useState } from "react";
import { IRequestStatus, RequestStatus } from "..";

const meta: Meta<typeof RequestStatus> = {
  title: "modals/RequestStatus",
  component: RequestStatus,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<IRequestStatus> = (args) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      {showModal && (
        <RequestStatus {...args} onCloseModal={() => setShowModal(false)} />
      )}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  portalId: "portal",
  title: "Solicitud",
  requestNumber: "123245",
  description:
    "Este proceso será gestionado por Jose Perez, puede tardar algún tiempo mientras se gestiona la aprobación.",
  actionText: "Enterado",
};

export default meta;

import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@inubekit/inubekit";
import { ModalWrapper, IModalWrapper } from ".";

const meta: Meta<typeof ModalWrapper> = {
  title: "modals/ModalWrapper",
  component: ModalWrapper,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<IModalWrapper> = (args) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      {showModal && (
        <ModalWrapper {...args} onCloseModal={() => setShowModal(false)} />
      )}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  portalId: "portal",
  children: <div>Content of the modal</div>,
  height: "500px",
  width: "600px",
  isMobile: false,
  title: "titulo",
  withCancelButton: true,
};

export default meta;

import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@inubekit/inubekit";

import {
  DetailsRequestsInProgressModal,
  IDetailsRequestsInProgressModal,
} from "..";

const meta: Meta<typeof DetailsRequestsInProgressModal> = {
  title: "modals/DetailsRequestsInProgressModal",
  component: DetailsRequestsInProgressModal,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const labelsData = [
  {
    id: "date",
    titleName: "Fecha de solicitud:",
  },
  {
    id: "responsible",
    titleName: "Responsable:",
  },
];

const labelsOfTraceability = [
  {
    id: "observation",
    titleName: "Observación:",
  },
];

const labelsOfTraceabilityDate = [
  {
    id: "date",
    titleName: "Fecha:",
  },
];

const data = {
  id: "1",
  request: "Solicitud de creación Servicio Generación de cobro x cliente.",
  date: "19/Oct/2024",
  responsible: "Marcela María González Suarez",
  observation: "Solicitud ",
  configurationRequestsTraceability: [
    {
      date: "Solicitud aprobada",
      observation: "Solicitud ",
    },
    {
      date: "Solicitud revisada",
      observation: "Solicitud ",
    },
  ],
};

const Template: StoryFn<IDetailsRequestsInProgressModal> = (args) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Mostrar Modal</Button>
      {showModal && (
        <DetailsRequestsInProgressModal
          {...args}
          onCloseModal={() => setShowModal(false)}
        />
      )}
    </>
  );
};

const Default = Template.bind({});
Default.args = {
  portalId: "portal",
  labelsData,
  labelsOfTraceability,
  labelsOfTraceabilityDate,
  data,
};

export { Default };
export default meta;

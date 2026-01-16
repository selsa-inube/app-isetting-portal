import { BrowserRouter } from "react-router-dom";
import type { Meta, StoryObj } from "@storybook/react";

import { FilterModal } from ".";

const meta: Meta<typeof FilterModal> = {
  title: "modals/FilterModal",
  component: FilterModal,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FilterModal>;

export const Default: Story = {
  args: {
    actionText: "Filtrar",
    appearance: "primary",
    portalId: "portal",
    title: "Filtrar",
    options: [
      { label: "Aplicación 1", id: "app1", checked: false },
      { label: "Aplicación 2", id: "app2", checked: false },
      { label: "Aplicación 3", id: "app3", checked: false },
    ],
    selectedOptions: [],
  },
};

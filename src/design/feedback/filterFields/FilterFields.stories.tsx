import { BrowserRouter } from "react-router-dom";
import type { Meta, StoryObj } from "@storybook/react";

import { FilterFieldController } from "./FilterFields.Controller";
import type { IFilterFieldController } from "./FilterFields.Controller";

const meta: Meta<typeof FilterFieldController> = {
  component: FilterFieldController,
  title: "feedback/FilterFields",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FilterFieldController>;

export const Default: Story = {
  args: {
    options: [
      { id: "Aplicacion.", label: "Aplicación." },
      { id: "Sistemas.", label: "Sistemas." },
      { id: "Contabilidad.", label: "Contabilidad." },
    ],
  } as IFilterFieldController,
};

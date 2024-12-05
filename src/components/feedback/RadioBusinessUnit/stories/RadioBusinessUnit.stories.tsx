import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { RadioBusinessUnit, RadioBusinessUnitProps } from "../index";
import { businessUnitDataMock } from "@mocks/login/businessUnit.mock";

const meta: Meta<typeof RadioBusinessUnit> = {
  title: "feedback/RadioBusinessUnit",
  component: RadioBusinessUnit,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};
const Default = (args: RadioBusinessUnitProps) => (
  <RadioBusinessUnit {...args} />
);

Default.args = {
  id: businessUnitDataMock[1].publicCode,
  name: "BusinessUnit",
  value: businessUnitDataMock[1].abbreviatedName,
  label: businessUnitDataMock[1].abbreviatedName,
  logo: businessUnitDataMock[1].urlLogo,
};

export default meta;

export { Default };

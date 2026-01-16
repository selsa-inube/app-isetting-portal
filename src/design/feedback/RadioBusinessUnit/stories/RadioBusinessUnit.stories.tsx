import { BrowserRouter } from "react-router-dom";
import { businessUnitDataMock } from "@mocks/login/businessUnit.mock";
import { Meta, StoryFn } from "@storybook/react";
import { RadioBusinessUnit, IRBusinessUnit } from "../index";

const meta: Meta<typeof RadioBusinessUnit> = {
  title: "feedback/RadioBusinessUnit",
  component: RadioBusinessUnit,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<IRBusinessUnit> = (args) => (
  <RadioBusinessUnit {...args} />
);

const Default = Template.bind({});
Default.args = {
  id: businessUnitDataMock[1].publicCode,
  name: "BusinessUnit",
  value: businessUnitDataMock[1].abbreviatedName,
  label: businessUnitDataMock[1].abbreviatedName,
  logo: businessUnitDataMock[1].urlLogo,
};
export { Default };
export default meta;

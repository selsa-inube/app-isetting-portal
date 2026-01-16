import { BrowserRouter } from "react-router-dom";
import { Meta } from "@storybook/react";
import { CorePageStructure } from ".";

const meta: Meta<typeof CorePageStructure> = {
  title: "layout/appPage",
  component: CorePageStructure,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = () => <CorePageStructure />;
export { Default };
export default meta;

import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import { CorePageStructure } from ".";

const meta: Meta<typeof CorePageStructure> = {
  title: "layout/appPage",
  component: CorePageStructure,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = () => <CorePageStructure />;
export { Default };
export default meta;

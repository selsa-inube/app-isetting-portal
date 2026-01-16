import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { SubjectSearchCard } from ".";

const meta: Meta<typeof SubjectSearchCard> = {
  component: SubjectSearchCard,
  title: "components/cards/SubjectSearchCard",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

const data = {
  username: "David Leonardo Garzón",
  userID: "45645",
  mail: "lgarzon@gmail.com",
  invitationDate: "11/JUN/2022",
  status: "Sent",
  id: 10,
};

type Story = StoryObj<typeof SubjectSearchCard>;

export const Default: Story = {
  args: {
    subjectSearchData: data,
  },
};

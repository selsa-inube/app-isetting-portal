import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Stack, Button } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

import { LogoutModal } from ".";

const meta: Meta<typeof LogoutModal> = {
  title: "components/feedback/logout",
  component: LogoutModal,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof LogoutModal> = {
  args: {
    handleShowBlanket: action("handleShowBlanket"),
    logoutPath: "/logout",
  },
  render: (args) => {
    const [showBlanket, setShowBlanket] = useState(false);

    const handleShowBlanket = () => {
      setShowBlanket(!showBlanket);
    };

    return (
      <Stack padding={basic.spacing.s24}>
        <Button onClick={handleShowBlanket}>Cerrar sesión</Button>
        {showBlanket && (
          <LogoutModal {...args} handleShowBlanket={handleShowBlanket} />
        )}
      </Stack>
    );
  },
};

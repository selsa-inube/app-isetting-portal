import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Stack, Button } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { ILogoutModal, LogoutModal } from ".";

const story = {
  title: "components/feedback/logout",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: ILogoutModal) => {
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
};

Default.args = {
  handleShowBlanket: action("handleShowBlanket"),
  logoutPath: "/logout",
};

export { Default };
export default story;

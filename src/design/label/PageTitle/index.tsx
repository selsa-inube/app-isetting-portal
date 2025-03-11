import { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Stack, useMediaQuery, Text, Icon } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { enviroment } from "@config/environment";
import { DecisionModal } from "@design/modals/decisionModal";

interface IPageTitle {
  title: string;
  icon?: React.ReactNode;
  description: string;
  navigatePage?: string;
}

const PageTitle = ({ title, icon, description, navigatePage }: IPageTitle) => {
  const smallScreen = useMediaQuery(enviroment.IS_MOBILE_580);
  const navigate = useNavigate();
  const [showCancelModal, setShowCancelModal] = useState(false);

  const confirmCancel = () => {
    setShowCancelModal(false);
    navigatePage ? navigate(navigatePage) : navigate(-1);
  };

  return (
    <>
      <Stack gap={basic.spacing.s8} direction="column">
        <Stack gap={basic.spacing.s8} alignItems="center">
          <Icon
            appearance="dark"
            cursorHover={true}
            icon={icon || <MdArrowBack />}
            spacing="narrow"
            size="20px"
            onClick={() => setShowCancelModal(true)}
          />
          <Text as="h1" type="title" size={smallScreen ? "medium" : "large"}>
            {title}
          </Text>
        </Stack>
        <Text appearance="gray" size={smallScreen ? "small" : "medium"}>
          {description}
        </Text>
      </Stack>

      {showCancelModal && (
        <DecisionModal
          portalId="portal"
          title="Regresar"
          description="Perderás el progreso, ¿Realmente deseas regresar?"
          actionText="Regresar"
          onCloseModal={() => setShowCancelModal(false)}
          onClick={confirmCancel}
        />
      )}
    </>
  );
};

export { PageTitle };
export type { IPageTitle };

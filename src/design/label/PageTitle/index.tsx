import { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Stack, useMediaQuery, Text, Icon } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { mediaQueryMobileSmall } from "@config/environment";
import { DecisionModal } from "@design/modals/decisionModal";
import { portalId } from "@config/portalId";
import { goBackModal } from "@config/goBackModal";
import { EComponentAppearance } from "@enum/appearances";

interface IPageTitle {
  title: string;
  icon?: React.ReactNode;
  description?: string;
  navigatePage?: string;
}

const PageTitle = ({ title, icon, description, navigatePage }: IPageTitle) => {
  const smallScreen = useMediaQuery(mediaQueryMobileSmall);
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
            appearance={EComponentAppearance.DARK}
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
        <Text
          appearance={EComponentAppearance.GRAY}
          size={smallScreen ? "small" : "medium"}
        >
          {description}
        </Text>
      </Stack>

      {showCancelModal && (
        <DecisionModal
          portalId={portalId}
          title={goBackModal.title}
          description={goBackModal.description}
          actionText={goBackModal.actionText}
          onCloseModal={() => setShowCancelModal(false)}
          onClick={confirmCancel}
        />
      )}
    </>
  );
};

export { PageTitle };
export type { IPageTitle };

import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";
import {
  Stack,
  Text,
  Button,
  Blanket,
  Icon,
  Divider,
} from "@inubekit/inubekit";
import { IDecisionModal } from "@ptypes/IDecisionModal";
import { StyledContainerButton, StyledModal } from "./styles";
import { ComponentAppearance } from "@ptypes/aparences.types";

const DecisionModalUI = (props: IDecisionModal) => {
  const {
    actionText,
    appearance,
    description,
    isLoading,
    icon,
    portalId,
    title,
    withIcon,
    subtitle,
    onClick,
    onCloseModal,
    isMobile,
    showCancelButton = true,
    cancelButton,
  } = props;

  const node = document.getElementById(portalId);
  if (!node) {
    throw new Error("The portal node is not defined.");
  }

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" gap="s200">
          <Stack alignItems="center" justifyContent="space-between">
            <Text
              type="headline"
              size="small"
              appearance={ComponentAppearance.DARK}
            >
              {title}
            </Text>
            <StyledContainerButton>
              <Button
                spacing="compact"
                appearance={ComponentAppearance.DARK}
                variant="none"
                onClick={onCloseModal}
                iconAfter={
                  <Icon
                    appearance={ComponentAppearance.DARK}
                    icon={<MdClear />}
                  />
                }
              />
            </StyledContainerButton>
          </Stack>
          <Divider />
        </Stack>

        {withIcon && (
          <Stack width="100%" alignItems="center" justifyContent="center">
            <Icon icon={icon} appearance={appearance} size="60px" />
          </Stack>
        )}
        {subtitle && (
          <Text
            appearance={ComponentAppearance.DARK}
            type="body"
            size="large"
            weight="bold"
          >
            {subtitle}
          </Text>
        )}

        <Text appearance={ComponentAppearance.GRAY} type="body" size="medium">
          {description}
        </Text>

        <Stack gap="s250" justifyContent="flex-end">
          {showCancelButton && (
            <Button
              spacing="wide"
              appearance={ComponentAppearance.GRAY}
              variant="filled"
              onClick={onCloseModal}
            >
              {cancelButton}
            </Button>
          )}
          <Button
            spacing="wide"
            appearance={appearance}
            variant="filled"
            loading={isLoading}
            onClick={onClick}
          >
            {actionText}
          </Button>
        </Stack>
      </StyledModal>
    </Blanket>,
    node
  );
};

export { DecisionModalUI };

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
import { IDecisionModalUI } from "@ptypes/IDecisionModal";
import { EComponentAppearance } from "@enum/appearances";
import { basic } from "@design/tokens";
import { StyledContainerButton, StyledModal } from "./styles";

const DecisionModalUI = (props: IDecisionModalUI) => {
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
    withDivider,
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
              appearance={EComponentAppearance.DARK}
            >
              {title}
            </Text>
            <StyledContainerButton>
              <Button
                spacing="compact"
                appearance={EComponentAppearance.DARK}
                variant="none"
                onClick={onCloseModal}
                iconAfter={
                  <Icon
                    appearance={EComponentAppearance.DARK}
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
            appearance={EComponentAppearance.DARK}
            type="body"
            size="large"
            weight="bold"
          >
            {subtitle}
          </Text>
        )}
        {withDivider && <Divider dashed />}
        <Text appearance={EComponentAppearance.GRAY} type="body" size="medium">
          {description}
        </Text>

        <Stack gap={basic.spacing.s10} justifyContent="flex-end">
          {showCancelButton && (
            <Button
              spacing="wide"
              appearance={EComponentAppearance.GRAY}
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

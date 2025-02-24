import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";
import { FormikValues } from "formik";
import {
  Stack,
  Text,
  Button,
  Blanket,
  Icon,
  IIconAppearance,
  Divider,
} from "@inubekit/inubekit";
import { StyledContainerButton, StyledModal } from "./styles";

interface IDecisionModalUI {
  actionText: string;
  appearance: IIconAppearance;
  comparisonData: boolean;
  description: string;
  formik: FormikValues;
  icon: React.JSX.Element;
  isLoading: boolean;
  justificationOfDecision: boolean;
  portalId: string;
  title: string;
  withIcon: boolean;
  onClick: () => void;
  onCloseModal: () => void;
  isMobile: boolean;
  isMobileTextarea: boolean;
  getFieldState: (
    formik: FormikValues,
    fieldName: string
  ) => "invalid" | "pending" | undefined;
  showCancelButton?: boolean;
  withCancelButton: boolean;
}

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
    onClick,
    onCloseModal,
    isMobile,
    withCancelButton,
    showCancelButton = true,
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
            <Text type="headline" size="small" appearance="dark">
              {title}
            </Text>
            <StyledContainerButton>
              {withCancelButton && (
                <Button
                  spacing="compact"
                  appearance="dark"
                  variant="none"
                  onClick={onCloseModal}
                  iconAfter={<Icon appearance="dark" icon={<MdClear />} />}
                >
                  Cerrar
                </Button>
              )}
            </StyledContainerButton>
          </Stack>
          <Divider />
        </Stack>

        {withIcon && (
          <Stack width="100%" alignItems="center" justifyContent="center">
            <Icon icon={icon} appearance={appearance} size="60px" />
          </Stack>
        )}

        <Text appearance="gray" type="body" size="medium">
          {description}
        </Text>

        <Stack gap="s250" justifyContent="flex-end">
          {showCancelButton && (
            <Button
              spacing="wide"
              appearance="gray"
              variant="filled"
              onClick={onCloseModal}
            >
              Cancelar
            </Button>
          )}
          <Button
            spacing="wide"
            appearance={appearance}
            variant="filled"
            loading={isLoading}
            onClick={onClick}
            disabled={false}
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
export type { IDecisionModalUI };

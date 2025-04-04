import { MdClear } from "react-icons/md";
import { createPortal } from "react-dom";
import { FormikValues } from "formik";
import {
  Stack,
  Text,
  Icon,
  IIconAppearance,
  Divider,
  useMediaQuery,
  Blanket,
  Button,
} from "@inubekit/inubekit";

import { enviroment } from "@config/environment";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { basic } from "@design/tokens";
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
  withCancelButton: boolean;
  onClick: () => void;
  onCloseModal: () => void;
}

const DecisionModalUI = (props: IDecisionModalUI) => {
  const {
    actionText,
    appearance,
    comparisonData,
    description,
    formik,
    isLoading,
    icon,

    portalId,
    title,
    withIcon,
    withCancelButton,
    onCloseModal,
    onClick,
  } = props;

  const isMobile = useMediaQuery(enviroment.MEDIA_QUERY_MOBILE);
  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" gap={basic.spacing.s200}>
          <Stack alignItems="center" justifyContent="space-between">
            <Text type="headline" size="small" appearance="dark">
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
              >
                Cerrar
              </Button>
            </StyledContainerButton>
          </Stack>
          <Divider />
        </Stack>

        {withIcon && (
          <Stack width="100%" alignItems="center" justifyContent="center">
            <Icon icon={icon} appearance={appearance} size="60px" />
          </Stack>
        )}

        <Text appearance={ComponentAppearance.GRAY} type="body" size="medium">
          {description}
        </Text>

        <Stack gap={basic.spacing.s250} justifyContent="flex-end">
          {withCancelButton && (
            <Button
              spacing="wide"
              appearance={ComponentAppearance.GRAY}
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
            disabled={comparisonData || !formik.isValid}
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

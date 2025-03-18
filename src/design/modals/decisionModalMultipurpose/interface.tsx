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
  Textarea,
  Button,
} from "@inubekit/inubekit";

import { StyledContainerButton, StyledModal, StyledTextarea } from "./styles";
import { enviroment } from "@config/environment";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { basic } from "@design/tokens";

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
    justificationOfDecision,
    portalId,
    title,
    withIcon,
    withCancelButton,
    onCloseModal,
    onClick,
  } = props;

  const isMobile = useMediaQuery(enviroment.MEDIA_QUERY_MOBILE);
  const isMobileTextarea = useMediaQuery("(max-width: 490px)");

  const getFieldState = (formik: FormikValues, fieldName: string) => {
    if (formik.errors[fieldName]) return "invalid";
  };

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

        {justificationOfDecision && (
          <StyledTextarea $smallScreen={isMobileTextarea}>
            <Textarea
              label=""
              name="justification"
              id="justification"
              placeholder="Indique la razón por la que desea realizar esta acción"
              value={formik.values.justification}
              message={formik.errors.justification}
              fullwidth
              maxLength={130}
              status={getFieldState(formik, "justification")}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </StyledTextarea>
        )}

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

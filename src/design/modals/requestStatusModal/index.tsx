import { MdCheckCircle, MdClear } from "react-icons/md";
import { createPortal } from "react-dom";
import {
  Blanket,
  Button,
  Divider,
  Icon,
  Stack,
  Text,
  useMediaQuery,
} from "@inubekit/inubekit";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { basic } from "@design/tokens";
import { IRequestStatusModal } from "@ptypes/requestsInProgress/IRequestStatusModal";
import { StyledModal } from "./styles";

const RequestStatusModal = (props: IRequestStatusModal) => {
  const {
    portalId,
    actionText,
    title,
    appearance,
    description,
    isLoading,
    requestNumber,
    onClick,
    onCloseModal,
  } = props;

  const isMobile = useMediaQuery("(max-width: 768px)");

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
            <Text type="headline" size="small" weight="bold" appearance="dark">
              {title}
            </Text>

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
          </Stack>
          <Divider />
        </Stack>

        <Stack alignItems="center" justifyContent="center">
          <Icon
            icon={<MdCheckCircle />}
            appearance={ComponentAppearance.SUCCESS}
            size="68px"
          />
        </Stack>

        <Stack direction="column" gap={basic.spacing.s200}>
          <Stack justifyContent="center">
            <Text
              textAlign="center"
              appearance={ComponentAppearance.DARK}
              size="large"
              weight="bold"
            >
              {`Solicitud # ${requestNumber}`}
            </Text>
          </Stack>

          <Text appearance={ComponentAppearance.GRAY} size="medium">
            {description}
          </Text>
        </Stack>

        <Stack width="100%" justifyContent="flex-end">
          <Button
            spacing="wide"
            appearance={appearance}
            variant="filled"
            loading={isLoading}
            onClick={onClick}
            fullwidth={isMobile ? true : false}
          >
            {actionText}
          </Button>
        </Stack>
      </StyledModal>
    </Blanket>,
    node
  );
};

export { RequestStatusModal };
export type { IRequestStatusModal };

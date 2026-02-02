import { createPortal } from "react-dom";
import { MdCheckCircle, MdClear } from "react-icons/md";
import { EComponentAppearance } from "@enum/appearances";
import {
  Stack,
  Icon,
  IIconAppearance,
  Text,
  Button,
  useMediaQuery,
  Blanket,
  Divider,
} from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { StyledContainerButton, StyledModal } from "./styles";

interface IRequestStatus {
  portalId: string;
  title: string;
  actionText: string;
  description: string;
  isLoading: boolean;
  requestNumber: string;
  onClick: () => void;
  onCloseModal: () => void;
  appearance?: IIconAppearance;
}

const RequestStatus = (props: IRequestStatus) => {
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
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly.",
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" gap={basic.spacing.s200}>
          <Stack alignItems="center" justifyContent="space-between">
            <Text
              type="headline"
              size="small"
              weight="bold"
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
              >
                Cerrar
              </Button>
            </StyledContainerButton>
          </Stack>
          <Divider />
        </Stack>

        <Stack alignItems="center" justifyContent="center">
          <Icon
            icon={<MdCheckCircle />}
            appearance={EComponentAppearance.SUCCESS}
            size={isMobile ? "50px" : "68px"}
          />
        </Stack>

        <Stack direction="column" gap={basic.spacing.s200}>
          <Stack justifyContent="center">
            <Text
              textAlign="center"
              appearance={EComponentAppearance.DARK}
              size="large"
              weight="bold"
            >
              {`Solicitud # ${requestNumber}`}
            </Text>
          </Stack>

          <Text appearance={EComponentAppearance.GRAY} size="medium">
            {description}
          </Text>
        </Stack>

        <Stack justifyContent="flex-end">
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
    node,
  );
};

export { RequestStatus };
export type { IRequestStatus };

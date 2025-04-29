import { MdClear } from "react-icons/md";
import { createPortal } from "react-dom";
import {
  Blanket,
  Button,
  Divider,
  Icon,
  inube,
  Stack,
  Text,
} from "@inubekit/inubekit";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { basic } from "@design/tokens";
import { IModalWrapper } from "@ptypes/modals/IModalWrapper";
import { BorderStack } from "../borderStack";

const ModalWrapper = (props: IModalWrapper) => {
  const {
    appearanceButton,
    children,
    height = "auto",
    iconBeforeButton,
    labelActionButton,
    labelCloseButton,
    labelCloseModal,
    portalId,
    title,
    width = "auto",
    withCancelButton,
    onCloseModal,
    onClick,
  } = props;

  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return createPortal(
    <Blanket>
      <BorderStack
        width={width}
        height={height}
        direction="column"
        background={inube.palette.neutral.N0}
        borderRadius={basic.spacing.s100}
        padding={basic.spacing.s300}
        boxSizing="border-box"
      >
        <Stack
          direction="row"
          gap={basic.spacing.s300}
          justifyContent="space-between"
          margin={`${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s16} ${basic.spacing.s0}`}
        >
          <Text
            type="headline"
            size="small"
            appearance={ComponentAppearance.DARK}
            weight="normal"
          >
            {title}
          </Text>
          <Stack
            justifyContent="center"
            alignItems="center"
            gap={basic.spacing.s8}
          >
            <Text
              type="body"
              size="large"
              appearance={ComponentAppearance.DARK}
              cursorHover
              onClick={onCloseModal}
            >
              {labelCloseModal}
            </Text>
            <Icon
              appearance={ComponentAppearance.DARK}
              icon={<MdClear />}
              cursorHover
              onClick={onCloseModal}
            />
          </Stack>
        </Stack>
        <Divider />

        <BorderStack
          height="100%"
          width="100%"
          overflowY="auto"
          margin={`${basic.spacing.s300} ${basic.spacing.s0}`}
        >
          {children}
        </BorderStack>

        <Stack gap={basic.spacing.s250} justifyContent="flex-end">
          {withCancelButton && (
            <Button
              spacing="wide"
              appearance={ComponentAppearance.LIGHT}
              variant="filled"
              onClick={onCloseModal}
            >
              {labelCloseButton}
            </Button>
          )}

          <Button
            spacing="wide"
            appearance={appearanceButton ?? ComponentAppearance.PRIMARY}
            variant="filled"
            onClick={onClick}
            iconBefore={iconBeforeButton ?? <></>}
          >
            {labelActionButton}
          </Button>
        </Stack>
      </BorderStack>
    </Blanket>,
    node
  );
};

export { ModalWrapper };
export type { IModalWrapper };

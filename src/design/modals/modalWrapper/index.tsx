import { MdClear } from "react-icons/md";
import { createPortal } from "react-dom";
import {
  Blanket,
  Button,
  Divider,
  Icon,
  Stack,
  Text,
} from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { IModalWrapper } from "@ptypes/modals/IModalWrapper";
import { BorderStack } from "../../layout/borderStack";
import { EComponentAppearance } from "@enum/appearances";

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
    minHeight,
    maxHeight,
    padding = basic.spacing.s300,
    overflowY="auto",
    disabled= false,
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
      direction="column"
        width={width}
        height={height}
        background={EComponentAppearance.LIGHT}
        borderRadius={basic.spacing.s100}
        padding={padding}
        boxSizing="border-box"
        minHeight={minHeight}
        maxHeight={maxHeight}
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
            appearance={EComponentAppearance.DARK}
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
              appearance={EComponentAppearance.DARK}
              cursorHover
              onClick={onCloseModal}
            >
              {labelCloseModal}
            </Text>
            <Icon
              appearance={EComponentAppearance.DARK}
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
          overflowY={overflowY}
          margin={`${basic.spacing.s300} ${basic.spacing.s0}`}
        >
          {children}
        </BorderStack>

        <Stack gap={basic.spacing.s250} justifyContent="flex-end">
          {withCancelButton && (
            <Button
              spacing="wide"
              appearance={EComponentAppearance.LIGHT}
              variant="filled"
              onClick={onCloseModal}
            >
              {labelCloseButton}
            </Button>
          )}

          <Button
            spacing="wide"
            appearance={appearanceButton ?? EComponentAppearance.PRIMARY}
            variant="filled"
            onClick={onClick}
            iconBefore={iconBeforeButton ?? <></>}
            disabled={disabled}
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

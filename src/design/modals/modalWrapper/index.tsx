import { MdClear } from "react-icons/md";
import { createPortal } from "react-dom";
import {
  Blanket,
  Button,
  Divider,
  Grid,
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
    isMobile,
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
        gap={isMobile ? `${basic.spacing.s150}` : `${basic.spacing.s300}`}
        boxSizing="border-box"
      >
        <Grid templateColumns="1fr auto" templateRows="1fr">
          <Text type="headline" size="small" appearance="dark">
            {title}
          </Text>

          <Button
            spacing="compact"
            appearance={ComponentAppearance.DARK}
            variant="none"
            onClick={onCloseModal}
            iconAfter={
              <Icon appearance={ComponentAppearance.DARK} icon={<MdClear />} />
            }
          >
            {labelCloseModal}
          </Button>
        </Grid>
        <Divider />

        <BorderStack height="100%" width="100%" overflowY="auto">
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

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
import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";

import { BorderStack } from "../borderStack";

interface IModalWrapper {
  children: React.ReactNode;
  isMobile: boolean;
  portalId: string;
  title: string;
  onClick: () => void;
  appearanceButton?: ComponentAppearance;
  iconBeforeButton?: React.ReactElement;
  height?: string;
  width?: string;
  withCancelButton?: boolean;
  onCloseModal?: () => void;
}

function ModalWrapper(props: IModalWrapper) {
  const {
    children,
    height = "auto",
    isMobile,
    portalId,
    title,
    width = "auto",
    withCancelButton,
    onCloseModal,
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
        <Stack
          direction="column"
          gap={isMobile ? basic.spacing.s200 : basic.spacing.s200}
        >
          <Stack alignItems="center" justifyContent="space-between">
            <Text type="headline" size="small" appearance="dark">
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

        <Stack height="100%" width="100%">
          {children}
        </Stack>

        <Stack gap={basic.spacing.s250} justifyContent="flex-end">
          {withCancelButton && (
            <Button
              spacing="wide"
              appearance={ComponentAppearance.LIGHT}
              variant="filled"
              onClick={onCloseModal}
            >
              Cerrar
            </Button>
          )}
        </Stack>
      </BorderStack>
    </Blanket>,
    node
  );
}

export { ModalWrapper };
export type { IModalWrapper };

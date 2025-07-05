import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";
import {
  Button,
  Stack,
  Text,
  Blanket,
  useMediaQuery,
  Icon,
  Divider,
} from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { enviroment } from "@config/environment";
import { IInteractiveModal } from "@ptypes/interactiveModal/InteractiveModalProps";
import { BorderStack } from "@design/modals/borderStack";

const InteractiveModal = (props: IInteractiveModal) => {
  const { children, closeModal, title, width, height, portalId, infoText } =
    props;
  const smallScreen = useMediaQuery(enviroment.IS_MOBILE_970);
  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return createPortal(
    <Blanket>
      <BorderStack
        background="n10"
        width={width}
        height={height}
        borderRadius={smallScreen ? basic.spacing.s0 : basic.spacing.s8}
        direction="column"
        padding={smallScreen ? basic.spacing.s16 : basic.spacing.s24}
        gap={basic.spacing.s24}
      >
        <Stack direction="column" gap={basic.spacing.s20}>
          <Stack alignItems="center" justifyContent="space-between">
            <Text type="headline" size="small" appearance="dark">
              {title}
            </Text>
            <Icon
              appearance={"dark"}
              icon={<MdClear />}
              spacing="narrow"
              size="24px"
              cursorHover
              onClick={closeModal}
            />
          </Stack>
          <Divider dashed />
        </Stack>

        {children}

        <Stack justifyContent="right">
          <Button onClick={closeModal}>{infoText}</Button>
        </Stack>
      </BorderStack>
    </Blanket>,
    node
  );
};

export { InteractiveModal };

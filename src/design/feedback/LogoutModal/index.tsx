import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  Stack,
  Text,
  Icon,
  Button,
  Blanket,
  useMediaQuery,
} from "@inubekit/inubekit";
import { enviroment } from "@config/environment";
import { basic } from "@design/tokens";

import { StyledBackdropBlanket, StyledModal } from "./styles";

interface ILogoutModal {
  handleShowBlanket: () => void;
  logoutPath: string;
}

const LogoutModal = (props: ILogoutModal) => {
  const { logoutPath, handleShowBlanket } = props;
  const smallScreen = useMediaQuery(enviroment.IS_MOBILE_743);

  return (
    <StyledBackdropBlanket>
      <Blanket>
        <StyledModal $smallScreen={smallScreen}>
          <Stack
            direction="column"
            gap={basic.spacing.s24}
            padding={basic.spacing.s24}
          >
            <Stack direction="column" gap={basic.spacing.s24}>
              <Stack direction="row" justifyContent="space-between">
                <Text
                  type="title"
                  size={smallScreen ? "small" : "medium"}
                  appearance="dark"
                >
                  Cerrar sesión
                </Text>
                <Icon
                  appearance="dark"
                  icon={<MdClose />}
                  size={smallScreen ? "20px" : "24px"}
                  onClick={handleShowBlanket}
                />
              </Stack>

              <Text size={smallScreen ? "small" : "large"} appearance="gray">
                ¿Realmente quieres cerrar sesión?
              </Text>
            </Stack>
            <Stack justifyContent="flex-end" gap={basic.spacing.s8}>
              <Button
                appearance="gray"
                spacing={smallScreen ? "compact" : "wide"}
                onClick={handleShowBlanket}
              >
                Cancelar
              </Button>
              <Link to={logoutPath}>
                <Button
                  appearance="primary"
                  spacing={smallScreen ? "compact" : "wide"}
                  onClick={handleShowBlanket}
                >
                  Cerrar sesión
                </Button>
              </Link>
            </Stack>
          </Stack>
        </StyledModal>
      </Blanket>
    </StyledBackdropBlanket>
  );
};

export { LogoutModal };
export type { ILogoutModal };

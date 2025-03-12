import {
  Stack,
  Text,
  Button,
  useMediaQueries,
  useMediaQuery,
} from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { enviroment } from "@config/environment";
import errorImage from "@assets/images/errorImage.png";
import {
  StyledButton,
  StyledCompanyLogo,
  StyledContainerError,
  StyledDivider,
  StyledError,
  StyledList,
  StyledOrderedList,
} from "./styles";

interface IErrorPage {
  logo?: string;
  logoAlt?: string;
  heading?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  nameButton?: string;
  onClick?: () => void;
  listItems?: string[];
}

const ErrorPage = (props: IErrorPage) => {
  const {
    logo = errorImage,
    logoAlt = "Sistemas Enlinea",
    heading = "!Oh! Algo ha salido mal",
    nameButton = "Regresar",
    onClick,
    listItems = [
      "La compañía donde trabajas NO tiene los privilegios requeridos para acceder al portal.",
      "No estás registrado(a) o las atribuciones utilizadas no corresponden con las registradas.",
    ],
  } = props;

  const mediaQueries = ["(min-width: 771px)", "(max-width: 770px)"];
  const matches = useMediaQueries(mediaQueries);
  const smallScreen = useMediaQuery(enviroment.IS_MOBILE_970);

  return (
    <Stack
      gap={
        matches["(min-width: 771px)"]
          ? `${basic.spacing.s600}`
          : `${basic.spacing.s800}`
      }
      direction="column"
      alignItems="center"
    >
      <Stack alignItems="center" direction="column" gap={basic.spacing.s200}>
        <Stack direction="column" alignItems="center" gap={basic.spacing.s200}>
          <Text
            type="title"
            weight="bold"
            size={matches["(max-width: 770px)"] ? "small" : "large"}
          >
            ¡Ups! Algo salió mal...
          </Text>
          <StyledError>
            <Text size={matches["(max-width: 770px)"] ? "small" : "small"}>
              Código de error: 000
            </Text>
          </StyledError>
        </Stack>

        <StyledCompanyLogo
          src={logo}
          alt={logoAlt}
          $smallScreen={smallScreen}
        />
      </Stack>
      <StyledContainerError $isMobile={smallScreen}>
        <Stack direction="column">
          <Text
            type="title"
            weight="bold"
            size={matches["(max-width: 770px)"] ? "small" : "large"}
          >
            {heading}
          </Text>

          <StyledOrderedList>
            {listItems.map((item, index) => (
              <StyledList key={index}>{item}</StyledList>
            ))}
          </StyledOrderedList>
        </Stack>
        <StyledDivider $isMobile={smallScreen} />
        <Stack direction="column">
          <Text
            type="title"
            weight="bold"
            size={matches["(max-width: 770px)"] ? "small" : "large"}
          >
            ¿Cómo solucionarlo?
          </Text>
          <StyledOrderedList>
            <StyledList>Confirma que estés usando la url adecuada.</StyledList>
          </StyledOrderedList>
          <StyledButton>
            <Button onClick={onClick}>{nameButton}</Button>
          </StyledButton>
        </Stack>
      </StyledContainerError>

      <Text>© 2025 Inube</Text>
    </Stack>
  );
};

export { ErrorPage };
export type { IErrorPage };

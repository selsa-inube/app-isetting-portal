import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  Icon,
  useMediaQuery,
  Stack,
  ITextSize,
  Text,
} from "@inubekit/inubekit";
import { enviroment } from "@config/environment";
import { basic } from "@design/tokens";
import { StyledContainerText } from "./styles";

interface ITitle {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  navigatePage?: string;
  sizeTitle?: ITextSize;
}

const Title = (props: ITitle) => {
  const {
    title,
    sizeTitle = "medium",
    description,
    icon,
    navigatePage,
  } = props;

  const smallScreen = useMediaQuery(enviroment.MEDIA_QUERY_MOBILE);

  const navigate = useNavigate();

  return (
    <>
      <Stack gap={basic.spacing.s100} direction="column">
        <Stack gap={basic.spacing.s100} alignItems="center">
          {icon ? (
            <Icon
              appearance="dark"
              cursorHover={true}
              icon={icon}
              spacing="narrow"
              size="20px"
            />
          ) : (
            <Icon
              appearance="dark"
              cursorHover={true}
              icon={<MdArrowBack />}
              spacing="narrow"
              size="20px"
              onClick={() =>
                navigatePage ? navigate(navigatePage) : navigate(-1)
              }
            />
          )}
          <StyledContainerText>
            <Text
              type="title"
              size={smallScreen ? "small" : `${sizeTitle}`}
              weight="bold"
            >
              {title}
            </Text>
          </StyledContainerText>
        </Stack>
        <Text appearance="gray" size={smallScreen ? "small" : "medium"}>
          {description}
        </Text>
      </Stack>
    </>
  );
};

export { Title };
export type { ITitle };

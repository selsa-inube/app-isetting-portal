import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Icon, useMediaQuery, Stack, Text } from "@inubekit/inubekit";
import { mediaQueryMobile } from "@config/environment";
import { basic } from "@design/tokens";
import { StyledContainerText } from "./styles";
import { ITitle } from "@ptypes/ITitle";

const Title = (props: ITitle) => {
  const {
    title,
    sizeTitle = "medium",
    description,
    icon,
    navigatePage,
    onClick,
  } = props;

  const onGoBack = () => {
    if (onClick) {
      onClick();
    } else {
      if (navigatePage) {
        navigate(navigatePage);
      } else {
        navigate(-1);
      }
    }
  };
  const smallScreen = useMediaQuery(mediaQueryMobile);

  const navigate = useNavigate();

  return (
    <>
      <Stack gap={basic.spacing.s16} direction="column">
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
              onClick={onGoBack}
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

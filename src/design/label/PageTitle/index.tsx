import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  useMediaQuery,
  Text,
  Icon,
  ITextSize,
} from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { mediaQueryMobile } from "@config/environment";

import { StyledContainerText } from "../Title/styles";
import { EComponentAppearance } from "@enum/appearances";

interface IPageTitle {
  title: string;
  icon?: React.ReactNode;
  description?: string;
  navigatePage?: string;
  sizeTitle?: ITextSize;
  onClick?: () => void;
}

const PageTitle = ({
  title,
  icon,
  sizeTitle = "medium",
  description,
  navigatePage,
  onClick,
}: IPageTitle) => {
  const smallScreen = useMediaQuery(mediaQueryMobile);

  const navigate = useNavigate();

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

  return (
    <>
      <Stack gap={basic.spacing.s100} direction="column">
        <Stack gap={basic.spacing.s100} alignItems="center">
          {icon ? (
            <Icon
              appearance={EComponentAppearance.DARK}
              cursorHover={true}
              icon={icon}
              spacing="narrow"
              size="20px"
            />
          ) : (
            <Icon
              appearance={EComponentAppearance.DARK}
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

export { PageTitle };
export type { IPageTitle };

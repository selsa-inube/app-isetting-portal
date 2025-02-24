import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Stack, useMediaQuery, Text, Icon } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { enviroment } from "@config/environment";

interface IPageTitle {
  title: string;
  icon?: React.ReactNode;
  description: string;
  navigatePage?: string;
}

const PageTitle = ({ title, icon, description, navigatePage }: IPageTitle) => {
  const smallScreen = useMediaQuery(enviroment.IS_MOBILE_580);
  const navigate = useNavigate();

  return (
    <>
      <Stack gap={basic.spacing.s8} direction="column">
        <Stack gap={basic.spacing.s8} alignItems="center">
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
          <Text as="h1" type="title" size={smallScreen ? "medium" : "large"}>
            {title}
          </Text>
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

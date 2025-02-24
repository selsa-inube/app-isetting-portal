import { Stack, Breadcrumbs } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { PageTitle } from "@design/label/PageTitle";
import { StyledContentFramework } from "./styles";
import { IRoute } from "./types";

interface IContentFramework {
  appName: string;
  appDescription: string;
  appRoute: IRoute[];
  children: React.ReactNode;
}

const ContentFramework = (props: IContentFramework) => {
  const { appName, appDescription, appRoute, children } = props;

  return (
    <StyledContentFramework>
      <Breadcrumbs crumbs={appRoute} />
      <Stack
        margin={`${basic.spacing.s24} ${basic.spacing.s0} ${basic.spacing.s48} ${basic.spacing.s0}`}
      >
        <PageTitle
          title={appName}
          description={appDescription}
          navigatePage="/"
        />
      </Stack>
      {children}
    </StyledContentFramework>
  );
};

export { ContentFramework };
export type { IContentFramework };

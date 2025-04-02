import { IActionItemBlock } from "@design/cards/actionItemBlock";
import { ContentFramework } from "@design/layout/contentFramework";
import { IRoute } from "@ptypes/layout/contentFramework/IRoute";
import { ContentFrameworkGrid } from "@design/layout/optionGrid";

interface IRulesOptions {
  appName: string;
  appDescription: string;
  appOptions: IActionItemBlock[];
  appRoute: IRoute[];
}

const RulesOptionsUI = ({
  appName,
  appDescription,
  appOptions,
  appRoute,
}: IRulesOptions) => (
  <ContentFramework
    appName={appName}
    appDescription={appDescription}
    appRoute={appRoute}
  >
    <ContentFrameworkGrid appOptions={appOptions} />
  </ContentFramework>
);

export { RulesOptionsUI };

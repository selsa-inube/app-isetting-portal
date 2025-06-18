import { IActionItemBlock } from "@design/cards/actionItemBlock";
import { IRoute } from "@ptypes/layout/contentFramework/IRoute";

interface IMissionOptionsUI {
  appName: string;
  appDescription: string;
  appOptions: IActionItemBlock[];
  appRoute: IRoute[];
}

export type { IMissionOptionsUI };

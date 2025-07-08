import { IStack } from "@inubekit/inubekit";
import { IAppearenceBorderStack } from "../IAppearenceBorderStack";
interface IBorderStack extends IStack {
  background?: IAppearenceBorderStack;
  border?: IAppearenceBorderStack;
  borderRadius?: string;
  boxSizing?: string;
  boxShadow?: string;
  overflowY?: string;
}

export type { IBorderStack };
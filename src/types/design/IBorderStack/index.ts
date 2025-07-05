import { IStack } from "@inubekit/inubekit";
import { IBackground } from "../IBackground";
import { IBorder } from "../IBorder";

interface IBorderStack extends IStack {
  background?: IBackground;
  border?: IBorder;
  borderRadius?: string;
  boxSizing?: string;
  boxShadow?: string;
  overflowY?: string;
}

export type { IBorderStack };
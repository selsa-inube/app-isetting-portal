import { IStack } from "@inubekit/inubekit";

interface IBorderStack extends IStack {
  background?: string;
  border?: string;
  borderRadius?: string;
  boxSizing?: string;
  boxShadow?: string;
  overflowY?: string;
}

export type { IBorderStack };
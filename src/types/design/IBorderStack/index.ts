import { IStack } from "@inubekit/inubekit";

interface IBorderStack extends IStack {
  background?: string;
  border?: string;
  borderRadius?: string;
  boxSizing?: string;
  boxShadow?: string;
  overflowY?: string;
  minHeight?: string;
  maxHeight?: string;
}

export type { IBorderStack };
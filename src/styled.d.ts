import "styled-components";
import { Theme } from "@ptypes/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

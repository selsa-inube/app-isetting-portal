import { IStackAlignContent } from "@ptypes/modals/borderStack/IStackAlignContent";
import { IStackAlignItem } from "@ptypes/modals/borderStack/IStackAlignItem";
import { IStackJustifyContent } from "@ptypes/modals/borderStack/IStackJustifyContent";
import { IStackDirectionAlignment } from "@ptypes/modals/borderStack/StackDirectionAlignment";
import { IStackStructure } from "@ptypes/modals/borderStack/IStackStructure";
import { IStackWrapControl } from "@ptypes/modals/borderStack/IStackWrapControl";
import { StyledFlex } from "./styles";

interface IStack {
  children?: React.ReactNode;
  as?: IStackStructure;
  wrap?: IStackWrapControl;
  direction?: IStackDirectionAlignment;
  justifyContent?: IStackJustifyContent;
  alignItems?: IStackAlignItem;
  alignContent?: IStackAlignContent;
  background?: string;
  border?: string;
  borderRadius?: string;
  height?: string;
  width?: string;
  gap?: string;
  margin?: string;
  padding?: string;
  boxSizing?: string;
  boxShadow?: string;
  overflowY?: string;
}
const BorderStack = (props: IStack) => {
  const {
    children,
    as = "div",
    wrap,
    direction,
    justifyContent,
    alignItems,
    alignContent,
    height,
    width,
    gap,
    background,
    borderRadius,
    border,
    margin = "0px",
    padding = "0px",
    boxSizing,
    boxShadow,
    overflowY,
  } = props;

  return (
    <StyledFlex
      as={as}
      $direction={direction}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $alignContent={alignContent}
      $height={height}
      $width={width}
      $wrap={wrap}
      $gap={gap}
      $background={background}
      $border={border}
      $margin={margin}
      $padding={padding}
      $borderRadius={borderRadius}
      $boxSizing={boxSizing}
      $boxShadow={boxShadow}
      $overflowY={overflowY}
    >
      {children}
    </StyledFlex>
  );
};
export { BorderStack };
export type { IStack };

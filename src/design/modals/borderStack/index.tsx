import { IBorderStack } from "@ptypes/design/IBorderStack";
import { StyledBorderFlex } from "./styles";

const BorderStack = (props: IBorderStack) => {
  const {
    children,
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
    <StyledBorderFlex
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
    </StyledBorderFlex>
  );
};
export { BorderStack };

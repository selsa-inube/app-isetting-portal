import { IBorderStack } from "@ptypes/design/IBorderStack";
import { IBackground } from "@ptypes/design/IBackground";
import { IBorder } from "@ptypes/design/IBorder";
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
    background = "n0",
    borderRadius,
    border = "n0",
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
      $background={background as IBackground}
      $border={border as IBorder}
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

import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

const StyledMenu = styled.div`
  position: absolute;
  right: ${basic.spacing.s0};
  top: ${basic.spacing.s20};
`;

const StyledMenuContainer = styled.div`
  position: absolute;
  right: 0;
  width: fit-content;
  max-width: 200px;
  min-width: 160px;
  box-shadow: ${basic.spacing.s0} 1px ${basic.spacing.s2}
    ${({ theme }) =>
      theme?.color?.stroke?.light?.disabled || inube.palette.neutral.N30};
  ${basic.spacing.s0} ${basic.spacing.s2} ${basic.spacing.s6}
      ${basic.spacing.s2}
      ${({ theme }) =>
    theme?.color?.stroke?.divider?.regular || inube.palette.neutral.N40};
  background-color: ${({ theme }) =>
    theme?.color?.stroke?.light?.clear || inube.palette.neutral.N70};
  border-radius: ${basic.spacing.s4};
  background-color: #fff;
  padding: ${basic.spacing.s4} ${basic.spacing.s2};
`;

export { StyledMenu, StyledMenuContainer };

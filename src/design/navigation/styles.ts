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
  box-shadow:
    0px 2px 6px
      ${({ theme }) =>
        theme?.palette?.neutral?.N90 || inube.palette.neutral.N90},
    0px 2px 6px
      ${({ theme }) =>
        theme?.palette?.neutral?.N40 || inube.palette.neutral.N40};
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
  border-radius: 4px;
  padding: 8px 6px;
`;

export { StyledMenu, StyledMenuContainer };

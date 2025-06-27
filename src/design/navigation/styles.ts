import styled from "styled-components";
import { basic } from "@design/tokens";

const StyledMenu = styled.div`
  position: absolute;
  right: ${basic.spacing.s0};
  top: ${basic.spacing.s20};
`;

const StyledMenuContainer = styled.div`
  position: relative;
  
`;

export { StyledMenu, StyledMenuContainer };

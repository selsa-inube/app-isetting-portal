import { basic } from "@design/tokens";
import styled from "styled-components";

const StyledSelectWrapper = styled.div`
  & div {
    padding: ${basic.spacing.s100}, ${basic.spacing.s200};
  }
`;

export { StyledSelectWrapper };

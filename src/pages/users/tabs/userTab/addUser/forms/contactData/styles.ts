import styled from "styled-components";
import { basic } from "@design/tokens";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${basic.spacing.s300};
  min-height: 55vh;
`;

export { StyledContainer };

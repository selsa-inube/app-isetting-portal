import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

const StyledOption = styled.div`
  color: ${({ theme }) =>
    theme?.palette?.neutral?.N30 || inube.palette.neutral.N30};
  padding: ${`${basic.spacing.s6} ${basic.spacing.s12}`};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) =>
      theme?.palette?.neutral?.N30 || inube.palette.neutral.N30};
  }
`;

export { StyledOption };

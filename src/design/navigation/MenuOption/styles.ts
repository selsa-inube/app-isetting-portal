import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

const StyledOption = styled.button`
  color: ${({ theme }) =>
    theme?.color?.surface?.gray?.regular || inube.palette.neutral.N30};
  padding: ${({ theme }) =>
    `${theme?.spacing?.s075} ${theme?.spacing?.s150}` ||
    `${basic.spacing.s6} ${basic.spacing.s12}`};
  border: none;
  background-color: ${({ theme }) =>
    theme?.color?.stroke?.light?.clear || inube.palette.neutral.N70};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) =>
      theme?.color?.stroke?.gray?.regular || inube.palette.neutral.N30};
  }
`;

export { StyledOption };

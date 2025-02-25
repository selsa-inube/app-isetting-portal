import { Link } from "react-router-dom";
import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) =>
    theme?.color?.surface?.gray?.regular || inube.palette.neutral.N30};
  display: inline-block;
  padding: ${basic.spacing.s6} ${basic.spacing.s12};
  border: none;
  background-color: ${({ theme }) =>
    theme?.color?.stroke?.light?.clear || inube.palette.neutral.N70};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) =>
      theme?.color?.surface?.gray?.regular || inube.palette.neutral.N30};
  }
`;

export { StyledLink };

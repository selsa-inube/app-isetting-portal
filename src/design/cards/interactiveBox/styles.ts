import styled from "styled-components";
import { Link } from "react-router-dom";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

interface IStyledInteractiveBox {
  $isMobile: boolean;
  $smallScreen?: boolean;
}
const StyledInteractiveBox = styled(Link)<IStyledInteractiveBox>`
  box-sizing: border-box;
  padding: ${(props) =>
    props.$smallScreen ? basic.spacing.s200 : basic.spacing.s300};
  height: 170px;
  width: ${(props) => (props.$smallScreen ? "100%" : "250px")};
  min-height: ${(props) => (props.$smallScreen ? "auto" : "100px")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ $smallScreen }) =>
    $smallScreen ? basic.spacing.s100 : basic.spacing.s0};
  border-radius: ${basic.spacing.s050};
  text-decoration: none;
  color: ${({ theme }) =>
    theme?.color?.stroke.dark.regular || inube.palette.neutral.N900};
  border: 1px solid
    ${({ theme }) =>
      theme?.color?.stroke.dark.regular || inube.palette.neutral.N30};
  box-shadow: 3px 3px 5px 1px
    ${({ theme }) =>
      theme?.color?.surface?.gray?.regular || inube.palette.neutral.N30};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) =>
      theme?.color?.surface?.gray?.regular || inube.palette.neutral.N30};
    background-color: ${({ theme }) =>
      theme?.color?.surface?.gray?.regular || inube.palette.neutral.N30};
    box-shadow: none;
  }
  div {
    gap: ${({ $smallScreen }) =>
      $smallScreen ? basic.spacing.s050 : basic.spacing.s0};
  }
`;

export { StyledInteractiveBox };

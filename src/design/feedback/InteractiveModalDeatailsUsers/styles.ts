import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

interface IStyledRespondInvitation {
  $smallScreen: boolean;
  type?: string;
}

const StyledModal = styled.div<IStyledRespondInvitation>`
  background-color: ${({ theme }) =>
    theme?.color?.stroke?.light?.regular || inube.palette.neutral.N10};
  min-width: ${({ $smallScreen }) => ($smallScreen ? "100%" : "450px")};
  min-height: ${({ $smallScreen }) => ($smallScreen ? "100vh" : "auto")};
  height: auto;
  border-radius: ${({ $smallScreen }) =>
    $smallScreen ? basic.spacing.s0 : basic.spacing.s8};

  & > div {
    padding: ${({ $smallScreen }) =>
      $smallScreen ? basic.spacing.s16 : basic.spacing.s24};
    ${({ type }) =>
      type !== "fields" &&
      `
      & > div > div > div > label  {
        margin: ${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s20} ${basic.spacing.s0};
      }
    `}
  }
`;

const StyledDivider = styled.div<IStyledRespondInvitation>`
  border-radius: ${basic.spacing.s0};
  border: 1px dashed
    ${({ theme }) =>
      theme?.color?.stroke?.divider?.regular || inube.palette.neutral.N40};
`;

export { StyledModal, StyledDivider };

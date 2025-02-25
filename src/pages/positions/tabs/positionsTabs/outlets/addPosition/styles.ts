import styled from "styled-components";
import { inube } from "@inubekit/inubekit";

interface IStyledContainerAssisted {
  $cursorDisabled: boolean;
}

const StyledContainerAssisted = styled.div<IStyledContainerAssisted>`
  & div > div:nth-child(3) button {
    cursor: ${({ $cursorDisabled }) =>
      $cursorDisabled ? "not-allowed" : "pointer"};
  }
  & div > div:nth-child(3) button div p,
  & div > div:nth-child(3) button div figure {
    color: ${({ $cursorDisabled }) =>
      $cursorDisabled ? inube.palette.neutral.N70 : inube.palette.blue.B400};
  }
`;

export { StyledContainerAssisted };

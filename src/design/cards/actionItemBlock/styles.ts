import styled from "styled-components";
import { Link } from "react-router-dom";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { mediaQueryTabletMain } from "@config/environment";

const StyledActionItemBlock = styled(Link)`
  box-sizing: border-box;
  padding: ${basic.spacing.s16};
  width: 191px;
  height: 140px;
  text-decoration: none;
  color: ${({ theme }) =>
    theme?.palette?.neutral?.N900 || inube.palette.neutral.N900};
  :hover {
    & svg {
      color: ${({ theme }) =>
        theme?.palette?.blue?.B400 || inube.palette.blue.B400};
    }
    & picture {
      background-color: ${({ theme }) =>
        theme?.palette?.neutral?.N30 || inube.palette.neutral.N30};
    }
  }

  @media (${mediaQueryTabletMain}) {
    display: flex;
    width: 100%;
    height: 72px;
    padding: ${basic.spacing.s16} ${basic.spacing.s8};
    & div:first-child {
      flex-direction: row;
      gap: ${basic.spacing.s8};
    }
    & p {
      text-align: left;
    }
  }
`;

export { StyledActionItemBlock };

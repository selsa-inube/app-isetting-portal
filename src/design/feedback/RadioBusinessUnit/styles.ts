import styled from "styled-components";
import { inube } from "@inubekit/inubekit";

interface IStyledContainer {
  $smallScreen?: boolean;
}
interface IStyledBusinessUnits {
  $isMobile: boolean;
}
const StyledRadioBusinessUnit = styled.label<IStyledBusinessUnits>`
  & div {
    box-sizing: border-box;
    max-height: 58px;
    box-shadow: 1px 2px 2px 1px ${inube.palette.neutral.N30};
    border: 1px solid ${inube.palette.neutral.N30};
    width: ${({ $isMobile }) => ($isMobile ? "320px" : "auto")};
    padding: ${({ $isMobile }) => ($isMobile ? "20px" : "auto")};
    border-radius: ${({ $isMobile }) => ($isMobile ? "8px" : "auto")};
    cursor: pointer;
  }
`;

const StyledRadio = styled.input`
  width: 16px;
  height: 16px;
  &:checked ~ img {
    filter: grayscale(0%);
  }
`;

const StyledImage = styled.img<IStyledContainer>`
  width: 100px;
  height: auto;
  transition: filter 500ms ease-out;
  filter: grayscale(100%);
  display: ${(props) => (props.$smallScreen ? "none" : "block")};
`;

export { StyledRadioBusinessUnit, StyledImage, StyledRadio };

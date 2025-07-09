import styled from "styled-components";
interface IStyledCollapseIcon {
  $collapse: boolean;
  $isTablet: boolean;
}

const StyledAppPage = styled.div`
  display: inherit;
  box-sizing: border-box;
`;

const StyledContainer = styled.div`
  display: inherit;
  overflow: hidden;

  & > p {
    white-space: nowrap;
  }
`;

interface IStyledMain {
  $isMobile: boolean;
}

const StyledMain = styled.main<IStyledMain>`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 54px);
  overflow-y: auto;

  & > div {
    height: 100%;
    max-width: 1064px;
  }
`;

const StyledHeaderContainer = styled.div`
  position: relative;
`;

const StyledCollapseIcon = styled.div<IStyledCollapseIcon>`
  display: flex;
  transition: all 500ms ease;
  position: absolute;
  top: 13.5px;
  transform: ${({ $collapse }) =>
    $collapse ? "rotate(-90deg)" : "rotate(90deg)"};
  left: ${({ $isTablet }) => ($isTablet ? "150px" : "142px")};
`;

export {
  StyledAppPage,
  StyledContainer,
  StyledHeaderContainer,
  StyledMain,
  StyledCollapseIcon,
};

import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
`;

const StyledButtonWrapper = styled.div`
  & > a > button > div {
    gap: 8px;
  }
`;

export { StyledContainer, StyledButtonWrapper };

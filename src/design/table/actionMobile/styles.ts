import styled from "styled-components";

const StyledContainerIcon = styled.div`
  transform: rotate(90deg);
`;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  width: 100%;
  justify-content: center;
`;

const StyledActionModal = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 22px;
`;

export { StyledActionModal, StyledContainerIcon, StyledContainer };

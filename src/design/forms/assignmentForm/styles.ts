import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
  margin-bottom: 50px;
`;

const StyledOptionsContainer = styled.div`
  position: relative;
  height: "24px";
  text-align: right;
`;

const StyledToggleContainer = styled.div`
  & > div {
    height: 42vh;
    overflow-y: scroll;
  }
`;

export { StyledForm, StyledOptionsContainer, StyledToggleContainer };

import styled from "styled-components";

interface IStyledComponent {
  $smallScreen: boolean;
}

const StyledForm = styled.form`
  width: 100%;
  margin-bottom: 50px;
`;

const StyledEntriesContainer = styled.div`
  & > div {
    max-height: 300px;
    overflow-y: auto;
  }
`;

const StyledOptionsContainer = styled.div`
  position: relative;
  height: "24px";
  text-align: right;
`;

const StyledToggleContainer = styled.div<IStyledComponent>`
  margin: ${({ $smallScreen }) => ($smallScreen ? "10px" : "0px")};
  & > div {
    justify-content: center;
  }
`;

export {
  StyledEntriesContainer,
  StyledForm,
  StyledOptionsContainer,
  StyledToggleContainer,
};

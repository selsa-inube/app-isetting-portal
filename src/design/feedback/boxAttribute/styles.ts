import styled from "styled-components";

interface IStyledBoxAttribute {
  $smallScreen?: boolean;
}

const StyledBoxAttribute = styled.div<IStyledBoxAttribute>`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  word-wrap: break-word;
  white-space: normal;
  min-width: 0;
`;

export { StyledBoxAttribute };

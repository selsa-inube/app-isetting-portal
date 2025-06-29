import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

const StyledConatinerAttribute = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  width: 100%;
  min-height: 52px;
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N10 || inube.palette.neutral.N10};
`;

const StyledAttribute = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: ${basic.spacing.s050};
  padding: ${basic.spacing.s075} ${basic.spacing.s200};
  box-sizing: border-box;
`;

const StyldTagContainer = styled.div`
  & > div {
    font-size: ${basic.spacing.s050};
  }
`;

export { StyledConatinerAttribute, StyledAttribute, StyldTagContainer };

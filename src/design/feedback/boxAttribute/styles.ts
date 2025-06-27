import { basic } from "@design/tokens";
import { inube } from "@inubekit/inubekit";
import styled from "styled-components";

interface IStyledBoxAttribute {
  $smallScreen?: boolean;
}

const StyledBoxAttribute = styled.div<IStyledBoxAttribute>`
  display: flex;
  flex-direction: column;
  gap: ${basic.spacing.s100};
  overflow: hidden;
  margin: ${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s0};
  padding: ${basic.spacing.s8};
  border-radius: ${basic.spacing.s8};
  word-wrap: break-word;
  white-space: normal;
  min-width: 0;
  background-color: ${inube.palette.neutral.N10};
`;

export { StyledBoxAttribute };

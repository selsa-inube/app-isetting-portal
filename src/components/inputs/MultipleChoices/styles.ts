import styled from "styled-components";
import { basic } from "@design/tokens";

export const StyledContainer = styled.div`
    padding: ${basic.spacing.s0};
`;

export const StyledSelection = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${basic.spacing.s8};
    margin-bottom: ${basic.spacing.s10};
    margin-top: ${basic.spacing.s10};
    padding: ${basic.spacing.s10} ${basic.spacing.s12};
    border: 1px solid #e0e0e0;
    border-radius: ${basic.spacing.s10};
`;

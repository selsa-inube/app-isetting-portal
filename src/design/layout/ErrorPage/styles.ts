import styled from "styled-components";
import { basic } from "@design/tokens";
import { inube } from "@inubekit/inubekit";

interface IStyledCompanyLogo {
  $smallScreen?: boolean;
  $isMobile?: boolean;
}

const StyledCompanyLogo = styled.img<IStyledCompanyLogo>`
  max-width: ${({ $smallScreen }) => ($smallScreen ? "300px" : "250px")};
`;
const StyledError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-radius: 8px;
  background-color: ${inube.palette.neutral.N30};
  width: 130px;
`;

const StyledErrorImage = styled.img`
  justify-self: center;
  max-width: 100%;
`;

const StyledContainerError = styled.div<IStyledCompanyLogo>`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "none")};
  align-items: center;
  gap: 30px;
  width: 90%;
  border-radius: ${basic.spacing.s100};
  border: 1px solid
    ${({ theme }) =>
      theme.color?.stroke?.gray?.regular || inube.palette.neutral.N40};
  padding: ${basic.spacing.s300};
  margin: 0;

  & > div:nth-child(1) {
    width: ${({ $isMobile }) => ($isMobile ? "100%" : "50%")};
  }

  & > div:nth-child(3) {
    width: ${({ $isMobile }) => ($isMobile ? "100%" : "50%")};
  }
`;
const StyledOrderedList = styled.ul`
  padding-left: 20px;
  margin-top: 8px;
`;
const StyledList = styled.li`
  font-size: 16px;
  margin-bottom: 4px;
  color: ${inube.palette.neutral.N400};
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledDivider = styled.div<IStyledCompanyLogo>`
  color: ${inube.palette.neutral.N60};
  border: 1px dashed;
  ${({ theme }) =>
    theme.color?.stroke?.gray?.regular || inube.palette.neutral.N40};
  width: ${({ $isMobile }) => ($isMobile ? "100%" : "15%")};
  transform: ${({ $isMobile }) => ($isMobile ? "none" : "rotate(90deg)")};
`;

export {
  StyledCompanyLogo,
  StyledErrorImage,
  StyledError,
  StyledContainerError,
  StyledOrderedList,
  StyledList,
  StyledButton,
  StyledDivider,
};

import { useState } from "react";
import { MdClear } from "react-icons/md";
import { Stack, Grid, Text, useMediaQuery, Icon } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { mediaQueryTabletMain } from "@config/environment";
import { StyledSubjectSearchCard, StyledSubjectSearchCardText } from "./styles";

interface ISubjectSearchCard {
  subjectSearchData: { [key: string]: string | number };
  closeIcon?: boolean;
  closeSearchCard?: () => void;
}

const SubjectSearchCard = (props: ISubjectSearchCard) => {
  const { subjectSearchData, closeIcon } = props;
  const [isActive, setIsActive] = useState(false);
  const smallScreen = useMediaQuery(mediaQueryTabletMain);

  const handleToggleModal = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <StyledSubjectSearchCard $smallScreen={smallScreen} $isActive={isActive}>
        <Grid templateColumns="1fr auto">
          <StyledSubjectSearchCardText onClick={handleToggleModal}>
            <Stack direction="column">
              <Text type="label" size="medium" textAlign="start">
                {Object.values(subjectSearchData)[0]}
              </Text>
              <Text size="medium" textAlign="start">
                {Object.values(subjectSearchData)[1]}
              </Text>
            </Stack>
          </StyledSubjectSearchCardText>
          {closeIcon && (
            <Stack
              justifyContent="end"
              padding={`${basic.spacing.s8} ${basic.spacing.s16} ${basic.spacing.s0} ${basic.spacing.s0}`}
            >
              <Icon icon={<MdClear />} appearance="dark" size="16px" />
            </Stack>
          )}
        </Grid>
      </StyledSubjectSearchCard>
    </>
  );
};

export { SubjectSearchCard };
export type { ISubjectSearchCard };

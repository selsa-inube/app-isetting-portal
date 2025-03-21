import { Grid, Stack, Tag } from "@inubekit/inubekit";
import { BoxAttribute } from "@design/feedback/boxAttribute";
import { basic } from "@design/tokens";
import {
  IGeneralInformationEntry,
  IOptionInitialiceEntry,
} from "@pages/positions/tabs/positionsTabs/outlets/addPosition/types";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { StyldTagContainer } from "./styles";
import { labels } from "@config/verificationTitles";

const renderPersonalInfoVerification = (
  values: IGeneralInformationEntry,
  isMobile: boolean
) => (
  <>
    <Grid
      templateColumns={isMobile ? "1fr" : "1fr "}
      autoRows="1fr"
      width="100%"
    >
      <BoxAttribute label={labels.namePosition} value={values.namePosition} />
    </Grid>
    <Stack width="100%" direction="column" gap={basic.spacing.s100}>
      <BoxAttribute
        label={labels.descriptionPosition}
        value={values.descriptionPosition}
      />
    </Stack>
  </>
);

const renderStepTwoVerification = (
  values: IOptionInitialiceEntry[],
  isMobile: boolean
) => {
  const activeValues = values.filter((value) => value.isActive);

  return (
    <Grid
      templateColumns={isMobile ? "1fr" : "1fr "}
      autoRows="1fr"
      gap={basic.spacing.s100}
      width="100%"
    >
      {activeValues.length > 0 ? (
        activeValues.map((value) => (
          <Stack
            key={value.id}
            width="100%"
            direction="column"
            gap={basic.spacing.s100}
          >
            <BoxAttribute label={labels.creationDate} value={value.value} />
          </Stack>
        ))
      ) : (
        <StyldTagContainer>
          <Tag
            appearance={ComponentAppearance.DANGER}
            label={labels.modificationDate}
          />
        </StyldTagContainer>
      )}
    </Grid>
  );
};

export { renderPersonalInfoVerification, renderStepTwoVerification };

import { Grid, Stack, Tag } from "@inubekit/inubekit";
import { BoxAttribute } from "@design/feedback/boxAttribute";
import { basic } from "@design/tokens";
import { labels } from "@config/verificationTitles";

import { ComponentAppearance } from "@ptypes/aparences.types";
import { StyldTagContainer } from "@design/forms/verificationForm/verificationBoxes/styles";
import { IRenderPersonal } from "@ptypes/verification/IRenderPersonal";

const renderStepTwoVerification = (props: IRenderPersonal) => {
  const { values, isMobile } = props;
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

export { renderStepTwoVerification };

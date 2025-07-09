import { Grid } from "@inubekit/inubekit";

import { BoxAttribute } from "@design/feedback/boxAttribute";
import { basic } from "@design/tokens";
import { verificationLabels } from "@config/missions/missionTab/assisted/verification";
import { IRenderGeneralInfoVerification } from "@ptypes/missions/assisted/IRenderGeneralinfoVerification";

const RenderGeneralinfoVerification = (
  props: IRenderGeneralInfoVerification
) => {
  const { values, isMobile } = props;
  return (
    <>
      <Grid
        width="100%"
        templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"}
        templateRows={isMobile ? "repeat(2, 1fr)" : "1fr"}
        gap={basic.spacing.s200}
      >
        <BoxAttribute
          direction="column"
          label={verificationLabels.nameMission}
          value={values.nameMission}
        />
        <BoxAttribute
          direction="column"
          label={verificationLabels.descriptionMission}
          value={values.descriptionMission}
        />
      </Grid>
    </>
  );
};

export { RenderGeneralinfoVerification };

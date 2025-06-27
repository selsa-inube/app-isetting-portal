import { Grid, Stack } from "@inubekit/inubekit";
import { BoxAttribute } from "@design/feedback/boxAttribute";
import { basic } from "@design/tokens";
import { labels } from "@config/verificationTitles";
import { IRenderPersonalTwo } from "@ptypes/verification/IRenderPersonalTwo";

const renderPersonalInfoVerification = (props: IRenderPersonalTwo) => {
  const { values, isMobile } = props;
  return (
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
};

export { renderPersonalInfoVerification };

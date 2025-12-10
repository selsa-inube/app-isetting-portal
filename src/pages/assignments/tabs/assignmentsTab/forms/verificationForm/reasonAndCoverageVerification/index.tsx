import { Grid } from "@inubekit/inubekit";
import { BoxAttribute } from "@design/feedback/boxAttribute";
import { basic } from "@design/tokens";
import { formatDateTable } from "@utils/formatDateTable";
import { verificationLabels } from "@config/assignments/assisted/verification";
import { IRenderReasonAndCoverageVerification } from "@ptypes/assignments/assisted/IRenderReasonAndCoverageVerification";

const RenderReasonAndCoverageVerification = (
  props: IRenderReasonAndCoverageVerification
) => {
  const { values, isMobile } = props;

  return (
    <Grid
      width="100%"
      templateColumns="1fr"
      templateRows="1fr auto"
      gap={basic.spacing.s100}
    >
      <Grid
        width="100%"
        templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"}
        templateRows={isMobile ?"repeat(2, 1fr)" : "1fr"  }
        gap={basic.spacing.s100}
      >
        <BoxAttribute
          direction="column"
          label={verificationLabels.from}
          value={formatDateTable(new Date(values.dateFrom))}
        />
        <BoxAttribute
          direction="column"
          label={verificationLabels.until}
          value={formatDateTable(new Date(values.dateTo))}
        />
      </Grid>

      <BoxAttribute
        direction="column"
        label={verificationLabels.reason}
        value={values.descriptionReason}
      />
    </Grid>
  );
};

export { RenderReasonAndCoverageVerification };

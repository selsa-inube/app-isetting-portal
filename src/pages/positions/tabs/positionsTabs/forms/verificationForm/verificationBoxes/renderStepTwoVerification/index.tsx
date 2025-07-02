import { Grid, Stack, Tag } from "@inubekit/inubekit";
import { BoxAttribute } from "@design/feedback/boxAttribute";
import { basic } from "@design/tokens";
import { labels } from "@config/verificationTitles";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IRenderPersonal } from "@ptypes/verification/IRenderPersonal";
import { IEntry } from "@ptypes/design/table/IEntry";
import { columnsAttribute } from "@utils/columnsAttribute";
import { rowsAttribute } from "@utils/rowsAttribute";

const RenderStepTwoVerification = (props: IRenderPersonal) => {
  const { values, isMobile } = props;

  const activeValues = values.filter((value) => value.isActive);
  const hasActiveValues = activeValues.length > 0;

  return (
    <Stack direction="column" width="100%" gap={basic.spacing.s200}>
      {hasActiveValues ? (
        <Grid
          templateColumns={columnsAttribute(activeValues as IEntry[], isMobile)}
          templateRows={rowsAttribute(activeValues as IEntry[], isMobile)}
          gap={basic.spacing.s100}
          width="100%"
        >
          {activeValues.map((value) => (
            <Stack
              key={value.id}
              width="100%"
              direction="column"
              gap={basic.spacing.s100}
            >
              <BoxAttribute label={labels.creationDate} value={value.value} />
            </Stack>
          ))}
        </Grid>
      ) : (
        <Stack padding={basic.spacing.s100}>
          <Tag
            appearance={ComponentAppearance.DANGER}
            label={labels.modificationDate}
          />
        </Stack>
      )}
    </Stack>
  );
};

export { RenderStepTwoVerification };

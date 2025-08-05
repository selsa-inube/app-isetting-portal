import { Grid, Stack } from "@inubekit/inubekit";

import { BoxAttribute } from "@design/feedback/boxAttribute";
import { basic } from "@design/tokens";
import { columnsAttribute } from "@utils/columnsAttribute";
import { rowsAttribute } from "@utils/rowsAttribute";
import { hasValues } from "@utils/hasValues";
import { IRenderRolesByUnitVerification } from "@ptypes/assignments/assisted/IRenderRolesByUnitVerification";
import { IEntry } from "@ptypes/design/table/IEntry";
import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";

const RenderRolesByUnitVerification = (
  props: IRenderRolesByUnitVerification
) => {
  const { values, isMobile } = props;

  const valuesString = (values: IFormEntry[]) =>
    values
      .filter((val) => val.value && val.isActive)
      .map((val) => val.value)
      .join(", ");

  return (
    <Stack width="100%" direction="column">
      {hasValues(values) && (
        <Grid
          width="100%"
          templateColumns={columnsAttribute(values as IEntry[], isMobile)}
          templateRows={rowsAttribute(values as IEntry[], isMobile)}
          gap={basic.spacing.s100}
        >
          {values.map((item) => (
            <>
              <BoxAttribute
                key={item.id}
                direction="column"
                label={`${item.name}`}
                value={valuesString(item.roles ?? [])}
              />
            </>
          ))}
        </Grid>
      )}
    </Stack>
  );
};

export { RenderRolesByUnitVerification };

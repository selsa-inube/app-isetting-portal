import { Stack } from "@inubekit/inubekit";
import { BoxAttribute } from "@design/feedback/boxAttribute";
import { basic } from "@design/tokens";
import { verificationLabels } from "@config/assignments/assisted/verification";
import { IRenderBusinessUnitVerification } from "@ptypes/assignments/assisted/IRenderBusinessUnitVerification";

const RenderBusinessUnitVerification = (
  props: IRenderBusinessUnitVerification
) => {
  const { values } = props;

  const valuesString = values
    .flatMap((val) => val.name)
    .join(", ");
    
  return (
    <Stack width="100%" direction="column" gap={basic.spacing.s100}>
      <BoxAttribute
        direction="column"
        label={verificationLabels.businessUnit}
        value={valuesString}
      />
    </Stack>
  );
};

export { RenderBusinessUnitVerification };

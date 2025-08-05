import { Stack } from "@inubekit/inubekit";
import { BoxAttribute } from "@design/feedback/boxAttribute";
import { basic } from "@design/tokens";
import { verificationLabels } from "@config/assignments/assisted/verification";
import { IRenderOfficialInChargeVerification } from "@ptypes/assignments/assisted/IRenderOfficialInChargeVerification";

const RenderOfficialInChargeVerification = (
  props: IRenderOfficialInChargeVerification
) => {
  const { values } = props;
  
  return (
     <Stack width="100%" direction="column" gap={basic.spacing.s100}>
      <BoxAttribute
        direction="column"
        label={verificationLabels.officialInCharge}
        value={values.official}
      />
    </Stack>
  );
};

export { RenderOfficialInChargeVerification };

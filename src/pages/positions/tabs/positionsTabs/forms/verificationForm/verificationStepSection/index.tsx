import { MdOutlineArrowBack } from "react-icons/md";
import { Stack, Button, useMediaQuery } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { Accordion } from "@design/data/acordion";
import { labels } from "@config/verificationTitles";
import { IVerificationStepSection } from "@ptypes/verification/IVerificationStepSection";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { VerificationBoxes } from "../verificationBoxes";
import { enviroment } from "@config/environment";

const VerificationStepSection = (props: IVerificationStepSection) => {
  const { step, updatedData, onStepChange } = props;

  const isTablet = useMediaQuery(enviroment.IS_MOBILE_970);
  return (
    <Accordion title={step.name}>
      <Stack
        direction="column"
        width="100%"
        alignItems="flex-end"
        gap={isTablet ? basic.spacing.s150 : basic.spacing.s200}
      >
        <VerificationBoxes
          updatedData={updatedData}
          stepKey={Number(step.id)}
        />

        <Button
          iconBefore={<MdOutlineArrowBack />}
          onClick={() => onStepChange(step.number)}
          appearance={ComponentAppearance.DARK}
          variant="none"
        >
          {labels.renderStepButton}
        </Button>
      </Stack>
    </Accordion>
  );
};

export { VerificationStepSection };

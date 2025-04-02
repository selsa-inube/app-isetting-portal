import { MdOutlineArrowBack } from "react-icons/md";
import { Stack, useMediaQuery, Button } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { Accordion } from "@design/data/acordion";
import { IRequestSteps } from "@ptypes/feedback/requestProcess/IRequestSteps";
import { AddPositionsStepsConfig } from "@config/positions/assisted";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { VerificationBoxes } from "./verificationBoxes";
import { IFormAddPosition } from "@ptypes/forms/verificationForm/IFormAddPosition";

interface IVerificationForm {
  requestSteps: IRequestSteps[];
  showModal: boolean;
  showRequestProcessModal: boolean;
  updatedData: IFormAddPosition;
  handleStepChange: (stepId: number) => void;
  onFinishForm?: () => void;
  onPreviousStep?: () => void;
  onToggleModal?: () => void;
}

const VerificationForm = ({
  updatedData,
  handleStepChange,
}: IVerificationForm) => {
  const isTablet = useMediaQuery("(max-width: 1224px)");

  return (
    <Stack direction="column" gap={basic.spacing.s300}>
      {AddPositionsStepsConfig("")
        .filter((step) => step.name.toLowerCase() !== "verificación")
        .map((step) => (
          <Accordion title={step.name} key={`${step.id}-box`}>
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
                onClick={() => handleStepChange(step.number)}
                appearance={ComponentAppearance.DARK}
                variant="none"
              >
                Regresar a este paso
              </Button>
            </Stack>
          </Accordion>
        ))}
    </Stack>
  );
};

export { VerificationForm };

import { createPortal } from "react-dom";
import { Stack, Text, Blanket, Divider, Button } from "@inubekit/inubekit";

import { lastCompletedIndex } from "@utils/lastCompletedIndex";
import { requestProcessLabels } from "@config/requestProcessLabels";
import { percentage } from "@utils/percentage";
import { percTotalNumber } from "@config/percentageNumber";
import { StyledModal } from "./styles";
import { RequestProcessBar } from "./RequestProcessBar";
import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IRequestProcessModal } from "@ptypes/IRequestProcessModal";

const RequestProcessModal = (props: IRequestProcessModal) => {
  const {
    portalId,
    sizeIcon = "28px",
    requestSteps,
    isMobile,
    description,
    title,
    onClose,
  } = props;

  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly.",
    );
  }

  const stepCurrentIndex = lastCompletedIndex(requestSteps);
  const stepCurrent = stepCurrentIndex + 1;

  const percentageNumber = Number(percentage(requestSteps).split("%")[0]);

  const showButton = percentageNumber === percTotalNumber;

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" gap={basic.spacing.s200} width="100%">
          <Stack direction="column" gap={basic.spacing.s100}>
            <Text type="title" size="medium" weight="bold">
              {title}
            </Text>
            <Divider />
          </Stack>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Text
              size={isMobile ? "small" : "medium"}
              appearance={ComponentAppearance.GRAY}
            >
              {description}
            </Text>
          </Stack>

          <RequestProcessBar
            requestSteps={requestSteps}
            sizeIcon={sizeIcon}
            stepCurrent={stepCurrent}
            stepCurrentIndex={stepCurrentIndex}
            percentage={percentage(requestSteps)}
          />
        </Stack>
        {showButton && (
          <Stack justifyContent="end">
            <Button
              spacing="wide"
              appearance={ComponentAppearance.SUCCESS}
              onClick={onClose}
            >
              {requestProcessLabels.labelButton}
            </Button>
          </Stack>
        )}
      </StyledModal>
    </Blanket>,
    node,
  );
};

export { RequestProcessModal };
export type { IRequestProcessModal };

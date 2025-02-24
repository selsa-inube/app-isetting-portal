import { MdClear } from "react-icons/md";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { basic } from "@design/tokens";
import { Stack, Icon, IIconAppearance, Text, Button } from "@inubekit/inubekit";
import { StyledContainerButton, StyledText } from "./styles";
interface IRequestStatus {
  title: string;
  actionText: string;
  appearance: IIconAppearance;
  description: string;
  isLoading: boolean;
  onClick: () => void;
  onCloseModal: () => void;
}

const RequestStatus = (props: IRequestStatus) => {
  const {
    actionText,
    title,
    appearance,
    description,
    isLoading,
    onClick,
    onCloseModal,
  } = props;

  return (
    <Stack direction="column" gap={basic.spacing.s300}>
      <Stack alignItems="center" justifyContent="space-between">
        <Text type="body" size="medium" weight="bold" appearance="dark">
          {title}
        </Text>
        <StyledContainerButton>
          <Button
            spacing="compact"
            appearance={ComponentAppearance.DARK}
            variant="none"
            onClick={onCloseModal}
            iconAfter={
              <Icon appearance={ComponentAppearance.DARK} icon={<MdClear />} />
            }
          >
            Cerrar
          </Button>
        </StyledContainerButton>
      </Stack>
      <StyledText>
        <Text appearance={ComponentAppearance.GRAY} type="body" size="medium">
          {description}
        </Text>
      </StyledText>
      <Stack gap={basic.spacing.s250} justifyContent="flex-end">
        <Button
          spacing="wide"
          appearance={appearance}
          variant="filled"
          loading={isLoading}
          onClick={onClick}
        >
          {actionText}
        </Button>
      </Stack>
    </Stack>
  );
};

export { RequestStatus };
export type { IRequestStatus };

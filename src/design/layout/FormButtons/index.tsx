import { Stack, Button } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";

interface IFormButtons {
  handleReset: () => void;
  handleSubmit: () => void;
  cancelButtonText?: string;
  children?: React.ReactNode;
  withDisabledButtons?: boolean;
  withDisableReset?: boolean;
  loading?: boolean;
  submitButtonText?: string;
}

const FormButtons = ({
  handleSubmit,
  handleReset,
  cancelButtonText = "Cancelar",
  children,
  withDisabledButtons,
  withDisableReset,
  loading,
  submitButtonText = "Guardar",
}: IFormButtons) => {
  let disableCancel: boolean | undefined;

  if (withDisableReset === undefined || withDisableReset === null) {
    if (withDisabledButtons !== undefined && withDisabledButtons !== null) {
      disableCancel = withDisabledButtons;
    }
  } else {
    disableCancel = withDisableReset;
  }

  return (
    <Stack direction="column" gap={basic.spacing.s24}>
      <Stack direction="column">{children}</Stack>
      <Stack justifyContent="flex-end" gap={basic.spacing.s8}>
        <Button
          appearance={ComponentAppearance.PRIMARY}
          disabled={disableCancel}
          onClick={handleReset}
          type="reset"
        >
          {cancelButtonText}
        </Button>
        <Button
          appearance={ComponentAppearance.PRIMARY}
          onClick={handleSubmit}
          loading={loading}
          disabled={withDisabledButtons}
          type="button"
        >
          {submitButtonText}
        </Button>
      </Stack>
    </Stack>
  );
};

export { FormButtons };
export type { IFormButtons };

import { ThemeProvider } from "styled-components";
import { Stack, Button, inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

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
        <ThemeProvider theme={inube}>
          <Button
            appearance="gray"
            disabled={disableCancel}
            onClick={handleReset}
            type="reset"
          >
            {cancelButtonText}
          </Button>
          <Button
            appearance="primary"
            onClick={handleSubmit}
            loading={loading}
            disabled={withDisabledButtons}
            type="button"
          >
            {submitButtonText}
          </Button>
        </ThemeProvider>
      </Stack>
    </Stack>
  );
};

export { FormButtons };
export type { IFormButtons };

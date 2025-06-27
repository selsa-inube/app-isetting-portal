import { Spinner, Text, Stack } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

const LoadingUI = () => {
  return (
    <Stack gap={basic.spacing.s16} direction="column">
      <Stack direction="column">
        <Text type="title" textAlign="center">
          Cargando la aplicación
        </Text>
        <Text type="title" size="small" textAlign="center">
          Espere un momento, por favor.
        </Text>
      </Stack>
      <Stack alignItems="center" direction="column">
        <Spinner size="large" transparent={false} />
      </Stack>
    </Stack>
  );
};

export { LoadingUI };

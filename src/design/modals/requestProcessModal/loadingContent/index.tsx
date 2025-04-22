import { Stack, Spinner, Text } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { ILoadingContent } from "@ptypes/modals/ILoadingContent";

const LoadingContent = (props: ILoadingContent) => {
  const { appearance } = props;

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      alignContent="center"
      gap={basic.spacing.s300}
    >
      <Spinner size="large" appearance={appearance} transparent={false} />
      <Text type="body" size="medium" weight="bold" appearance="dark">
        Espere un momento por favor
      </Text>
    </Stack>
  );
};

export { LoadingContent };

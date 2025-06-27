import { Stack, Text } from "@inubekit/inubekit";
import { noResultLabels } from "@config/noResultLabels";
import { basic } from "@design/tokens";
import { INoResultsMessage } from "@ptypes/design/INoResultsMessage";

const NoResultsMessage = ({ search }: INoResultsMessage) => {
  return (
    <Stack margin={`${basic.spacing.s12} ${basic.spacing.s0}`}>
      <Text size="medium">
        {noResultLabels(search).noData}
      </Text>
      <Text size="medium">
        {noResultLabels().tryAgainLater}
      </Text>
    </Stack>
  );
};

export { NoResultsMessage };

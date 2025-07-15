import { Divider, Stack, Text } from "@inubekit/inubekit";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IRequestTitleSection } from "@ptypes/requestsInProgress/IRequestTitleSection";
import { ERequestMission } from "@enum/requestMission";

const RequestTitleSection = (props: IRequestTitleSection) => {
  const { requestType } = props;
  return (
    <Stack direction="column" width="100%" gap="8px">
      <Text
        type="title"
        size="medium"
        weight="bold"
        appearance={ComponentAppearance.GRAY}
      >
        {` ${
          ERequestMission[requestType as keyof typeof ERequestMission] ??
          requestType
        }`}
      </Text>
      <Divider dashed />
    </Stack>
  );
};

export default RequestTitleSection;

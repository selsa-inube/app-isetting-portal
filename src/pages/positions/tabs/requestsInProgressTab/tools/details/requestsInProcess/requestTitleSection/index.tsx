import { Divider, Stack, Text } from "@inubekit/inubekit";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { detailsRequestInProgressModal } from "@config/requestsInProgressTab/details/detailsRequestInProgressModal";
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
        {`${detailsRequestInProgressModal.labelRequest} ${
          ERequestMission[requestType as keyof typeof ERequestMission] ??
          requestType
        }`}
      </Text>
      <Divider dashed />
    </Stack>
  );
};

export default RequestTitleSection;

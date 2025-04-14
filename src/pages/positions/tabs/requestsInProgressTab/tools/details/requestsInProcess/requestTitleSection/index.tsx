import { Divider, Stack, Text } from "@inubekit/inubekit";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { RequestMission } from "src/enum/requestMission";
import { detailsRequestInProgressModal } from "@config/requestsInProgressTab/details/detailsRequestInProgressModal";
import { IRequestTitleSection } from "@ptypes/requestsInProgress/IRequestTitleSection";

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
          RequestMission[requestType as keyof typeof RequestMission] ??
          requestType
        }`}
      </Text>
      <Divider dashed />
    </Stack>
  );
};

export default RequestTitleSection;

import { Divider, Stack, Text } from "@inubekit/inubekit";
import { DetailBox } from "@design/feedback/detailBox";

import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";

import { SettingError } from "./settingRequestError";
import { IErrorTab } from "@ptypes/design/IErrorTab";
import { BorderStack } from "@design/layout/borderStack";
import { detailsRequestInProgressModal } from "@config/requestsInProgressTab/details/detailsRequestInProgressModal";
import { ISettingRequestError } from "@ptypes/requestsInProgress/ISettingRequestError";

const ErrorTab = (props: IErrorTab) => {
  const { data, title, isMobile, labelsOfRequest } = props;

  const labelsOfRequestDetails = labelsOfRequest.filter(
    (field) => data[field.id],
  );
  const hasSettingRequestError =
    Object.values(data.settingRequestError).length === 0;

  return (
    <Stack direction="column" gap={basic.spacing.s200}>
      <Stack gap={basic.spacing.s250} direction={isMobile ? "column" : "row"}>
        {labelsOfRequestDetails.map((field, id) => (
          <DetailBox
            key={id}
            field={field}
            data={data}
            id={id}
            borderRadius={basic.spacing.s100}
            padding={`${basic.spacing.s075} ${basic.spacing.s150}`}
            width={isMobile ? "100%" : "240px"}
            borderColor={EComponentAppearance.DARK}
            ellipsis
          />
        ))}
      </Stack>

      <BorderStack
        direction="column"
        background={EComponentAppearance.LIGHT}
        borderRadius={basic.spacing.s100}
        border={EComponentAppearance.DARK}
        boxSizing="border-box"
        width="100%"
        height={isMobile ? "400px" : "430px"}
        gap={basic.spacing.s200}
        padding={isMobile ? `${basic.spacing.s150}` : `${basic.spacing.s200}`}
      >
        <Stack
          gap={basic.spacing.s200}
          direction="column"
          alignItems="center"
          width="100%"
        >
          <Stack
            direction="column"
            justifyContent="left"
            width="100%"
            gap={basic.spacing.s100}
          >
            <Text
              type="title"
              size="medium"
              weight="bold"
              appearance={EComponentAppearance.GRAY}
            >
              {title}
            </Text>
            <Divider dashed />
          </Stack>
        </Stack>
        <BorderStack
          background={EComponentAppearance.LIGHT}
          overflowY="auto"
          boxSizing="border-box"
          wrap="wrap"
          width="100%"
          gap={isMobile ? `${basic.spacing.s075}` : `${basic.spacing.s150}`}
        >
          {hasSettingRequestError ? (
            <Text size="medium">
              {detailsRequestInProgressModal.withoutError}
            </Text>
          ) : (
            data.settingRequestError.map((setting: ISettingRequestError) => (
              <SettingError
                key={setting.errorId}
                errorDescription={setting.errorDescription}
                settingRequestId={setting.settingRequestId}
                errorDate={setting.errorDate}
              />
            ))
          )}
        </BorderStack>
      </BorderStack>
    </Stack>
  );
};

export { ErrorTab };

import { Divider, Fieldset, Stack, Text } from "@inubekit/inubekit";
import { FieldDetails } from "@design/feedback/fieldDetails";
import { ModalWrapper } from "@design/modals/modalWrapper";
import { basic } from "@design/tokens";
import { BorderStack } from "@design/layout/borderStack";
import { Table } from "@design/table";
import { EComponentAppearance } from "@enum/appearances";
import { titles } from "@config/assignments/details/table/titles";
import { actionsConfig } from "@config/assignments/details/table/actionsConfig";
import { breakPoints } from "@config/assignments/details/table/breakPoints";
import { IMoreDetails } from "@ptypes/assignments/IMoreDetails";

const MoreDetails = (props: IMoreDetails) => {
  const {
    data,
    labelsDetails,
    isMobile,
    portalId,
    onCloseModal,
    title,
    moreDetailsModal,
    pageLength,
    columnWidths,
    setEntryDeleted,
  } = props;


  const showRoles = data.roles && data.roles.length > 0

  return (
    <ModalWrapper
      width={isMobile ? "335px" : "700px"}
      maxHeight={isMobile ? "650px" : "790px"}
      isMobile={isMobile}
      padding={isMobile ? `${basic.spacing.s150}` : `${basic.spacing.s300}`}
      labelActionButton={moreDetailsModal.labelActionButton}
      labelCloseButton={moreDetailsModal.labelCloseButton}
      labelCloseModal={moreDetailsModal.labelCloseModal}
      portalId={portalId}
      title={title}
      onClick={onCloseModal}
      onCloseModal={onCloseModal}
    >
      <Stack direction="column" width="100%">
        {data.nameOfAbsentStaff && (
          <FieldDetails
            labelDetail={labelsDetails.reasonForAbsence}
            entry={data.reasonForAbsence}
          />
        )}

        <Fieldset
          legend={moreDetailsModal.legend}
          spacing="wide"
        >
          <Stack gap={basic.spacing.s250} width="100%">
            <FieldDetails
              labelDetail={labelsDetails.assignmentDateFormat}
              entry={data.assignmentDateFormat}
            />
            <FieldDetails
              labelDetail={labelsDetails.assignmentEndDateFormat}
              entry={data.assignmentEndDateFormat}
            />
          </Stack>
        </Fieldset>
        <Stack
          padding={`${basic.spacing.s250} ${basic.spacing.s0}`}
          width="100%"
        >
          <FieldDetails
            labelDetail={labelsDetails.description}
            entry={data.assignmentDescription}
          />
        </Stack>
        { showRoles && (
          <BorderStack
            direction="column"
            width="100%"
            borderRadius={basic.spacing.s100}
            padding={basic.spacing.s200}
            boxSizing="border-box"
            border={
              EComponentAppearance.DARK
            }
            gap={basic.spacing.s200}
          >
            <Stack direction="column" gap={basic.spacing.s100}>
              <Text appearance={EComponentAppearance.GRAY} weight="bold">
                {moreDetailsModal.rolesTitle}
              </Text>

              <Divider dashed />
            </Stack>
            <Table
              id={portalId}
              titles={titles}
              entries={data.roles}
              actions={actionsConfig(setEntryDeleted)}
              breakpoints={breakPoints}
              loading={false}
              columnWidths={columnWidths}
              pageLength={pageLength}
              withActionMobile={false}
              withGeneralizedTitle
            />
          </BorderStack>
        )}
      </Stack>
    </ModalWrapper>
  );
};

export { MoreDetails };

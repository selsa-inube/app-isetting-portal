import { MdAdd, MdOutlineInfo } from "react-icons/md";
import { Stack, Button, Text, Searchfield, Icon } from "@inubekit/inubekit";

import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";
import { Table } from "@design/table";
import { portalId } from "@config/portalId";
import { tabLabels } from "@config/tabLabels";
import { BorderStack } from "@design/layout/borderStack";
import { assignmentsTabLabels } from "@config/assignments/generic/assignmentsTabLabels";
import { IAssigmentsTabUI } from "@ptypes/assignments/IAssignmentsTabUI";
import { actionsConfig } from "@config/assignments/assignmentsTab/table/actionsConfig";
import { titles } from "@config/assignments/assignmentsTab/table/titles";
import { breakPoints } from "@config/assignments/assignmentsTab/table/breakPoints";
import { AbsenceModal } from "./AbsenceModal";
import { DecisionModal } from "@src/design/modals/decisionModal";
import { disabledModal } from "@src/config/disabledModal";

const AssignmentsTabUI = (props: IAssigmentsTabUI) => {
  const {
    searchAssingments,
    entries,
    loading,
    smallScreen,
    columnWidths,
    pageLength,
    emptyDataMessage,
    setEntryDeleted,
    showModal,
    disabledButton,
    isActiveChecked,
    absentOfficialOptions,
    formik,
    disabledButtonModal,
    showInfoModal,
    handleToggleInfoModal,
    onSelectChange,
    onSelectCheckChange,
    onClickModal,
    onToggleModal,
    onSearchAssingments,
  } = props;

  return (
    <BorderStack
      border={EComponentAppearance.DARK}
      borderRadius={basic.spacing.s100}
      padding={smallScreen ? `${basic.spacing.s150}` : `${basic.spacing.s0}`}
      boxSizing="initial"
      overflowY="auto"
    >
      <Stack
        width="-webkit-fill-available"
        direction="column"
        gap={basic.spacing.s250}
        padding={
          smallScreen ? `${basic.spacing.s150}` : `${basic.spacing.s300}`
        }
        justifyContent={smallScreen ? "center" : "normal"}
      >
        <Stack
          gap={smallScreen ? basic.spacing.s150 : basic.spacing.s200}
          direction="column"
          width="100%"
        >
          {smallScreen && (
            <Stack>
              <Text
                type="title"
                size="medium"
                appearance={EComponentAppearance.DARK}
                ellipsis
              >
                {assignmentsTabLabels.description}
              </Text>
            </Stack>
          )}
          <Stack
            justifyContent={smallScreen ? "center" : "space-between"}
            direction={smallScreen ? "column" : "row"}
            gap={smallScreen ? `${basic.spacing.s150}` : `${basic.spacing.s0}`}
            width="100%"
          >
            <Stack
              justifyContent="center"
              width={smallScreen ? "100%" : "auto"}
            >
              <Searchfield
                name="searchAssingments"
                label={smallScreen ? "" : tabLabels.search}
                id="searchAssingments"
                placeholder={tabLabels.placeholderSearch}
                size="compact"
                value={searchAssingments}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onSearchAssingments(e)
                }
                fullwidth={smallScreen}
              />
            </Stack>
            {!smallScreen && (
              <Stack alignItems="center">
                <Button
                  spacing="compact"
                  appearance={EComponentAppearance.PRIMARY}
                  iconBefore={<MdAdd />}
                  type="link"
                  onClick={onToggleModal}
                  disabled={disabledButton}
                >
                  {assignmentsTabLabels.buttonLabel}
                </Button>
                {disabledButton && (
                  <Icon
                    appearance={EComponentAppearance.PRIMARY}
                    icon={<MdOutlineInfo />}
                    onClick={handleToggleInfoModal}
                    cursorHover
                    size="14px"
                  />
                )}
              </Stack>
            )}
          </Stack>

          {!smallScreen && (
            <Stack>
              <Text
                type="title"
                size={smallScreen ? "small" : "medium"}
                appearance={EComponentAppearance.DARK}
                ellipsis
              >
                {assignmentsTabLabels.description}
              </Text>
            </Stack>
          )}

          <Table
            id={portalId}
            titles={titles}
            entries={entries}
            actions={actionsConfig(setEntryDeleted)}
            breakpoints={breakPoints}
            filter={searchAssingments}
            loading={loading}
            columnWidths={columnWidths}
            pageLength={pageLength}
            emptyDataMessage={emptyDataMessage}
            withActionMobile={false}
            withGeneralizedTitle
          />
        </Stack>
      </Stack>
      {showModal && (
        <AbsenceModal
          isMobile={smallScreen}
          onCloseModal={onToggleModal}
          onClick={onClickModal}
          isActiveChecked={isActiveChecked}
          absentOfficialOptions={absentOfficialOptions}
          formik={formik}
          disabled={disabledButtonModal}
          onSelectChange={onSelectChange}
          onSelectCheckChange={onSelectCheckChange}
        />
      )}
      {showInfoModal && (
        <DecisionModal
          portalId={portalId}
          title={disabledModal.title}
          actionText={disabledModal.actionText}
          description={disabledModal.description}
          subtitle={disabledModal.subtitle}
          onCloseModal={handleToggleInfoModal}
          onClick={handleToggleInfoModal}
          withCancelButton={false}
        />
      )}
    </BorderStack>
  );
};

export { AssignmentsTabUI };

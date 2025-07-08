import { Breadcrumbs, Stack, Tabs } from "@inubekit/inubekit";

import { basic } from "@design/tokens";
import { requestProcessMessage } from "@config/request/requestProcessMessage";
import { Title } from "@design/label/Title";
import { crumbsEditPosition } from "@config/positions/editPositions/navigation";
import { RequestProcess } from "@design/feedback/requestProcess";
import { requestStatusMessage } from "@config/positions/requestStatusMessage";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { IEditPositionsUI } from "@ptypes/positions/actions/IEditPositionsUI";
import { GeneralInformationForm } from "@pages/positions/tabs/positionsTabs/forms/generalInformationForm";
import { editPositionTitle } from "@config/positions/editPositions/editPositionTitle";
import { portalId } from "@config/portalId";
import { RolesForm } from "@pages/positions/tabs/positionsTabs/forms/rolesForm";
import { EComponentAppearance } from "@enum/appearances";

const EditPositionsUI = (props: IEditPositionsUI) => {
  const {
    editPositionTabsConfig,
    generalInformationRef,
    initialValues,
    savePositions,
    isSelected,
    loading,
    showGeneralInformation,
    showRequestProcess,
    showRolesform,
    showRequestStatusModal,
    onButtonClick,
    onTabChange,
    onCloseRequestStatus,
    onClosePendingReqModal,
    setIsCurrentFormValid,
    setSelectedToggle,
    requestSteps,
    smallScreen,
    onReset,
    options,
    roles,
  } = props;

  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={
        smallScreen
          ? `${basic.spacing.s200}`
          : `${basic.spacing.s300} ${basic.spacing.s800}`
      }
    >
      <Stack gap={basic.spacing.s300} direction="column">
        <Stack gap={basic.spacing.s300} direction="column">
          <Breadcrumbs crumbs={crumbsEditPosition} />
          <Title
            title={editPositionTitle.title}
            description={editPositionTitle.description}
            sizeTitle="large"
          />
        </Stack>
        <Stack gap={basic.spacing.s300} direction="column">
          <Tabs
            tabs={Object.values(editPositionTabsConfig)}
            selectedTab={isSelected}
            onChange={onTabChange}
          />
          <Stack direction="column">
            {showGeneralInformation && (
              <GeneralInformationForm
                ref={generalInformationRef}
                initialValues={initialValues.generalInformation.values}
                onFormValid={setIsCurrentFormValid}
                editDataOption
                loading={loading}
                handleNextStep={onButtonClick}
                onReset={onReset}
              />
            )}
            {showRolesform && (
              <RolesForm
                entries={roles}
                options={options}
                setSelectedToggle={setSelectedToggle}
                onButtonClick={onButtonClick}
                onReset={onReset}
                withFilter
              />
            )}
          </Stack>
        </Stack>
      </Stack>

      {showRequestProcess && (
        <RequestProcess
          portalId={portalId}
          saveData={savePositions}
          descriptionRequestProcess={requestProcessMessage}
          descriptionRequestStatus={requestStatusMessage}
          requestProcessSteps={requestSteps}
          appearance={EComponentAppearance.SUCCESS}
          onCloseRequestStatus={onCloseRequestStatus}
          onCloseProcess={() => {}}
        />
      )}

      {showRequestStatusModal && (
        <RequestStatusModal
          portalId={portalId}
          title={requestStatusMessage(savePositions.responsible).title}
          description={
            requestStatusMessage(savePositions.responsible).description
          }
          requestNumber={savePositions.requestNumber}
          onClick={onClosePendingReqModal}
          onCloseModal={onClosePendingReqModal}
          loading={false}
          actionText={
            requestStatusMessage(savePositions.responsible).actionText
          }
          appearance={EComponentAppearance.PRIMARY}
        />
      )}
    </Stack>
  );
};

export { EditPositionsUI };

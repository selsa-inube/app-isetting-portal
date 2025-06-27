import { Breadcrumbs, Button, Stack, Tabs } from "@inubekit/inubekit";
import { InitializerForm } from "@design/forms/InitializerForm";
import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { requestProcessMessage } from "@config/request/requestProcessMessage";
import { Title } from "@design/label/Title";
import { crumbsEditPosition } from "@config/positions/editPositions/navigation";
import { RequestProcess } from "@design/feedback/requestProcess";
import { DecisionModalLabel } from "@config/positions/decisionModalText";
import { requestStatusMessage } from "@config/positions/requestStatusMessage";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { IEditPositionsUI } from "@ptypes/positions/actions/IEditPositionsUI";
import { GeneralInformationForm } from "../../forms/generalInformationForm";
import { modalsLabels } from "@config/modalsLabels";
const EditPositionsUI = (props: IEditPositionsUI) => {
  const {
    editPositionTabsConfig,
    generalInformationRef,
    initialValues,
    savePositions,
    isSelected,
    loading,
    showRequestProcessModal,
    onButtonClick,
    onTabChange,
    onCloseRequestStatus,
    onClosePendingReqModal,
    setIsCurrentFormValid,
    setSelectedToggle,
    showPendingReqModal,
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
          <Title title="Editar " description=" posición." sizeTitle="large" />
        </Stack>
        <Stack gap={basic.spacing.s300} direction="column">
          <Tabs
            tabs={Object.values(editPositionTabsConfig)}
            selectedTab={isSelected}
            onChange={onTabChange}
          />
          <Stack direction="column">
            {isSelected === editPositionTabsConfig.generalInformation.id && (
              <GeneralInformationForm
                ref={generalInformationRef}
                initialValues={initialValues.generalInformation.values}
                onFormValid={setIsCurrentFormValid}
                editDataOption
                loading={loading}
                handleNextStep={() => false}
              />
            )}
            {isSelected === editPositionTabsConfig.selectionRoles.id && (
              <InitializerForm
                key={isSelected}
                dataOptionsForms={roles}
                dataOptionsValueSelect={options}
                setSelectedToggle={setSelectedToggle}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
      <Stack justifyContent="flex-end" gap={basic.spacing.s250}>
        <Button
          fullwidth={smallScreen}
          onClick={onReset}
          appearance={ComponentAppearance.GRAY}
          disabled={false}
        >
          {modalsLabels.cancel}
        </Button>

        <Button
          fullwidth={smallScreen}
          onClick={onButtonClick}
          disabled={false}
          loading={loading}
          appearance={ComponentAppearance.PRIMARY}
        >
         {modalsLabels.save}
        </Button>
      </Stack>
      {showRequestProcessModal && savePositions && (
        <RequestProcess
          portalId={DecisionModalLabel.portalId}
          saveData={savePositions}
          descriptionRequestProcess={requestProcessMessage}
          descriptionRequestStatus={requestStatusMessage}
          requestProcessSteps={requestSteps}
          appearance={ComponentAppearance.SUCCESS}
          onCloseRequestStatus={onCloseRequestStatus}
          onCloseProcess={() => {}}
        />
      )}

      {showPendingReqModal && savePositions.requestNumber && (
        <RequestStatusModal
          portalId="portal"
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
          appearance={ComponentAppearance.PRIMARY}
        />
      )}
    </Stack>
  );
};

export { EditPositionsUI };

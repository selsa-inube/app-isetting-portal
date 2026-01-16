import { Breadcrumbs, Stack, Tabs } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";
import { requestProcessMessage } from "@config/request/requestProcessMessage";
import { Title } from "@design/label/Title";
import { RequestProcess } from "@design/feedback/requestProcess";
import { DecisionModalLabel } from "@config/positions/decisionModalText";
import { requestStatusMessage } from "@config/positions/requestStatusMessage";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { IEditMissionUI } from "@ptypes/missions/edit/IEditMissionUI";
import { editMissionLabels } from "@config/missions/missionTab/edit/editMissionTitle";
import { DecisionModal } from "@design/modals/decisionModal";
import { sendEditedModal } from "@config/missions/missionTab/generic/sendEditModal";
import { goBackModal } from "@config/goBackModal";
import { crumbsEditMission } from "@config/missions/missionTab/edit/navigation";
import { portalId } from "@config/portalId";
import { GeneralInformationForm } from "../forms/generalInformationForm";

const EditMissionUI = (props: IEditMissionUI) => {
  const {
    editMissionTabsConfig,
    generalInformationRef,
    initialValues,
    saveMission,
    isSelected,
    loading,
    showGeneralInfo,
    showEditedModal,
    showGoBackModal,
    onToggleEditedModal,
    onEditedModal,
    onCloseGoBackModal,
    onGoBack,
    onCloseProcess,
    onTabChange,
    onCloseRequestStatus,
    onClosePendingReqModal,
    setIsCurrentFormValid,
    showRequestStatus,
    requestSteps,
    smallScreen,
    onReset,
    showRequestProcess,
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
          <Breadcrumbs crumbs={crumbsEditMission} />
          <Title
            title={editMissionLabels.title}
            description={editMissionLabels.description}
            sizeTitle="large"
          />
        </Stack>
        <Stack gap={basic.spacing.s300} direction="column">
          <Tabs
            tabs={Object.values(editMissionTabsConfig)}
            selectedTab={isSelected}
            onChange={onTabChange}
          />
          {showGeneralInfo && (
            <Stack direction="column">
              <GeneralInformationForm
                ref={generalInformationRef}
                initialValues={initialValues.generalInformation.values}
                onFormValid={setIsCurrentFormValid}
                editDataOption
                loading={loading}
                onButtonClick={onToggleEditedModal}
                onPrevious={onReset}
              />
            </Stack>
          )}
        </Stack>
      </Stack>

      {showEditedModal && (
        <DecisionModal
          portalId={portalId}
          title={sendEditedModal.title}
          description={sendEditedModal.description}
          actionText={sendEditedModal.actionText}
          onCloseModal={onToggleEditedModal}
          onClick={onEditedModal}
          loading={loading}
        />)}

      {showGoBackModal && (
        <DecisionModal
          portalId={portalId}
          title={goBackModal.title}
          description={goBackModal.description}
          actionText={goBackModal.actionText}
          onCloseModal={onCloseGoBackModal}
          onClick={onGoBack}
        />
      )}

      {showRequestProcess && (
        <RequestProcess
          portalId={DecisionModalLabel.portalId}
          saveData={saveMission}
          descriptionRequestProcess={requestProcessMessage}
          descriptionRequestStatus={requestStatusMessage}
          requestProcessSteps={requestSteps}
          appearance={EComponentAppearance.SUCCESS}
          onCloseRequestStatus={onCloseRequestStatus}
          onCloseProcess={onCloseProcess}
        />
      )}

      {showRequestStatus && (
        <RequestStatusModal
          portalId={portalId}
          title={requestStatusMessage(saveMission.responsible).title}
          description={
            requestStatusMessage(saveMission.responsible).description
          }
          requestNumber={saveMission.requestNumber}
          onClick={onClosePendingReqModal}
          onCloseModal={onClosePendingReqModal}
          loading={false}
          actionText={requestStatusMessage(saveMission.responsible).actionText}
          appearance={EComponentAppearance.PRIMARY}
        />
      )}
    </Stack>
  );
};

export { EditMissionUI };

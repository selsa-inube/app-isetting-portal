import { Breadcrumbs, Stack, Tabs } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";
import { requestProcessMessage } from "@config/request/requestProcessMessage";
import { Title } from "@design/label/Title";
import { RequestProcess } from "@design/feedback/requestProcess";
import { DecisionModalLabel } from "@config/positions/decisionModalText";
import { requestStatusMessage } from "@config/positions/requestStatusMessage";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { DecisionModal } from "@design/modals/decisionModal";
import { sendEditedModal } from "@config/missions/missionTab/generic/sendEditModal";
import { goBackModal } from "@config/goBackModal";
import { portalId } from "@config/portalId";

import { IEditUserUI } from "@ptypes/users/tabs/userTab/editUser/IEditUserUI";
import { editUserLabels } from "@config/users/editUser/editUserTitle";
import { crumbsEditUser } from "@config/users/editUser/navigation";
import { GeneralInformationForm } from "../addUser/forms/generalInformation";
import { MissionForStaffForm } from "../addUser/forms/misionForStaff";
import { ContactDataForm } from "../addUser/forms/contactData";
import { BusinessEntityForm } from "../addUser/forms/businessEntity";
import { PositionByBusinessUnit } from "../addUser/forms/positionByBusinessUnit";
import { RolesByBusinessUnit } from "../addUser/forms/rolesByBusinessUnit";

const EditUserUI = (props: IEditUserUI) => {
    const {
        editUserTabsConfig,
        formReferences,
        initialValues,
        saveUsers,
        isSelected,
        loading,
        showGeneralInfo,
        showMissionForStaff,
        showContactData,
        showBusinessUnits,
        showPositionByBusinessUnit,
        showRoleByBusinessUnit,
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
        setEntriesAdditionalBusinessEntity,
        entriesAdditionalBusinessEntity,
        positionsByBusinessUnit,
        selectPositionsByBusinessUnit,
        rolesByBusinessUnit,
        selectRolesByBusinessUnit,
        onNextStep,
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
                    <Breadcrumbs crumbs={crumbsEditUser} />
                    <Title
                        title={editUserLabels.title}
                        description={editUserLabels.description}
                        sizeTitle="large"
                    />
                </Stack>
                <Stack gap={basic.spacing.s300} direction="column">
                    <Tabs
                        tabs={Object.values(editUserTabsConfig)}
                        selectedTab={isSelected}
                        onChange={onTabChange}
                        scroll
                    />
                    <Stack direction="column">
                        {showGeneralInfo && (
                            <GeneralInformationForm
                                ref={formReferences.generalInformationStep}
                                initialValues={initialValues.generalInformationStep.values}
                                onFormValid={setIsCurrentFormValid}
                                editDataOption
                                loading={loading}
                                handleNextStep={onNextStep}
                                onReset={onReset}
                            />
                        )}
                        {showMissionForStaff && (
                            <MissionForStaffForm
                                ref={formReferences.missionForStaffStep}
                                initialValues={initialValues.missionForStaffStep.values}
                                onFormValid={setIsCurrentFormValid}
                                handleNextStep={onNextStep}
                                handlePreviousStep={onReset}
                            />
                        )}
                        {showContactData && (
                            <ContactDataForm
                                ref={formReferences.contactDataStep}
                                initialValues={initialValues.contactDataStep.values}
                                onFormValid={setIsCurrentFormValid}
                                handleNextStep={onNextStep}
                                handlePreviousStep={onReset}
                            />
                        )}
                        {showBusinessUnits && (
                            <BusinessEntityForm
                                entries={entriesAdditionalBusinessEntity}
                                setSelectedToggle={setEntriesAdditionalBusinessEntity}
                                onButtonClick={onNextStep}
                                onReset={onReset}
                            />
                        )}
                        {showPositionByBusinessUnit && (
                            <PositionByBusinessUnit
                                businessUnits={positionsByBusinessUnit}
                                setSelectedChange={selectPositionsByBusinessUnit}
                                onNextPage={onNextStep}
                                onReset={onReset}
                            />
                        )}
                        {showRoleByBusinessUnit && (
                            <RolesByBusinessUnit
                                entries={rolesByBusinessUnit}
                                setSelectedToggle={selectRolesByBusinessUnit}
                                onButtonClick={onNextStep}
                                onReset={onReset}
                            />
                        )}
                    </Stack>
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
                />
            )}

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
                    saveData={saveUsers}
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
                    title={requestStatusMessage(saveUsers.staffName).title}
                    description={requestStatusMessage(saveUsers.staffName).description}
                    requestNumber={saveUsers.requestNumber}
                    onClick={onClosePendingReqModal}
                    onCloseModal={onClosePendingReqModal}
                    loading={false}
                    actionText={requestStatusMessage(saveUsers.staffName).actionText}
                    appearance={EComponentAppearance.PRIMARY}
                />
            )}
        </Stack>
    );
};

export { EditUserUI };

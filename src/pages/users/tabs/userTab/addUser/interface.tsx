import { Assisted, Breadcrumbs, Stack } from "@inubekit/inubekit";

import { Title } from "@design/label/Title";
import { basic } from "@design/tokens";

import { GeneralInformationForm } from "./forms/generalInformation";

import { DecisionModal } from "@design/modals/decisionModal";
import { addUserUIConfig } from "@config/users/addUsers/addUserUI";
import { goBackModal } from "@config/goBackModal";
import { IAddUserUI } from "@ptypes/users/tabs/userTab/addUser/IAddUserUI";
import { crumbsAddUser } from "@config/users/addUsers/navigation";
import { MissionForStaffForm } from "./forms/misionForStaff";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { MdOutlineWarningAmber } from "react-icons/md";
import { ContactDataForm } from "./forms/contactData";
import { BusinessEntityForm } from "./forms/businessEntity";
import { PositionByBusinessUnit } from "./forms/positionByBusinessUnit";
import { RolesByBusinessUnit } from "./forms/rolesByBusinessUnit";

const AddUserUI = (props: IAddUserUI) => {
  const {
    currentStep,
    formReferences,
    initialValues,
    isCurrentFormValid,
    title,
    steps,
    showGoBackModal,
    smallScreen,
    onGoBack,
    handleModal,
    assistedLength,
    onNextStep,
    onPreviousStep,
    setIsCurrentFormValid,
    onToggleModal,
    description,
    showMissionNameModal,
    onToggleMissionModal,
    setEntriesAdditionalBusinessEntity,
    entriesAdditionalBusinessEntity,
    positionsByBusinessUnit,
    selectPositionsByBusinessUnit,
    rolesByBusinessUnit,
    selectRolesByBusinessUnit,
  } = props;

  return (
    <Stack
      direction="column"
      padding={
        smallScreen
          ? `${basic.spacing.s200}`
          : `${basic.spacing.s300} ${basic.spacing.s800}`
      }
      width="-webkit-fill-available"
    >
      <Stack gap={basic.spacing.s300} direction="column">
        <Stack gap={basic.spacing.s300} direction="column">
          <Breadcrumbs crumbs={crumbsAddUser} />
          <Title
            title={title}
            description={description}
            sizeTitle="large"
            onClick={handleModal}
          />
        </Stack>
        <Stack gap={basic.spacing.s300} direction="column">
          <Assisted
            step={steps[currentStep - 1]}
            totalSteps={steps.length}
            onBackClick={onPreviousStep}
            onNextClick={onNextStep}
            onSubmitClick={onToggleModal}
            disableNext={!isCurrentFormValid}
            controls={addUserUIConfig.AssistedConfig}
            size={assistedLength}
          />
          <Stack direction="column">
            {currentStep === addUserUIConfig.generalInformationStep && (
              <GeneralInformationForm
                ref={formReferences.generalInformationStep}
                initialValues={initialValues.generalInformationStep.values}
                onFormValid={setIsCurrentFormValid}
                handleNextStep={onNextStep}
              />
            )}
            {currentStep === addUserUIConfig.misionForStaff && (
              <MissionForStaffForm
                ref={formReferences.missionForStaffStep}
                initialValues={initialValues.missionForStaffStep.values}
                onFormValid={setIsCurrentFormValid}
                handleNextStep={onNextStep}
                handlePreviousStep={onPreviousStep}
              />
            )}
            {currentStep === addUserUIConfig.contactData && (
              <ContactDataForm
                ref={formReferences.contactDataStep}
                initialValues={initialValues.contactDataStep.values}
                handleNextStep={onNextStep}
                handlePreviousStep={onPreviousStep}
              />
            )}
            {currentStep === addUserUIConfig.businessEntityStep && (
              <BusinessEntityForm
                entries={entriesAdditionalBusinessEntity}
                setSelectedToggle={setEntriesAdditionalBusinessEntity}
                onButtonClick={onNextStep}
                onReset={onPreviousStep}
              ></BusinessEntityForm>
            )}
            {currentStep === addUserUIConfig.positionByBusinessUnit && (
              <PositionByBusinessUnit
                businessUnits={positionsByBusinessUnit}
                setSelectedChange={selectPositionsByBusinessUnit}
                onNextPage={onNextStep}
                onReset={onPreviousStep}
              />
            )}
            {currentStep === addUserUIConfig.roleByBusinessUnit && (
              <RolesByBusinessUnit
                entries={rolesByBusinessUnit}
                setSelectedToggle={selectRolesByBusinessUnit}
                onButtonClick={onNextStep}
                onReset={onPreviousStep}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
      {showGoBackModal && (
        <DecisionModal
          portalId="portal"
          title={goBackModal.title}
          description={goBackModal.description}
          actionText={goBackModal.actionText}
          onCloseModal={handleModal}
          onClick={onGoBack}
        />
      )}
      {showMissionNameModal && (
        <DecisionModal
          portalId="portal"
          title={addUserUIConfig.missionNameModal.title}
          subtitle={addUserUIConfig.missionNameModal.subtitle}
          description={addUserUIConfig.missionNameModal.description}
          actionText={addUserUIConfig.missionNameModal.actionText}
          onCloseModal={onToggleMissionModal}
          onClick={onToggleMissionModal}
          withIcon
          icon={<MdOutlineWarningAmber />}
          appearance={ComponentAppearance.WARNING}
          withDivider
          showCancelButton={false}
        />
      )}
    </Stack>
  );
};

export { AddUserUI };

import { useContext } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { EUseCase } from "@enum/useCase";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";

import { useEditUser } from "@hooks/users/tabs/userTab/useEditUser";
import { useSaveUsers } from "@hooks/users/tabs/userTab/addUser/saveUsers/useSaveUsers";
import { useOptionsBusinessEntity } from "@hooks/users/tabs/userTab/addUser/optionsBusinessUnit";
import { useRolesByBusinessUnit } from "@hooks/users/tabs/userTab/addUser/useRolesByBusinessUnit";
import { editUserTabsConfig } from "@config/users/editUser/tabs";
import { EditUserUI } from "./interface";
import { useLocation } from "react-router-dom";

const EditUser = () => {
    const location = useLocation();
    const { data } = location.state || {};
    const { appData } = useContext(AuthAndData);
    console.log(data)
    const {
        formValues,
        formReferences,
        isSelected,
        saveData,
        showRequestProcessModal,
        smallScreen,
        showGeneralInfo,
        showMissionForStaff,
        showContactData,
        showBusinessUnits,
        showPositionByBusinessUnit,
        showRoleByBusinessUnit,
        showEditedModal,
        showGoBackModal,
        handleToggleEditedModal,
        handleEditedModal,
        handleCloseGoBackModal,
        handleGoBack,
        handleReset,
        handleNextStep,
        setIsCurrentFormValid,
        handleTabChange,
        setShowModal,
        setShowRequestProcessModal,
        setFormValues,
    } = useEditUser(data);

    const {
        setEntriesAdditionalBusinessEntity,
        entriesAdditionalBusinessEntity,
        activeEntries,
    } = useOptionsBusinessEntity({
        formValues,
        setFormValues,
        token: appData.token,
    });

    const {
        rolesByBusinessUnit,
        setRolesByBusinessUnit,
        selectPositionsByBusinessUnit,
        positionsByBusinessUnit,
    } = useRolesByBusinessUnit({
        formValues,
        setFormValues,
        token: appData.token,
        activeEntries,
    });

    const {
        saveUsers,
        requestSteps,
        loadingSendData,
        handleCloseRequestStatus,
        handleClosePendingReqModal,
        handleCloseProcess,
        showPendingReqModal,
    } = useSaveUsers({
        useCase: EUseCase.EDIT,
        businessUnits: appData.businessUnit.publicCode,
        userAccount: appData.user.userAccount,
        sendData: showRequestProcessModal,
        data: saveData as ISaveDataRequest,
        setSendData: setShowRequestProcessModal,
        setShowModal,
        token: appData.token,
        businessManagerCode: appData.businessManager.publicCode,
    });

    const showRequestProcess = Boolean(showRequestProcessModal && saveUsers);

    const showRequestStatus = Boolean(
        showPendingReqModal && saveUsers?.requestNumber
    );

    return (
        <EditUserUI
            editUserTabsConfig={editUserTabsConfig}
            isSelected={isSelected}
            onTabChange={handleTabChange}
            formReferences={formReferences as any}
            initialValues={formValues}
            setIsCurrentFormValid={setIsCurrentFormValid}
            saveUsers={saveUsers as ISaveDataResponse}
            requestSteps={requestSteps}
            loading={loadingSendData}
            onCloseRequestStatus={handleCloseRequestStatus}
            onClosePendingReqModal={handleClosePendingReqModal}
            onReset={handleReset}
            smallScreen={smallScreen}
            showRequestProcess={showRequestProcess}
            showGeneralInfo={showGeneralInfo}
            showMissionForStaff={showMissionForStaff}
            showContactData={showContactData}
            showBusinessUnits={showBusinessUnits}
            showPositionByBusinessUnit={showPositionByBusinessUnit}
            showRoleByBusinessUnit={showRoleByBusinessUnit}
            showRequestStatus={showRequestStatus}
            showEditedModal={showEditedModal}
            showGoBackModal={showGoBackModal}
            onToggleEditedModal={handleToggleEditedModal}
            onEditedModal={handleEditedModal}
            onCloseGoBackModal={handleCloseGoBackModal}
            onGoBack={handleGoBack}
            onCloseProcess={handleCloseProcess}
            setEntriesAdditionalBusinessEntity={setEntriesAdditionalBusinessEntity}
            entriesAdditionalBusinessEntity={entriesAdditionalBusinessEntity}
            positionsByBusinessUnit={positionsByBusinessUnit}
            selectPositionsByBusinessUnit={selectPositionsByBusinessUnit}
            rolesByBusinessUnit={rolesByBusinessUnit}
            selectRolesByBusinessUnit={setRolesByBusinessUnit}
            onNextStep={handleNextStep}
        />
    );
};

export { EditUser };

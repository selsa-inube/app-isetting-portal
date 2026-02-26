import { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FormikProps } from "formik";
import { useMediaQuery } from "@inubekit/inubekit";

import { AuthAndData } from "@context/authAndDataProvider";
import { editUserTabsConfig } from "@config/users/editUser/tabs";
import { mediaQueryTabletMain } from "@config/environment";
import { IGeneralUserFormValues } from "@ptypes/users/tabs/userTab/addUser/forms/IGeneralFormValues";
import { IGeneralInfoForm } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IGeneralInfoForm";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { requestConfig } from "@config/request/requestsConfig";
import { ERequestType } from "@enum/request/requestType";
import { EUserRequest } from "@enum/user/usersRequest";
import { formatDate } from "@utils/date/formatDate";
import { IUsers } from "@ptypes/users/tabs/userTab/usersTable/IUsers";
import { IMissionForStaff } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IMissionForStaff";
import { IContactDataFormValues } from "@ptypes/users/tabs/userTab/addUser/forms/IContactData";

const useEditUser = (data: IUsers) => {
    const navigate = useNavigate();
    const { appData } = useContext(AuthAndData);
    const [isSelected, setIsSelected] = useState<string>(
        editUserTabsConfig.generalInformation.id
    );

    const initialFormValues: IGeneralUserFormValues = {
        generalInformationStep: {
            isValid: true,
            values: {
                firstName: data?.staffName || "",
                lastName: data?.staffLastName || "",
                idType: data?.identificationTypeNaturalPerson || "",
                idNumber: data?.identificationDocumentNumber || "",
                gender: data?.biologicalSex || "",
                birthDate: data?.birthDay || "",
            },
        },
        missionForStaffStep: {
            isValid: true,
            values: {
                missionValue: data?.missionName || "",
                missionName: data?.missionName || "",
                missionDescription: "",
            },
        },
        contactDataStep: {
            isValid: true,
            values: {
                email: data?.principalEmail || "",
                phone: data?.principalPhone || "",
            },
        },
        businessUnitsStep: [],
        positionByBusinessUnitStep: [],
        roleByBusinessUnitStep: [],
    };
    const [formValues, setFormValues] = useState<IGeneralUserFormValues>(initialFormValues);
    const [isCurrentFormValid, setIsCurrentFormValid] = useState(true);
    const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);
    const [saveData, setSaveData] = useState<ISaveDataRequest>();
    const [showModal, setShowModal] = useState(false);
    const [showGoBackModal, setShowGoBackModal] = useState(false);
    const [showEditedModal, setShowEditedModal] = useState(false);

    const generalInformationRef = useRef<FormikProps<IGeneralInfoForm>>(null);
    const missionForStaffRef = useRef<FormikProps<IMissionForStaff>>(null);
    const contactDataRef = useRef<FormikProps<IContactDataFormValues>>(null);

    const formReferences = {
        generalInformationStep: generalInformationRef,
        missionForStaffStep: missionForStaffRef,
        contactDataStep: contactDataRef,
    };

    const smallScreen = useMediaQuery(mediaQueryTabletMain);

    const handleTabChange = (tabId: string) => {
        setIsSelected(tabId);
    };

    const handleToggleEditedModal = () => {
        setShowEditedModal(!showEditedModal);
    };

    const handleCloseGoBackModal = () => {
        setShowGoBackModal(false);
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleReset = () => {
        setShowGoBackModal(true);
    };

    const handleNextStep = () => {
        const currentTab = isSelected;
        if (currentTab === editUserTabsConfig.generalInformation.id && generalInformationRef.current) {
            setFormValues(prev => ({
                ...prev,
                generalInformationStep: { ...prev.generalInformationStep, values: generalInformationRef.current!.values }
            }));
        }
        if (currentTab === editUserTabsConfig.missionForStaff.id && missionForStaffRef.current) {
            setFormValues(prev => ({
                ...prev,
                missionForStaffStep: { ...prev.missionForStaffStep, values: missionForStaffRef.current!.values }
            }));
        }
        if (currentTab === editUserTabsConfig.contactData.id && contactDataRef.current) {
            setFormValues(prev => ({
                ...prev,
                contactDataStep: { ...prev.contactDataStep, values: contactDataRef.current!.values }
            }));
        }

        handleToggleEditedModal();
    };

    const onSubmit = () => {
        const general = generalInformationRef.current?.values || formValues.generalInformationStep.values;
        const roles = formValues.roleByBusinessUnitStep;

        setSaveData({
            applicationName: requestConfig.applicationName,
            requestType: ERequestType.MODIFY,
            businessManagerCode: appData.businessManager.publicCode,
            businessUnitCode: appData.businessUnit.publicCode,
            description: "Solicitud de modificación de un funcionario",
            entityName: "Staff",
            requestDate: formatDate(new Date()),
            useCaseName: EUserRequest.EDIT_USER,
            configurationRequestData: {
                staffId: data.staffId,
                biologicalSex: general.gender,
                birthDay: String(general.birthDate),
                businessManagerCode: appData.businessManager.publicCode,
                identificationNumber: String(general.idNumber),
                identificationType: general.idType,
                staffName: general.firstName,
                staffLastName: general.lastName,
                principalEmail: formValues.contactDataStep.values.email,
                principalPhone: formValues.contactDataStep.values.phone,
                staffByBusinessUnitAndRole: roles,
                modifyJustification: "Actualización de información de funcionario",
            },
        });
        setShowRequestProcessModal(true);
    };

    const handleEditedModal = () => {
        setShowEditedModal(false);
        onSubmit();
    };

    const showGeneralInfo = isSelected === editUserTabsConfig.generalInformation.id;
    const showMissionForStaff = isSelected === editUserTabsConfig.missionForStaff.id;
    const showContactData = isSelected === editUserTabsConfig.contactData.id;
    const showBusinessUnits = isSelected === editUserTabsConfig.businessUnits.id;
    const showPositionByBusinessUnit = isSelected === editUserTabsConfig.positionByBusinessUnit.id;
    const showRoleByBusinessUnit = isSelected === editUserTabsConfig.roleByBusinessUnit.id;

    return {
        formValues,
        formReferences,
        isCurrentFormValid,
        isSelected,
        saveData,
        showRequestProcessModal,
        showModal,
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
        setShowRequestProcessModal,
        setShowModal,
        setFormValues,
    };
};

export { useEditUser };

import { mediaQueryTabletMain } from "@config/environment";
import { addUserUIConfig } from "@config/users/addUsers/addUserUI";
import { addUserSteps } from "@config/users/addUsers/assisted/steps";
import { addUserHookConfig } from "@config/users/addUsers/hook";
import { AuthAndData } from "@context/authAndDataProvider";
import { useMissionsData } from "@hooks/missions/useMissionsData";
import { useMediaQuery } from "@inubekit/inubekit";
import { IContactDataFormValues } from "@ptypes/users/tabs/userTab/addUser/forms/IContactData";
import { IGeneralUserFormValues } from "@ptypes/users/tabs/userTab/addUser/forms/IGeneralFormValues";
import { IFormsAddUserGeneralFormRefs } from "@ptypes/users/tabs/userTab/addUser/forms/IGeneralFormValues/ref";
import { IGeneralInfoForm } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IGeneralInfoForm";
import { IMissionForStaff } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IMissionForStaff";
import { requestConfig } from "@config/request/requestsConfig";
import { ERequestType } from "@enum/request/requestType";
import { EUserRequest } from "@enum/user/usersRequest";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { formatDate } from "@utils/date/formatDate";
import { FormikProps } from "formik";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAddUser = () => {
  const title = addUserUIConfig.title;
  const description = addUserUIConfig.description;
  const [currentStep, setCurrentStep] = useState(1);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);
  const steps = addUserSteps;
  const [showGoBackModal, setShowGoBackModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showMissionNameModal, setShowMissionNameModal] = useState(false);
  const { appData } = useContext(AuthAndData);
  const [saveData, setSaveData] = useState<ISaveDataRequest>();
  const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);

  const [formValues, setFormValues] = useState<IGeneralUserFormValues>({
    generalInformationStep: {
      isValid: false,
      values: {
        firstName: "",
        lastName: "",
        idType: "",
        idNumber: "",
        gender: "",
        birthDate: "",
      },
    },
    missionForStaffStep: {
      isValid: false,
      values: {
        missionValue: "",
        missionName: "",
        missionDescription: "",
      },
    },
    contactDataStep: {
      isValid: false,
      values: {
        email: "",
        phone: "",
      },
    },
    businessUnitsStep: [],
    positionByBusinessUnitStep: [],
    roleByBusinessUnitStep: [],
  });

  const generalInformationRef = useRef<FormikProps<IGeneralInfoForm>>(null);
  const missionForStaffRef = useRef<FormikProps<IMissionForStaff>>(null);
  const contactDataRef = useRef<FormikProps<IContactDataFormValues>>(null);
  const formReferences: IFormsAddUserGeneralFormRefs = {
    generalInformationStep: generalInformationRef,
    missionForStaffStep: missionForStaffRef,
    contactDataStep: contactDataRef,
  };
  const navigate = useNavigate();
  const smallScreen = useMediaQuery(mediaQueryTabletMain);
  const assistedLength = smallScreen
    ? addUserHookConfig.small
    : addUserHookConfig.large;

  const onGoBack = () => {
    navigate(-1);
  };

  const handleGoBackModal = () => {
    setShowGoBackModal(!showGoBackModal);
  };
  const { missionsData } = useMissionsData(
    appData.token,
    appData.businessManager.publicCode,
  );
  const handleNextStep = () => {
    if (currentStep < addUserHookConfig.maxSteps) {
      if (generalInformationRef.current) {
        setFormValues((prev) => ({
          ...prev,
          generalInformationStep: {
            ...prev.generalInformationStep,
            values: generalInformationRef.current!.values,
          },
        }));
      }
      if (missionForStaffRef.current) {
        const { values } = missionForStaffRef.current;
        const isDuplicatedMission = missionsData.some(
          (mission) => mission.missionName === values.missionName,
        );

        if (isDuplicatedMission) {
          setShowMissionNameModal(true);
          return;
        }
        const selectedMission = missionsData.find(
          (mission) => mission.missionName === values.missionValue,
        );
        setFormValues((prev) => ({
          ...prev,
          missionForStaffStep: {
            ...prev.missionForStaffStep,
            values: {
              ...values,
              missionName: selectedMission?.missionName ?? values.missionName,
              missionDescription:
                selectedMission?.descriptionUse ?? values.missionDescription,
            },
          },
        }));
      }
      if (contactDataRef.current) {
        setFormValues((prev) => ({
          ...prev,
          contactDataStep: {
            ...prev.contactDataStep,
            values: contactDataRef.current!.values,
          },
        }));
      }

      setCurrentStep(currentStep + 1);
    }
  };
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  const handleToggleMissionModal = () => {
    setShowMissionNameModal(!showMissionNameModal);
  };
  const handleSubmit = () => {
    const general = formValues.generalInformationStep.values;
    const mission = formValues.missionForStaffStep.values;
    const contact = formValues.contactDataStep.values;
    const roles = formValues.roleByBusinessUnitStep;

    setSaveData({
      applicationName: requestConfig.applicationName,
      requestType: ERequestType.ADD,
      businessManagerCode: appData.businessManager.publicCode,
      businessUnitCode: appData.businessUnit.publicCode,
      description: "Solicitud de creación de un funcionario nuevo",
      entityName: "Staff",
      requestDate: formatDate(new Date()),
      useCaseName: EUserRequest.ADD_USER,
      configurationRequestData: {
        biologicalSex: general.gender,
        birthDay: String(general.birthDate),
        businessManagerCode: appData.businessManager.publicCode,
        identificationNumber: String(general.idNumber),
        identificationType: general.idType,
        staffName: general.firstName,
        staffLastName: general.lastName,

        missionData: {
          descriptionUse: mission.missionDescription,
          missionName: mission.missionName,
        },
        missionName: mission.missionName,

        principalEmail: contact.email,
        principalPhone: contact.phone,

        staffByBusinessUnitAndRole: roles.map((item) => ({
          businessUnitCode: item.businessUnitCode,
          positionName: item.positionName,
          roleName: item.rolesStaff,
        })),
      },
    });

    setShowRequestProcessModal(true);
  };

  return {
    currentStep,
    formReferences,
    formValues,
    isCurrentFormValid,
    title,
    steps,
    showGoBackModal,
    smallScreen,
    onGoBack,
    handleGoBackModal,
    assistedLength,
    handleNextStep,
    handlePreviousStep,
    setIsCurrentFormValid,
    handleToggleModal,
    description,
    showMissionNameModal,
    handleToggleMissionModal,
    showRequestProcessModal,
    setShowRequestProcessModal,
    setShowModal,
    handleSubmit,
    saveData,
    showModal,
    setFormValues,
  };
};

export { useAddUser };

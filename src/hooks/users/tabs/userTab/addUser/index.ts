import { enviroment } from "@config/environment";
import { addUserUIConfig } from "@config/users/addUsers/addUserUI";
import { addUserSteps } from "@config/users/addUsers/assisted/steps";
import { addUserHookConfig } from "@config/users/addUsers/hook";
import { AuthAndData } from "@context/authAndDataProvider";
import { useMissionsData } from "@hooks/missions/useMissionsData";
import { IAssistedStep, useMediaQuery } from "@inubekit/inubekit";
import { IGeneralUserFormValues } from "@ptypes/users/tabs/userTab/addUser/forms/IGeneralFormValues";
import { IFormsAddUserGeneralFormRefs } from "@ptypes/users/tabs/userTab/addUser/forms/IGeneralFormValues/ref";
import { IGeneralInfoForm } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IGeneralInfoForm/indexs";
import { IMissionForStaff } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IMissionForStaff";
import { FormikProps } from "formik";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAddUser = () => {
  const title = addUserUIConfig.title;
  const description = addUserUIConfig.description;
  const [currentStep, setCurrentStep] = useState(1);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);
  const [steps] = useState<IAssistedStep[]>(addUserSteps);
  const [showGoBackModal, setShowGoBackModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showMissionNameModal, setShowMissionNameModal] = useState(false);
  const { appData } = useContext(AuthAndData);
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
  });

  const generalInformationRef = useRef<FormikProps<IGeneralInfoForm>>(null);
  const missionForStaffRef = useRef<FormikProps<IMissionForStaff>>(null);
  const formReferences: IFormsAddUserGeneralFormRefs = {
    generalInformation: generalInformationRef,
    missionForStaff: missionForStaffRef,
  };
  const navigate = useNavigate();
  const smallScreen = useMediaQuery(enviroment.IS_MOBILE_970);
  const assistedLength = smallScreen
    ? addUserHookConfig.small
    : addUserHookConfig.large;

  const onGoBack = () => {
    navigate(-1);
  };

  const handleGoBackModal = () => {
    setShowGoBackModal(!showGoBackModal);
  };
  const { missionsData } = useMissionsData(appData.businessManager.publicCode);
  const handleNextStep = () => {
    if (currentStep < addUserHookConfig.maxSteps) {
      if (generalInformationRef.current) {
        setFormValues((prev) => ({
          ...prev,
          generalInformation: {
            ...prev.generalInformationStep,
            values: generalInformationRef.current?.values,
          },
        }));
      }
      if (missionForStaffRef.current) {
        const duplicatedMission = missionsData.find(
          (mission) =>
            mission.missionName ===
            missionForStaffRef.current?.values.missionName
        );

        if (duplicatedMission) {
          setShowMissionNameModal(true);
          return;
        }
        setFormValues((prev) => ({
          ...prev,
          missionForStaffStep: {
            ...prev.missionForStaffStep,
            values: missionForStaffRef.current?.values || {
              missionValue: "",
              missionName: "",
              missionDescription: "",
            },
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
  };
};

export { useAddUser };

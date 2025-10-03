import { enviroment } from "@config/environment";
import { addUserUIConfig } from "@config/users/addUsers/addUserUI";
import { addUserSteps } from "@config/users/addUsers/assisted/steps";
import { addUserHookConfig } from "@config/users/addUsers/hook";
import { IAssistedStep, useMediaQuery } from "@inubekit/inubekit";
import { IGeneralUserFormValues } from "@ptypes/users/tabs/userTab/addUser/forms/IGeneralFormValues";
import { IFormsAddUserGeneralFormRefs } from "@ptypes/users/tabs/userTab/addUser/forms/IGeneralFormValues/ref";
import { IGeneralInfoForm } from "@ptypes/users/tabs/userTab/addUser/forms/IGeneralInfoForm/indexs";
import { FormikProps } from "formik";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAddUser = () => {
  const title = addUserUIConfig.title;
  const description = addUserUIConfig.description;
  const [currentStep, setCurrentStep] = useState(1);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);
  const [steps] = useState<IAssistedStep[]>(addUserSteps);
  const [showGoBackModal, setShowGoBackModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
  });

  const generalInformationRef = useRef<FormikProps<IGeneralInfoForm>>(null);

  const formReferences: IFormsAddUserGeneralFormRefs = {
    generalInformation: generalInformationRef,
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
  };
};

export { useAddUser };

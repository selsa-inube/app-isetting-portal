import { addUsersInvitationSteps } from "@config/users/addUsersInvitation/stepsUsersInvitation";
import { useMediaQuery } from "@inubekit/inubekit";
import { IFormAddUsers } from "@ptypes/users/assisted/IFormAddUsers";
import { IGeneralInformationEntry } from "@ptypes/users/assisted/IGeneralInformationEntry";
import { initalValuesUsers } from "@ptypes/users/initialValues";
import { FormikProps } from "formik";
import { useRef, useState } from "react";

const UseAddUserInvitation = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showMultipurposeModal, setShowMultipurposeModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);
  const [formValues, setFormValues] = useState<IFormAddUsers>({
    generalInformation: {
      isValid: false,
      values: initalValuesUsers.generalInformation,
    },
  });
  const smallScreen = useMediaQuery("(max-width: 990px)");
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleNextStep = () => {
    if (currentStep < addUsersInvitationSteps.length) {
      if (currentStep === 2 && showMultipurposeModal) {
        setShowMultipurposeModal(false);
      }
      if (generalInformationRef.current) {
        setFormValues({
          ...formValues,
          generalInformation: {
            ...formValues.generalInformation,
            values: generalInformationRef.current
              .values as unknown as typeof formValues.generalInformation.values,
          },
        });
        setIsCurrentFormValid(generalInformationRef.current.isValid);
      }
      setCurrentStep(currentStep + 1);
    }
  };
  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  const disabled = !isCurrentFormValid;
  console.log(isCurrentFormValid);
  return {
    smallScreen,
    currentStep,
    handlePreviousStep,
    handleNextStep,
    handleToggleModal,
    disabled,
    generalInformationRef,
    formValues,
    setIsCurrentFormValid,
  };
};

export { UseAddUserInvitation };

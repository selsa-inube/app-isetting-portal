import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { FormikProps } from "formik";
import { useMediaQuery } from "@inubekit/inubekit";
import { addStaffRolesSteps } from "@config/positions/addPositions/assisted";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { AuthAndData } from "@context/authAndDataProvider";
import { formatDate } from "@utils/date/formatDate";
import { IFormAddMission } from "@ptypes/missions/assisted/IFormAddMission";
import { IGeneralInformationEntry } from "@ptypes/missions/assisted/IGeneralInformationEntry";
import { saveDataLabels } from "@config/missions/missionTab/assisted/saveDataLabels";
import { ERequestType } from "@src/enum/request/requestType";

const useAddMission = () => {
  const initialValues = {
    nameMission: "",
    descriptionMission: "",
  };
  const { appData } = useContext(AuthAndData);
  const [currentStep, setCurrentStep] = useState(1);
  const [saveData, setSaveData] = useState<ISaveDataRequest>();
  const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);
  const [showModalApplicationStatus, setShowModalApplicationStatus] =
    useState(false);
    const [showGoBackModal, setShowGoBackModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState<IFormAddMission>({
    generalInformation: {
      isValid: false,
      values: initialValues,
    },
  });

  const navigate = useNavigate();
  const smallScreen = useMediaQuery("(max-width: 990px)");

  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);

  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  const disabled = !isCurrentFormValid;

  const handleNextStep = () => {
    if (currentStep < addStaffRolesSteps.length) {
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

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleToggleModalApplication = () => {
    setShowModalApplicationStatus(!showModalApplicationStatus);
  };

   const handleGoBackModal = () => {
    setShowGoBackModal(!showGoBackModal);
  };

  const handleSubmitClick = () => {
    handleToggleModal();
    setShowRequestProcessModal(!showRequestProcessModal);
    setSaveData({
      applicationName: "istaff",
      businessManagerCode: appData.businessManager.publicCode,
      businessUnitCode: appData.businessUnit.publicCode,
      description: saveDataLabels.description,
      requestType: ERequestType.ADD,
      entityName: "Mission",
      requestDate: formatDate(new Date()),
      useCaseName: "AddMission",
      configurationRequestData: {
        missionName: formValues.generalInformation.values.nameMission,
        descriptionUse: formValues.generalInformation.values.descriptionMission,
      },
    });
  };
  return {
    currentStep,
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    handleNextStep,
    showModalApplicationStatus,
    handleSubmitClick,
    showModal,
    handleToggleModal,
    handleToggleModalApplication,
    handlePreviousStep,
    setIsCurrentFormValid,
    setCurrentStep,
    showGoBackModal,
    handleGoBackModal,
    showRequestProcessModal,
    saveData,
    smallScreen,
    setShowModal,
    navigate,
    disabled,
    setShowRequestProcessModal,
  };
};

export { useAddMission };

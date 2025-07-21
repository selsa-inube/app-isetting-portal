import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { IFlagAppearance, useFlag, useMediaQuery } from "@inubekit/inubekit";
import { FormikProps } from "formik";

import { compareObjects } from "@utils/compareObjects";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { formatDate } from "@utils/date/formatDate";
import { enviroment } from "@config/environment";
import { addAssignmentsSteps } from "@config/assignments/assisted/steps";
import { IAddAssignmentForms } from "@ptypes/assignments/assisted/IAddAssignmentForms";
import { IOfficialInChargeEntry } from "@ptypes/assignments/assisted/IOfficialInChargeEntry";
import { addAssignmentsLabels } from "@config/assignments/assisted/addAssignmentsLabels";
import { IAddAssignmentsRef } from "@ptypes/assignments/assisted/IAddAssignmentsRef";
import { AuthAndData } from "@context/authAndDataProvider";
import { UseBusinessUnitsByOfficial } from "../useBusinessUnitsByOfficial";
import { IUseAddAssignments } from "@ptypes/hooks/IUseAddAssignments";
import { withoutBusinessUnitsMessage } from "@config/assignments/generic/withoutBusinessUnitsMessage";
import { IBusinessEntry } from "@ptypes/assignments/IBusinessEntry";

const UseAddAssignments = (props: IUseAddAssignments) => {
  const { absentOfficial } = props;
  const { appData } = useContext(AuthAndData);

  const initialValues = {
    officialInCharge: {
      isValid: false,
      values: {
        official: "",
      },
    },
    businessUnitOfficial: { isValid: false, values: [] },
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] =
    useState<IAddAssignmentForms>(initialValues);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);
  const [showGoBackModal, setShowGoBackModal] = useState(false);
  const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);
  const [canRefresh, setCanRefresh] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [saveData, setSaveData] = useState<ISaveDataRequest>();
  const [selectedToggle, setSelectedToggle] = useState<IBusinessEntry[]>([]);
  const smallScreen = useMediaQuery(enviroment.IS_MOBILE_970);
  const { addFlag } = useFlag();
  const navigate = useNavigate();

  const { options: businessUnitsOptions, hasError } =
    UseBusinessUnitsByOfficial({ absentOfficial });

  useEffect(() => {
    if (businessUnitsOptions.length > 0) {
      setFormValues((prev) => ({
        ...prev,
        businessUnitOfficial: {
          ...prev.businessUnitOfficial,
          values: businessUnitsOptions,
        },
      }));
    }
  }, [businessUnitsOptions]);

  useEffect(() => {
    if (currentStep === 2 && hasError) {
      addFlag({
        title: withoutBusinessUnitsMessage.errorBusinessUnits.title,
        description: withoutBusinessUnitsMessage.errorBusinessUnits.description,
        appearance: withoutBusinessUnitsMessage.errorBusinessUnits
          .appearance as IFlagAppearance,
        duration: withoutBusinessUnitsMessage.errorBusinessUnits.duration,
      });
      setTimeout(function () {
        navigate("/assignments");
      }, 3500);
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 2 && businessUnitsOptions.length === 0) {
      addFlag({
        title: withoutBusinessUnitsMessage.withoutUnits.title,
        description: withoutBusinessUnitsMessage.withoutUnits.description,
        appearance: withoutBusinessUnitsMessage.withoutUnits
          .appearance as IFlagAppearance,
        duration: withoutBusinessUnitsMessage.withoutUnits.duration,
      });
      setTimeout(function () {
        navigate("/assignments");
      }, 3500);
    }
  }, [currentStep, businessUnitsOptions]);

  const officialInChargeRef = useRef<FormikProps<IOfficialInChargeEntry>>(null);

  const formReferences: IAddAssignmentsRef = {
    officialInCharge: officialInChargeRef,
  };

  const handleNextStep = () => {
    if (currentStep < addAssignmentsSteps.length) {
      if (officialInChargeRef.current) {
        setFormValues((prevValues) => ({
          ...prevValues,
          officialInCharge: {
            ...prevValues.officialInCharge,
            values: officialInChargeRef.current!.values,
          },
        }));
        setIsCurrentFormValid(officialInChargeRef.current.isValid);
        setCurrentStep(currentStep + 1);
      }
      if (currentStep === 2) {
        setFormValues((prev) => ({
          ...prev,
          businessUnitOfficial: {
            ...prev.businessUnitOfficial,
            values: selectedToggle ?? [],
          },
        }));
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleOpenModal = () => {
    const compare = compareObjects(initialValues, formValues);
    const compareOfficialCharge = compareObjects(
      officialInChargeRef.current?.initialValues,
      officialInChargeRef.current?.values
    );
    if (!compare || !compareOfficialCharge) {
      setShowGoBackModal(true);
    } else {
      navigate(-1);
    }
  };

  const handleCloseModal = () => {
    setShowGoBackModal(false);
  };

  const handleGoBack = () => {
    setCanRefresh(true);
    navigate(-1);
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const hasUnsavedChanges =
        !compareObjects(initialValues, formValues) ||
        (officialInChargeRef.current &&
          !compareObjects(
            officialInChargeRef.current.initialValues,
            officialInChargeRef.current.values
          ));

      if (hasUnsavedChanges) {
        event.preventDefault();
        setShowGoBackModal(!showGoBackModal);

        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [formValues, initialValues, officialInChargeRef, canRefresh]);

  const validateselectedToggle = selectedToggle?.some((unit) => unit.isActive === true)

  const formValid =( currentStep === 2 && !validateselectedToggle )|| !isCurrentFormValid;

  const handleSubmitClick = () => {
    setSaveData({
      applicationName: "",
      businessManagerCode: appData.businessManager.publicCode,
      businessUnitCode: appData.businessUnit.publicCode,
      description: addAssignmentsLabels.descriptionSaveData,
      entityName: "Assignments",
      requestDate: formatDate(new Date()),
      useCaseName: "AddAssignments",
      configurationRequestData: {},
    });
    setShowRequestProcessModal(!showRequestProcessModal);
  };

  return {
    businessUnitsOptions,
    currentStep,
    formValues,
    formReferences,
    formValid,
    showGoBackModal,
    smallScreen,
    isCurrentFormValid,
    showModal,
    showRequestProcessModal,
    saveData,
    handleToggleModal,
    handleNextStep,
    handlePreviousStep,
    setCurrentStep,
    setIsCurrentFormValid,
    handleGoBack,
    handleOpenModal,
    handleCloseModal,
    setShowModal,
    setShowRequestProcessModal,
    handleSubmitClick,
    setSelectedToggle,
  };
};

export { UseAddAssignments };

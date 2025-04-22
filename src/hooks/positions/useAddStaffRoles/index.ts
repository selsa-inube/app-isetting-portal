import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { FormikProps } from "formik";
import { IRoleForStaff } from "@ptypes/rolesForStaff";
import { useMediaQuery } from "@inubekit/inubekit";
import { addStaffRolesSteps } from "@config/positions/addPositions/assisted";
import { initalValuesPositions } from "@ptypes/positions/initialValues";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { AuthAndData } from "@context/authAndDataProvider";
import { formatDate } from "@utils/date/formatDate";

import { IFormEntry } from "@ptypes/assignmentForm/IFormEntry";
import { IGeneralInformationEntry } from "@ptypes/positions/assisted/IGeneralInformationEntry";
import { IFormAddPosition } from "@ptypes/positions/assisted/IFormAddPosition";
import { IDataToAssignmentFormEntry } from "@ptypes/positions/assisted/IDataToAssignmentFormEntry";

const UseAddStaffRoles = (rolesData: IRoleForStaff[] | undefined) => {
  const { appData } = useContext(AuthAndData);
  const [currentStep, setCurrentStep] = useState(1);
  const [saveData, setSaveData] = useState<ISaveDataRequest>();
  const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);
  const [showMultipurposeModal, setShowMultipurposeModal] = useState(false);
  const [showModalApplicationStatus, setShowModalApplicationStatus] =
    useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedToggle, setSelectedToggle] = useState<IFormEntry[]>();
  const [formValues, setFormValues] = useState<IFormAddPosition>({
    generalInformation: {
      isValid: false,
      values: initalValuesPositions.generalInformation,
    },
    rolesStaff: {
      isValid: false,
      values: [],
    },
    applicationStaff: {
      isValid: false,
      values: [],
    },
  });

  const navigate = useNavigate();
  const smallScreen = useMediaQuery("(max-width: 990px)");

  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);

  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  const disabled = !isCurrentFormValid;
  const dataToAssignmentFormEntry = (props: IDataToAssignmentFormEntry) => {
    const { dataOptions, idLabel, valueLabel, isActiveLabel } = props;
    return dataOptions.map((dataOption) => ({
      value: String(dataOption[valueLabel]),
      isActive: Boolean(dataOption[isActiveLabel] === "Y"),
      id: String(dataOption[idLabel]),
    }));
  };
  const roles = formValues.rolesStaff.values.map((role) => {
    const applicationStaff = rolesData?.find((app) => app.roleId === role.id);
    return {
      ...role,
      applicationStaff: applicationStaff?.applicationName,
    };
  });

  useEffect(() => {
    if (rolesData && rolesData.length > 0) {
      const transformedRolesData = rolesData.map((role) => ({
        id: role.roleId,
        value: role.roleName,
        isActive: role.isActive ?? false,
      }));

      const transformedApplicationData = rolesData.map((role) => ({
        id: role.application?.appId ?? "",
        value: role.application?.applicationName ?? "",
        isActive: role.isActive ?? false,
      }));
      setFormValues((prev) => ({
        ...prev,
        rolesStaff: {
          ...prev.rolesStaff,
          isValid: true,
          values: selectedToggle ? selectedToggle : transformedRolesData,
        },
        applicationStaff: {
          isValid: true,
          values: transformedApplicationData,
        },
      }));
    }
  }, [rolesData, selectedToggle]);

  const handleNextStep = () => {
    if (currentStep < addStaffRolesSteps.length) {
      if (
        currentStep === 2 &&
        rolesDataEndpoint.length === 0 &&
        !showMultipurposeModal
      ) {
        setShowMultipurposeModal(true);
        return;
      }

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

  const rolesDataEndpoint = formValues.rolesStaff.values
    .filter((role) => role.isActive)
    .map((role) => ({
      roleName: role.value,
    }));

  const handleSubmitClick = () => {
    handleToggleModal();
    setShowRequestProcessModal(!showRequestProcessModal);
    setSaveData({
      applicationName: "istaff",
      businessManagerCode: appData.businessManager.publicCode,
      businessUnitCode: appData.businessUnit.publicCode,
      description: "Solicitud de agregar un cargo",
      entityName: "Mission",
      requestDate: formatDate(new Date()),
      useCaseName: "AddMission",
      configurationRequestData: {
        missionName: formValues.generalInformation.values.namePosition,
        descriptionUse:
          formValues.generalInformation.values.descriptionPosition,
        MissionByRole: rolesDataEndpoint,
      },
    });
  };

  const handleSubmitClickApplication = () => {
    handleToggleModal();
    setShowModalApplicationStatus(!showRequestProcessModal);
    navigate("/privileges/positions");
  };

  return {
    currentStep,
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    selectedToggle,
    handleNextStep,
    showModalApplicationStatus,
    handleSubmitClick,
    showModal,
    handleToggleModal,
    handleToggleModalApplication,
    handlePreviousStep,
    setIsCurrentFormValid,
    setSelectedToggle,
    handleSubmitClickApplication,
    setCurrentStep,
    showRequestProcessModal,
    saveData,
    smallScreen,
    roles,
    setShowModal,
    navigate,
    disabled,
    setShowRequestProcessModal,
    showMultipurposeModal,
    setShowMultipurposeModal,
    dataToAssignmentFormEntry,
  };
};

export { UseAddStaffRoles };

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
import {
  IFormAddPosition,
  IGeneralInformationEntry,
} from "@pages/positions/tabs/positionsTabs/outlets/addPosition/types";
import { IEntry } from "@design/templates/assignmentForm/types";

const UseAddStaffRoles = (rolesData: IRoleForStaff[] | undefined) => {
  const { appData } = useContext(AuthAndData);
  const [currentStep, setCurrentStep] = useState(1);
  const [saveData, setSaveData] = useState<ISaveDataRequest>();
  const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);
  const [showModalApplicationStatus, setShowModalApplicationStatus] =
    useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedToggle, setSelectedToggle] = useState<IEntry[]>();
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

  const roles = formValues.rolesStaff.values.map((role) => {
    const applicationStaff = rolesData?.find((app) => app.roleId !== role.id);
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
      missionId: role.id,
      abbreviatedName: role.value,
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
        abbreviatedName: formValues.generalInformation.values.namePosition,
        descriptionUse:
          formValues.generalInformation.values.descriptionPosition,
        businessManagerStaffMissionByRole: rolesDataEndpoint,
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
  };
};

export { UseAddStaffRoles };

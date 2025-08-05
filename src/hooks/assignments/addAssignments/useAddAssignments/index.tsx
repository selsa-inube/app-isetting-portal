import { useEffect, useRef, useState } from "react";
import { FormikProps } from "formik";
import { useMediaQuery } from "@inubekit/inubekit";

import { stepsKeysAssignments } from "@enum/stepsKeysAssignments";
import { enviroment } from "@config/environment";
import { addAssignmentsSteps } from "@config/assignments/assisted/steps";
import { rolesByUnitLabels } from "@config/assignments/assisted/rolesByUnitLabels";
import { IBusinessEntry } from "@ptypes/assignments/IBusinessEntry";
import { IAddAssignmentForms } from "@ptypes/assignments/assisted/IAddAssignmentForms";
import { IOfficialInChargeEntry } from "@ptypes/assignments/assisted/IOfficialInChargeEntry";
import { IAddAssignmentsRef } from "@ptypes/assignments/assisted/IAddAssignmentsRef";
import { IUseAddAssignments } from "@ptypes/hooks/IUseAddAssignments";
import { IRolesByUnitEntry } from "@ptypes/assignments/assisted/IRolesByUnitEntry";
import { IReasonAndCoverageEntry } from "@ptypes/assignments/assisted/IReasonAndCoverageEntry";
import { UseBusinessUnitsByOfficial } from "../../useBusinessUnitsByOfficial";
import { useAssignmentNavigation } from "../useAssignmentNavigation";

const useAddAssignments = (props: IUseAddAssignments) => {
  const { absentOfficial } = props;

  const initialValues = {
    officialInCharge: {
      isValid: false,
      values: {
        official: "",
      },
    },
    businessUnitOfficial: { isValid: false, values: [] },
    rolesByBusinessUnits: {
      isValid: false,
      values: [],
    },
    reasonAndCoverage: {
      isValid: false,
      values: {
        dateFrom: "",
        dateTo: "",
        descriptionReason: "",
      },
    },
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] =
    useState<IAddAssignmentForms>(initialValues);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedToggle, setSelectedToggle] = useState<IBusinessEntry[]>([]);
  const smallScreen = useMediaQuery(enviroment.IS_MOBILE_970);

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
    const data = selectedToggle
      .filter((unit) => unit.isActive)
      .map((unit) => ({
        id: unit.id ?? "",
        name: unit.value ?? "",
        publicCode: unit.publicCode ?? "",
        iconButton: rolesByUnitLabels.allActiveIcon,
        actionButton: rolesByUnitLabels.allActive,
        roles: unit.roleNames
          ? unit.roleNames.map((rol) => ({
              id: `${unit.id}-${rol}`,
              value: rol,
              isActive: false,
            }))
          : [],
      }));

    setFormValues((prev) => ({
      ...prev,
      rolesByBusinessUnits: {
        ...prev.rolesByBusinessUnits,
        values: data,
      },
    }));
  }, [selectedToggle]);
  const [rolesSelected, setRolesSelected] = useState<IRolesByUnitEntry[]>(
    formValues.rolesByBusinessUnits.values
  );
  const officialInChargeRef = useRef<FormikProps<IOfficialInChargeEntry>>(null);
  const reasonAndCoverageRef =
    useRef<FormikProps<IReasonAndCoverageEntry>>(null);

  const {
    validateSelectedToggle,
    showGoBackModal,
    saveData,
    showRequestProcessModal,
    setShowRequestProcessModal,
    handleSubmitClick,
    handleGoBack,
    handleOpenModal,
    handleToggleModal,
    handleCloseModal,
  } = useAssignmentNavigation({
    currentStep,
    hasError,
    businessUnitsOptions,
    initialValues,
    formValues,
    showModal,
    officialInChargeRef,
    selectedToggle,
    setShowModal,
    absentOfficial,
  });

  const formReferences: IAddAssignmentsRef = {
    officialInCharge: officialInChargeRef,
    reasonAndCoverage: reasonAndCoverageRef,
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

      if (reasonAndCoverageRef.current) {
        setFormValues((prevValues) => ({
          ...prevValues,
          reasonAndCoverage: {
            ...prevValues.reasonAndCoverage,
            values: reasonAndCoverageRef.current!.values,
          },
        }));
        setIsCurrentFormValid(reasonAndCoverageRef.current.isValid);
        setCurrentStep(currentStep + 1);
      }
      if (currentStep === stepsKeysAssignments.BUSINESS_UNITS_ASSIGNMENT) {
        setFormValues((prev) => ({
          ...prev,
          businessUnitOfficial: {
            ...prev.businessUnitOfficial,
            values: selectedToggle ?? [],
          },
        }));
        setCurrentStep(currentStep + 1);
      }

      if (currentStep === stepsKeysAssignments.ROLES_BY_BUSINESS_UNIT) {
        setFormValues((prev) => ({
          ...prev,
          rolesByBusinessUnits: {
            ...prev.rolesByBusinessUnits,
            values: rolesSelected,
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

  const allRoles = rolesSelected.flatMap((unit) => unit.roles || []);

  const globalAllActiveRoles =
    allRoles.length > 0 && allRoles.every((role) => !role.isActive);

  const allUnitsHaveActiveRole = rolesSelected.every(
    (unit) => unit.roles && unit.roles.some((role) => role.isActive)
  );

  const formValid =
    (currentStep === stepsKeysAssignments.BUSINESS_UNITS_ASSIGNMENT &&
      !validateSelectedToggle) ||
    (currentStep === stepsKeysAssignments.ROLES_BY_BUSINESS_UNIT &&
      (globalAllActiveRoles || !allUnitsHaveActiveRole)) ||
    !isCurrentFormValid;

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
    setRolesSelected,
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

export { useAddAssignments };

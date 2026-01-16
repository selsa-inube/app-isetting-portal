import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { IFlagAppearance, useFlag } from "@inubekit/inubekit";
import { compareObjects } from "@utils/compareObjects";
import { withoutBusinessUnitsMessage } from "@config/assignments/generic/withoutBusinessUnitsMessage";
import { IUseAssignmentNavigation } from "@ptypes/hooks/IUseAssignmentNavigation";
import { formatDate } from "@utils/date/formatDate";
import { AuthAndData } from "@context/authAndDataProvider";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { addAssignmentsLabels } from "@config/assignments/assisted/addAssignmentsLabels";
import { ERequestType } from "@src/enum/request/requestType";

const useAssignmentNavigation = (props: IUseAssignmentNavigation) => {
  const {
    currentStep,
    hasError,
    businessUnitsOptions,
    initialValues,
    formValues,
    showModal,
    officialInChargeRef,
    selectedToggle,
    absentOfficial,
    setShowModal,
  } = props;

  const { appData } = useContext(AuthAndData);
  const [canRefresh, setCanRefresh] = useState<boolean>(false);
  const [showGoBackModal, setShowGoBackModal] = useState(false);
  const [saveData, setSaveData] = useState<ISaveDataRequest>();

  const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);
  const { addFlag } = useFlag();
  const navigate = useNavigate();
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

  const validateSelectedToggle = selectedToggle?.some(
    (unit) => unit.isActive === true
  );

  const handleSubmitClick = () => {
    const { dateFrom, dateTo } = formValues.reasonAndCoverage.values;

    const temporaryRoles = formValues.rolesByBusinessUnits.values
      .filter((unit) => unit?.publicCode)
      .flatMap((unit) => {
        const roles = unit.roles || [];

        return roles
          .filter((rol) => rol.isActive)
          .map((rol) => ({
            roleName: rol?.value,
            businessUnitName: unit.publicCode,
            businessUnitCode: unit.publicCode,
            startDate: dateFrom,
            endDate: dateTo,
          }));
      });

    setSaveData({
      applicationName: "",
      businessManagerCode: appData.businessManager.publicCode,
      businessUnitCode: appData.businessUnit.publicCode,
      description: addAssignmentsLabels.descriptionSaveData,
      entityName: "Assignments",
      requestDate: formatDate(new Date()),
      useCaseName: "AddAssignments",
      requestType: ERequestType.ADD,
      configurationRequestData: {
        nameOfAbsentStaff: absentOfficial,
        assignmentDate: dateFrom,
        assignmentEndDate: dateTo,
        staffName: formValues.officialInCharge.values.official,
        staffLastName: formValues.officialInCharge.values.official,
        staffIdentificationNumber: "",
        temporaryRolesByBusinessUnit: temporaryRoles,
      },
    });
    setShowRequestProcessModal(!showRequestProcessModal);
  };

  return {
    validateSelectedToggle,
    showGoBackModal,
    saveData,
    showRequestProcessModal,
    handleSubmitClick,
    handleGoBack,
    handleOpenModal,
    handleToggleModal,
    handleCloseModal,
    setShowRequestProcessModal,
  };
};

export { useAssignmentNavigation };

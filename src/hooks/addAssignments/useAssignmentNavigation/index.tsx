import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IFlagAppearance, useFlag } from "@inubekit/inubekit";
import { compareObjects } from "@utils/compareObjects";
import { withoutBusinessUnitsMessage } from "@config/assignments/generic/withoutBusinessUnitsMessage";
import { IUseAssignmentNavigation } from "@ptypes/hooks/IUseAssignmentNavigation";

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
    setShowModal,
  } = props;
  const [canRefresh, setCanRefresh] = useState<boolean>(false);
  const [showGoBackModal, setShowGoBackModal] = useState(false);
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

  const validateselectedToggle = selectedToggle?.some(
    (unit) => unit.isActive === true
  );

  return {
    validateselectedToggle,
    showGoBackModal,
    handleGoBack,
    handleOpenModal,
    handleToggleModal,
    handleCloseModal,
  };
};

export { useAssignmentNavigation };

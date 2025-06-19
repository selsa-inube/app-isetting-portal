import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { FormikProps } from "formik";

import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { formatDate } from "@utils/date/formatDate";
import { IFormAddMission } from "@ptypes/missions/assisted/IFormAddMission";
import { IGeneralInformationEntry } from "@ptypes/missions/assisted/IGeneralInformationEntry";
import { editMissionTabsConfig } from "@config/missions/missionTab/edit/tabs";
import { IUseEditMission } from "@ptypes/hooks/missions/IUseEditMission";
import { useNavigate } from "react-router-dom";
import { compareObjects } from "@utils/compareObjects";
import { jsonLabels } from "@config/jsonlLabels";

const UseEditMission = (props: IUseEditMission) => {
  const { data, appData } = props;
  const normalizeGeneralData = {
    missionId: data.missionId,
    nameMission: data.missionName,
    descriptionMission: data.descriptionUse,
  };

  const initialFormValues = {
    generalInformation: {
      isValid: false,
      values: normalizeGeneralData,
    },
  };

  const [isSelected, setIsSelected] = useState<string>(
    editMissionTabsConfig.generalInformation.id
  );

  const [formValues, setFormValues] =
    useState<IFormAddMission>(initialFormValues);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);
  const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);
  const [saveData, setSaveData] = useState<ISaveDataRequest>();
  const [errorFetchSaveData, setErrorFetchSaveData] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showGoBackModal, setShowGoBackModal] = useState(false);
  const [showEditedModal, setShowEditedModal] = useState(false);
    const [canRefresh, setCanRefresh] = useState(false);
  const smallScreen = useMediaQuery("(max-width: 990px)");

    const navigate = useNavigate();
  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  const onSubmit = () => {
    const configurationRequestData: {
      missionId: string;
      abbreviatedName?: string;
      descriptionUse?: string;
    } = {
      missionId: data.missionId,
    };

    if (
      generalInformationRef.current?.values.nameMission !== undefined &&
      (generalInformationRef.current?.values.nameMission !== data.missionName ||
        generalInformationRef.current?.values.descriptionMission !==
          data.descriptionUse)
    ) {
      configurationRequestData.abbreviatedName =
        generalInformationRef.current?.values.nameMission ?? "";
      configurationRequestData.descriptionUse =
        generalInformationRef.current?.values.descriptionMission ?? "";
    }

    setSaveData({
      applicationName: "istaff",
      businessManagerCode: appData.businessManager.publicCode,
      description: "Solicitud de modificación de un cargo del operador",
      entityName: "Mission",
      requestDate: formatDate(new Date()),
      useCaseName: "ModifyMission",

      configurationRequestData: {
        modifyJustification: jsonLabels(appData.user.userAccount),
        missionId: data.missionId,
        missionName: formValues.generalInformation.values.nameMission,
        descriptionUse: formValues.generalInformation.values.descriptionMission,
      },
    });
    setShowRequestProcessModal(true);
  };

    useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const hasUnsavedChanges =
        !compareObjects(initialFormValues, formValues) ||
        (generalInformationRef.current &&
          !compareObjects(
            generalInformationRef.current.initialValues,
            generalInformationRef.current.values,
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
  }, [formValues, initialFormValues, generalInformationRef, canRefresh]);

    const handleToggleEditedModal = () => {
    setShowEditedModal(!showEditedModal);
  }

  const handleReset = () => {
   setShowGoBackModal(true);
  };

   const handleEditedModal = () => {
    setShowEditedModal(false);
    onSubmit();
  };

    const handleGoBack = () => {
    setCanRefresh(true);
    navigate(-1);
  };

   const handleCloseGoBackModal = () => {
    setShowGoBackModal(false);
  };

  useEffect(() => {
    if (generalInformationRef.current?.values) {
      setFormValues((prev) => ({
        ...prev,
        generalInformation: {
          isValid: false,
          values: generalInformationRef.current
            ?.values as unknown as typeof formValues.generalInformation.values,
        },
      }));
    }
  }, [generalInformationRef.current?.values]);

  const handleTabChange = (tabId: string) => {
    if (generalInformationRef.current?.values) {
      setFormValues((prev) => ({
        ...prev,
        generalInformation: {
          isValid: false,
          values: generalInformationRef.current
            ?.values as unknown as typeof formValues.generalInformation.values,
        },
      }));
    }
    setIsSelected(tabId);
  };

  const showGeneralInfo =
    isSelected === editMissionTabsConfig.generalInformation.id;

  return {
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    isSelected,
    saveData,
    showRequestProcessModal,
    showModal,
    errorFetchSaveData,
    smallScreen,
    showGeneralInfo,
    showEditedModal,
    showGoBackModal,
    handleToggleEditedModal,
    handleEditedModal,
    handleCloseGoBackModal,
    handleGoBack,
    handleReset,
    onSubmit,
    setIsCurrentFormValid,
    handleTabChange,
    setShowRequestProcessModal,
    setErrorFetchSaveData,
    setShowModal,
  };
};

export { UseEditMission };

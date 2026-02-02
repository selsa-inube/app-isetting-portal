import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { object } from "yup";
import { useFormik } from "formik";
import { IOption, useMediaQuery } from "@inubekit/inubekit";
import { ChangeToRequestTab } from "@context/changeToRequestTab";
import { AuthAndData } from "@context/authAndDataProvider";
import { getRequestsInProgress } from "@services/requestInProgress/getRequestsInProgress";
import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { ERequestPosition } from "@enum/requestPosition";
import { positionsTabsConfig } from "@config/positionsTabs/tabs";
import { mediaQueryTabletMain } from "@config/environment";
import { IRequestsInProgress } from "@ptypes/requestsInProgress/IRequestsInProgress";
import { IPositionTabsConfig } from "@ptypes/positions/IPositionTabsConfig";
import { useBusinessUnits } from "@hooks/useBusinessUnits";

const usePositionsTabs = () => {
  const smallScreen = useMediaQuery(mediaQueryTabletMain);
  const tabs = positionsTabsConfig(smallScreen);
  const [isSelected, setIsSelected] = useState<string>(tabs.cargos.id);
  const { changeTab, setChangeTab } = useContext(ChangeToRequestTab);
  const [requestsInProgress, setRequestsInProgress] = useState<
    IRequestsInProgress[]
  >([]);
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalUnits, setShowModalUnits] = useState(false);
  const [unit, setUnit] = useState<string>("");
  const [showInfoModal, setShowInfoModal] = useState(false);
  const widthFirstColumn = smallScreen ? 60 : 20;

  const { appData } = useContext(AuthAndData);

  const navigate = useNavigate();

  const { businessUnits } = useBusinessUnits();

  useEffect(() => {
    if (businessUnits.length === 0) return;
    if (businessUnits.length > 1) {
      setShowModalUnits(true);
    }

    if (businessUnits.length === 1) {
      setShowModalUnits(false);
    }
  }, [businessUnits]);

  const initialValues = {
    businessUnits: "",
  };

  const createValidationSchema = () =>
    object().shape({
      businessUnits: validationRules.string.required(
        validationMessages.required,
      ),
    });

  const validationSchema = createValidationSchema();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: () => {},
  });

  const comparisonData = Boolean(
    formik.values.businessUnits === initialValues.businessUnits,
  );

  const handleChange = (name: string, value: string) => {
    formik.setFieldValue(name, value).then(() => {
      formik.validateForm().then((errors) => {
        formik.setErrors(errors);
      });
    });
  };

  const handleCloseModalUnits = () => {
    setShowModalUnits(!showModalUnits);
    navigate("/");
  };

  const handleClickUnits = () => {
    const dataBusinessUnit = businessUnits.find(
      (option) => option.publicCode === formik.values.businessUnits,
    );

    setShowModalUnits(!showModalUnits);
    setUnit(dataBusinessUnit?.publicCode || "");
  };

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };

  const handleToggleMenuInvitation = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleCloseMenuInvitation = () => {
    setShowMenu(false);
  };

  const onToggleModal = () => {
    setShowModal(!showModal);
  };

  const onToggleInfoModal = () => {
    setShowInfoModal(!showInfoModal);
  };
  const onCloseMenu = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (changeTab) {
      setIsSelected(tabs.requestsInProgress.id);
    }
  }, [changeTab]);

  useEffect(() => {
    if (isSelected === tabs.requestsInProgress.id) {
      setChangeTab(false);
      setIsSelected(tabs.requestsInProgress.id);
    }
  }, [isSelected]);

  useEffect(() => {
    const fetchRequestsInProgressData = async () => {
      try {
        if (appData.businessManager.publicCode.length > 0) {
          const data = await getRequestsInProgress(
            ERequestPosition.POSITIONS,
            appData.businessManager.publicCode,
            appData.token,
            appData.businessUnit.publicCode,
          );
          setRequestsInProgress(data);
        }
      } catch (error) {
        console.info(error);
      }
    };

    fetchRequestsInProgressData();
  }, [appData.businessManager.publicCode, appData.businessUnit.publicCode]);

  const filteredTabsConfig = Object.keys(tabs).reduce((filteredtabs, key) => {
    const tab = tabs[key as keyof typeof tabs];

    if (
      key === tabs.requestsInProgress.id &&
      requestsInProgress &&
      requestsInProgress.length === 0
    ) {
      return filteredtabs;
    }

    if (tab !== undefined) {
      filteredtabs[key as keyof IPositionTabsConfig] = tab;
    }
    return filteredtabs;
  }, {} as IPositionTabsConfig);

  const positionTab = Object.values(filteredTabsConfig);

  const showPositionsTab = isSelected === tabs.cargos.id;

  const showRequestTab = isSelected === tabs.requestsInProgress.id;

  const columnWidths = [widthFirstColumn, 55, 23];

  const optionsUnits: IOption[] = businessUnits.map((card) => ({
    id: card.publicCode,
    label: card.abbreviatedName,
    value: card.publicCode,
  }));

  return {
    isSelected,
    handleTabChange,
    smallScreen,
    showMenu,
    showModal,
    showInfoModal,
    showModalUnits,
    formik,
    businessUnits,
    optionsUnits,
    positionTab,
    showPositionsTab,
    showRequestTab,
    handleClickUnits,
    handleCloseModalUnits,
    onToggleInfoModal,
    onCloseMenu,
    onToggleModal,
    handleToggleMenuInvitation,
    handleCloseMenuInvitation,
    handleChange,
    columnWidths,
    comparisonData,
    unit,
  };
};

export { usePositionsTabs };

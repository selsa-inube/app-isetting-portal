import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { object } from "yup";
import { useFormik } from "formik";
import { useMediaQuery } from "@inubekit/inubekit";
import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { positionsTabsConfig } from "@config/positionsTabs/tabs";
import { ChangeToRequestTab } from "@context/changeToRequestTab";
import { useOptionsByBusinessUnit } from "@hooks/staffPortal/useOptionsByBusinessUnit";
import { AuthAndData } from "@context/authAndDataProvider";

const UsePositionsTabs = () => {
  const [isSelected, setIsSelected] = useState<string>();
  const { changeTab, setChangeTab } = useContext(ChangeToRequestTab);
  const smallScreen = useMediaQuery("(max-width: 990px)");
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalUnits, setShowModalUnits] = useState(false);
  const [unit, setUnit] = useState<string>("");
  const [showInfoModal, setShowInfoModal] = useState(false);
  const smallScreenTab = useMediaQuery("(max-width: 450px)");
  const widthFirstColumn = smallScreen ? 60 : 20;

  const { appData, setBusinessUnitSigla } =
    useContext(AuthAndData);

    useEffect(() => {
    setBusinessUnitSigla("");
  }
  , []);

  const navigate = useNavigate();

  const {
    optionsSelectUnits: optionsUnits,
    optionsBusinessUnit,
    loading,
  } = useOptionsByBusinessUnit({
    publicCode: appData.portal.publicCode,
    userAccount: appData.user.userAccount,
  });

  useEffect(() => {
    if (optionsBusinessUnit.length === 0) return;
    if (optionsBusinessUnit.length > 1) {
      setShowModalUnits(true);
    }

    if (optionsBusinessUnit.length === 1) {
      setShowModalUnits(false);
      const selectJSON = JSON.stringify(optionsBusinessUnit[0]);
      setBusinessUnitSigla(selectJSON);
    }
  }, [optionsBusinessUnit]);

  const initialValues = {
    businessUnits: "",
  };

  const createValidationSchema = () =>
    object().shape({
      businessUnits: validationRules.string.required(
        validationMessages.required
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
    formik.values.businessUnits === initialValues.businessUnits
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
    const dataBusinessUnit = optionsBusinessUnit.find(
      (option) => option.publicCode === formik.values.businessUnits
    );
    const selectJSON = JSON.stringify(dataBusinessUnit);
    setBusinessUnitSigla(selectJSON);
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
      setIsSelected(positionsTabsConfig.requestsInProgress.id);
    }
  }, [changeTab]);

  useEffect(() => {
    if (isSelected === positionsTabsConfig.requestsInProgress.id) {
      setChangeTab(false);
      setIsSelected(positionsTabsConfig.requestsInProgress.id);
    }
  }, [isSelected]);

  return {
    isSelected,
    handleTabChange,
    smallScreen,
    smallScreenTab,
    showMenu,
    showModal,
    showInfoModal,
    showModalUnits,
    formik,
    optionsUnits,
    optionsBusinessUnit,
    loading,
    handleClickUnits,
    handleCloseModalUnits,
    onToggleInfoModal,
    onCloseMenu,
    onToggleModal,
    handleToggleMenuInvitation,
    handleCloseMenuInvitation,
    handleChange,
    widthFirstColumn,
    comparisonData,
    unit,
  };
};

export { UsePositionsTabs };

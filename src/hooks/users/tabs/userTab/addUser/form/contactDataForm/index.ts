import { useEffect, useImperativeHandle, useState } from "react";
import { useFormik } from "formik";
import { object } from "yup";

import { useMediaQuery } from "@inubekit/inubekit";

import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { basic } from "@design/tokens";

import { mediaQueryTabletMain } from "@config/environment";
import { IUseContactDataForm } from "@ptypes/hooks/IUseContactDataForm";
import { contactDataConfig } from "@config/users/addUsers/form/contactData";

const useContactDataForm = (props: IUseContactDataForm) => {
  const {
    initialValues,
    ref,
    onSubmit,
    onFormValid,
    loading,
    editDataOption,
    initialContactData,
  } = props;

  const createValidationSchema = () =>
    object().shape({
      email: validationRules.string.required(validationMessages.required),
      phone: validationRules.string.required(validationMessages.required),
    });

  const validationSchema = createValidationSchema();
  const isMobile = useMediaQuery(mediaQueryTabletMain);
  const [isDisabledButton, setIsDisabledButton] = useState(false);
  const mobilePadding = isMobile ? basic.spacing.s150 : basic.spacing.s300;
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    onSubmit: onSubmit ?? (() => true),
  });
  const componentSize = isMobile ? "column" : "row";
  useImperativeHandle(ref, () => formik);

  useEffect(() => {
    if (onFormValid) {
      formik.validateForm().then((errors) => {
        const isFormValid = Object.keys(errors).length === 0;
        onFormValid(isFormValid);
      });
    }
  }, [formik.values, onFormValid]);
  const valuesEqualBoton =
    JSON.stringify(initialContactData) === JSON.stringify(formik.values);

  const valuesEmpty = Object.values(formik.values).every(
    (value) => value === "" || value === null || value === undefined
  );

  useEffect(() => {
    const updateButton = () => {
      if (editDataOption) {
        setIsDisabledButton(!formik.isValid || valuesEmpty || valuesEqualBoton);
      } else {
        setIsDisabledButton(!formik.isValid);
      }
    };
    updateButton();
  }, [
    formik.values,
    loading,
    initialContactData,
    formik.isValid,
    initialValues,
    editDataOption,
  ]);
  const labelButtonNext = editDataOption
    ? contactDataConfig.editButtonLabel
    : contactDataConfig.nextButtonLabel;

  const buttonDisabledState = editDataOption
    ? isDisabledButton && !loading
    : isDisabledButton;

  return {
    formik,
    componentSize,
    mobilePadding,
    labelButtonNext,
    buttonDisabledState,
  };
};

export { useContactDataForm };

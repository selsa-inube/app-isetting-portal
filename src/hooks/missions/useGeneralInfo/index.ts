import { useEffect, useImperativeHandle, useState } from "react";
import { useFormik } from "formik";
import { object } from "yup";
import { useMediaQuery } from "@inubekit/inubekit";
import { validationMessages } from "@validations/validationMessages";
import { validationRules } from "@validations/validationRules";
import { generalInfoLabels } from "@config/missions/missionTab/generalInfoLabels";
import { IUseGeneralInfo } from "@ptypes/hooks/missions/IUseGeneralInfo";

const useGeneralInfo = (props: IUseGeneralInfo) => {
  const { initialValues, ref,editDataOption, onSubmit, onFormValid } = props;

    const [isDisabledButton, setIsDisabledButton] = useState(false);
  const createValidationSchema = () =>
    object().shape({
      nameMission: validationRules.string.required(validationMessages.required),
      descriptionMission: validationRules.string.required(
        validationMessages.required
      ),
    });

  const validationSchema = createValidationSchema();

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    onSubmit: onSubmit ?? (() => true),
  });

  useImperativeHandle(ref, () => formik);

  useEffect(() => {
    if (onFormValid) {
      formik.validateForm().then((errors) => {
        const isFormValid = Object.keys(errors).length === 0;
        onFormValid(isFormValid);
      });
    }
  }, [formik.values, onFormValid]);

    const valuesEqual =
    JSON.stringify(initialValues) === JSON.stringify(formik.values);

  const valuesEmpty = Object.values(formik.values).every(
    (value) => value === "" || value === null || value === undefined,
  );

    useEffect(() => {
    const updateButton = () => {
      if (editDataOption) {
        setIsDisabledButton(!formik.isValid || valuesEmpty || valuesEqual);
      } else {
        setIsDisabledButton(!formik.isValid);
      }
    };
    updateButton();
  }, [formik.values, formik.isValid, initialValues, editDataOption]);

  const isMobile = useMediaQuery("(max-width: 990px)");

    const labelButtonPrevious = editDataOption
    ? generalInfoLabels.cancel
    : generalInfoLabels.previous;

  const labelButtonNext = editDataOption
    ? generalInfoLabels.send
    : generalInfoLabels.next;

  return {
    formik,
    isMobile,
    labelButtonNext,
    labelButtonPrevious,
    isDisabledButton,

  };
};

export { useGeneralInfo };

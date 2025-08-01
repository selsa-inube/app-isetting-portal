import { useEffect, useImperativeHandle, useState } from "react";
import { useFormik } from "formik";
import { useMediaQuery } from "@inubekit/inubekit";
import { object } from "yup";

import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { formatDate } from "@utils/date/formatDate";
import { enviroment } from "@config/environment";
import { addAssignmentsLabels } from "@config/assignments/assisted/addAssignmentsLabels";
import { IUseReasonAndCoverageForm } from "@ptypes/assignments/assisted/IUseReasonAndCoverageForm";

const useReasonAndCoverageForm = (props: IUseReasonAndCoverageForm) => {
  const {
    ref,
    editDataOption,
    loading,
    onSubmit,
    onFormValid,
    initialValues,
    initialData,
  } = props;

  const dateCurrent = String(formatDate(new Date()));

  const [dateLimit, setDateLimit] = useState<string>("");

  const createValidationSchema = () =>
    object().shape({
      dateFrom: validationRules.string
        .required(validationMessages.required)
        .test(
          "max-date",
          "La fecha no puede ser menor a la actual",
          (value) => {
            if (!value) return true;
            return value >= dateCurrent;
          }
        ),
      dateTo: validationRules.string
        .required(validationMessages.required)
        .test(
          "max-date",
          "La fecha no puede ser menor a la fecha desde",
          (value) => {
            if (!value) return true;
            return value >= dateLimit;
          }
        ),
      descriptionReason: validationRules.string.required(
        validationMessages.required
      ),
    });

  const validationSchema = createValidationSchema();

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    validateOnBlur: true,
    onSubmit: onSubmit ?? (() => true),
  });

  const [isDisabledButton, setIsDisabledButton] = useState(false);

  const isMobile = useMediaQuery(enviroment.IS_MOBILE_970);

  useImperativeHandle(ref, () => formik);

  useEffect(() => {
    if (formik.values.dateFrom < dateCurrent  ) {
      setDateLimit("");
      formik.setFieldValue("dateTo", "");
    }
    if (formik.values.dateFrom.length > 0) {
      setDateLimit(formik.values.dateFrom);
    }
  }, [formik.values.dateFrom]);

  useEffect(() => {
    if (onFormValid) {
      formik.validateForm().then((errors) => {
        const isFormValid = Object.keys(errors).length === 0;
        onFormValid(isFormValid);
      });
    }
  }, [formik.values, onFormValid]);

  const valuesEmpty = Object.values(formik.values).every(
    (value) => value === "" || value === null || value === undefined
  );

  const valuesEqualBoton =
    JSON.stringify(initialData) === JSON.stringify(formik.values);

  useEffect(() => {
    const updateButton = () => {
      if (editDataOption) {
        setIsDisabledButton(!formik.isValid || valuesEmpty || valuesEqualBoton);
      } else {
        setIsDisabledButton(!formik.isValid);
      }
    };
    updateButton();
  }, [formik.values, loading, formik.isValid, initialValues, editDataOption]);

  const isDisabledDateTo = Boolean(
    formik.values.dateFrom.length === 0 || formik.values.dateFrom < dateCurrent
  );

  const labelButtonPrevious = editDataOption
    ? addAssignmentsLabels.cancelButton
    : addAssignmentsLabels.previousButton;

  const labelButtonNext = editDataOption
    ? addAssignmentsLabels.sendButton
    : addAssignmentsLabels.nextButton;

  return {
    formik,
    isMobile,
    isDisabledButton,
    labelButtonPrevious,
    labelButtonNext,
    isDisabledDateTo,
  };
};

export { useReasonAndCoverageForm };

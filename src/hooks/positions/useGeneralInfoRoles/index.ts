import { useEffect, useImperativeHandle, useState } from "react";
import { useFormik } from "formik";
import { object } from "yup";
import { useMediaQuery } from "@inubekit/inubekit";
import { validationMessages } from "@validations/validationMessages";
import { validationRules } from "@validations/validationRules";
import { labels } from "@config/positions/assistedText";
import { mediaQueryTabletMain } from "@config/environment";
import { IUseGeneralInfoCreditLineForm } from "@ptypes/hooks/IUseGeneralInfoCreditLineForm";

const useGeneralInfoCreditLineForm = (props: IUseGeneralInfoCreditLineForm) => {
  const { initialValues, ref, onSubmit, onFormValid, editDataOption } = props;
  const createValidationSchema = () =>
    object().shape({
      namePosition: validationRules.string.required(
        validationMessages.required
      ),
      descriptionPosition: validationRules.string.required(
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

  const [isDisabledButton, setIsDisabledButton] = useState(false);

  const valuesEqualButton =
    JSON.stringify(initialValues) === JSON.stringify(formik.values);

  useEffect(() => {
    if (onFormValid) {
      formik.validateForm().then((errors) => {
        const isFormValid = Object.keys(errors).length === 0;
        onFormValid(isFormValid);
      });
    }
  }, [formik.values, onFormValid]);

  const isMobile = useMediaQuery(mediaQueryTabletMain);

  const valuesEmpty = Object.values(formik.values).every(
    (value) => value === "" || value === null || value === undefined
  );

  useEffect(() => {
    const updateButton = () => {
      if (editDataOption) {
        setIsDisabledButton(
          !formik.isValid || valuesEmpty || valuesEqualButton
        );
      } else {
        setIsDisabledButton(!formik.isValid);
      }
    };
    updateButton();
  }, [formik.values, formik.isValid, initialValues, editDataOption]);

  const labelButtonNext = editDataOption
    ? labels.saveButton
    : labels.nextButton;

  return {
    formik,
    isMobile,
    valuesEqualButton,
    labelButtonNext,
    isDisabledButton,
  };
};

export { useGeneralInfoCreditLineForm };

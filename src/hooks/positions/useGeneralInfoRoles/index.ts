import { useEffect, useImperativeHandle } from "react";
import { FormikProps, useFormik } from "formik";
import { object } from "yup";
import { useMediaQuery } from "@inubekit/inubekit";
import { validationMessages } from "@validations/validationMessages";
import { validationRules } from "@validations/validationRules";
import { IGeneralInformationEntry } from "@ptypes/positions/assisted/IGeneralInformationEntry";

const UseGeneralInfoCreditLineForm = (
  initialValues: IGeneralInformationEntry,
  ref: React.ForwardedRef<FormikProps<IGeneralInformationEntry>>,
  onSubmit: ((values: IGeneralInformationEntry) => void) | undefined,
  onFormValid: React.Dispatch<React.SetStateAction<boolean>> | undefined
) => {
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

  useEffect(() => {
    if (onFormValid) {
      formik.validateForm().then((errors) => {
        const isFormValid = Object.keys(errors).length === 0;
        onFormValid(isFormValid);
      });
    }
  }, [formik.values, onFormValid]);

  const isMobile = useMediaQuery("(max-width: 990px)");

  return {
    formik,
    isMobile,
  };
};

export { UseGeneralInfoCreditLineForm };

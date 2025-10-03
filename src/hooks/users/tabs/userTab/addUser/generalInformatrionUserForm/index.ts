import { enviroment } from "@config/environment";
import { generalInformationConfig } from "@config/users/addUsers/form/generalStep";
import { basic } from "@design/tokens";
import { useMediaQuery } from "@inubekit/inubekit";
import { IUseAddUserGeneralInformationStep } from "@ptypes/hooks/IUseAddUserGeneralInformationStep";
import { validationMessages } from "@validations/validationMessages";
import { validationRules } from "@validations/validationRules";
import { useFormik } from "formik";
import { useEffect, useImperativeHandle, useState } from "react";
import { object } from "yup";

const useGeneralInformationUserForm = (
  props: IUseAddUserGeneralInformationStep
) => {
  const { initialValues, ref, onSubmit, onFormValid } = props;

  const [isDisabledButton] = useState(false);
  const createValidationSchema = () =>
    object().shape({
      firstName: validationRules.string.required(validationMessages.required),
      application: validationRules.string.required(validationMessages.required),
      description: validationRules.string.required(validationMessages.required),
    });

  const validationSchema = createValidationSchema();

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    onSubmit: onSubmit ?? (() => true),
  });
  const isMobile = useMediaQuery(enviroment.IS_MOBILE_970);
  const mobilePadding = isMobile ? basic.spacing.s150 : basic.spacing.s300;
  useImperativeHandle(ref, () => formik);

  useEffect(() => {
    if (onFormValid) {
      formik.validateForm().then((errors) => {
        const isFormValid = Object.keys(errors).length === 0;
        onFormValid(isFormValid);
      });
    }
  }, [formik.values, onFormValid]);

  const labelButtonNext = generalInformationConfig.buttonLabel;

  const buttonDisabledState = isDisabledButton;
  return {
    formik,
    mobilePadding,
    labelButtonNext,
    buttonDisabledState,
  };
};
export { useGeneralInformationUserForm };

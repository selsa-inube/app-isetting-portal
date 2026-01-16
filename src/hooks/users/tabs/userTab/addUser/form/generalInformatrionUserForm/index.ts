import { mediaQueryTabletMain } from "@config/environment";
import { generalInformationConfig } from "@config/users/addUsers/form/generalStep";
import { basic } from "@design/tokens";
import { IOption, useMediaQuery } from "@inubekit/inubekit";
import { IUseAddUserGeneralInformationStep } from "@ptypes/hooks/IUseAddUserGeneralInformationStep";
import { validationMessages } from "@validations/validationMessages";
import { validationRules } from "@validations/validationRules";
import { useFormik } from "formik";
import { useContext, useEffect, useImperativeHandle, useState } from "react";
import { object } from "yup";
import { useEnumerators } from "../../enumerators";
import { ESelectOptions } from "@enum/user/getEnumeratos";
import { AuthAndData } from "@context/authAndDataProvider";
import { II18n } from "@ptypes/users/tabs/userTab/addUser/enumerators/enumeItem/i18n";

const useGeneralInformationUserForm = (
  props: IUseAddUserGeneralInformationStep
) => {
  const { initialValues, ref, onSubmit, onFormValid } = props;
  const { appData } = useContext(AuthAndData);
  const [isDisabledButton, setIsDisableButton] = useState(true);
  const createValidationSchema = () =>
    object().shape({
      firstName: validationRules.string.required(validationMessages.required),
      lastName: validationRules.string.required(validationMessages.required),
      idType: validationRules.string.required(validationMessages.required),
      idNumber: validationRules.string.required(validationMessages.required),
      gender: validationRules.string.required(validationMessages.required),
      birthDate: validationRules.string.required(validationMessages.required),
    });

  const validationSchema = createValidationSchema();

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    onSubmit: onSubmit ?? (() => true),
  });
  const isMobile = useMediaQuery(mediaQueryTabletMain);
  const mobilePadding = isMobile ? basic.spacing.s150 : basic.spacing.s300;
  useImperativeHandle(ref, () => formik);

  useEffect(() => {
    if (onFormValid) {
      formik.validateForm().then((errors) => {
        const isFormValid = Object.keys(errors).length === 0;
        onFormValid(isFormValid);
        setIsDisableButton(!isFormValid);
      });
    }
  }, [formik.values, onFormValid]);

  const { enumerators } = useEnumerators({
    enumKey: `${ESelectOptions.GENDER},${ESelectOptions.ID_TYPE}`,
  });

  const optionGender: IOption[] =
    enumerators
      ?.find((enumItem) => enumItem.key === ESelectOptions.GENDER)
      ?.items.map((item) => ({
        label: item.i18n[appData.language as keyof II18n],
        id: item.code,
        value: item.value,
      })) || [];

  const optionIdType: IOption[] =
    enumerators
      ?.find((enumItem) => enumItem.key === ESelectOptions.ID_TYPE)
      ?.items.map((item) => ({
        label: item.i18n[appData.language as keyof II18n],
        id: item.code,
        value: item.i18n[appData.language as keyof II18n],
      })) || [];
  const labelButtonNext = generalInformationConfig.buttonLabel;
  const buttonDisabledState = isDisabledButton;

  const handleSelectChange = (name: string, value: string) => {
    formik.setFieldValue(name, value);
  };
  return {
    formik,
    mobilePadding,
    labelButtonNext,
    buttonDisabledState,
    optionGender,
    optionIdType,
    handleSelectChange,
  };
};
export { useGeneralInformationUserForm };

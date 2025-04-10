import { FormikProps, useFormik } from "formik";
import { useEffect, useImperativeHandle } from "react";
import { object } from "yup";
import { useMediaQuery } from "@inubekit/inubekit";
import { IGeneralInformationEntry } from "@ptypes/users/assisted/IGeneralInformationEntry";
import { validationMessages } from "@validations/validationMessages";
import { validationRules } from "@validations/validationRules";
import { IServerDomain } from "@ptypes/IServerDomain";
import { normalizeNameUsers } from "@utils/enumerators/normalizeNameUsers";
import { enviroment } from "@config/environment";
import { normalizeIdentification } from "@utils/enumerators/normalizeIdentificationtypenaturalperson";
import { UseEnumerators } from "../useEnumerators";

const UseGeneralInfoUsersForm = (
  initialValues: IGeneralInformationEntry,
  ref: React.ForwardedRef<FormikProps<IGeneralInformationEntry>>,
  onSubmit: ((values: IGeneralInformationEntry) => void) | undefined,
  onFormValid: React.Dispatch<React.SetStateAction<boolean>> | undefined
) => {
  const createValidationSchema = () =>
    object().shape({
      nameUser: validationRules.string.required(validationMessages.required),
      identificationNumber: validationRules.string.required(
        validationMessages.required
      ),
      typeOfIdentification: validationRules.string.required(
        validationMessages.required
      ),
      birthdate: validationRules.string.required(validationMessages.required),
      biologicalSex: validationRules.string.required(
        validationMessages.required
      ),
    });

  const validationSchema = createValidationSchema();
  const smallScreen = useMediaQuery(enviroment.IS_MOBILE_743);
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
  const handleChange = (name: string, value: string) => {
    formik.setFieldValue(name, value).then(() => {
      formik.validateForm().then((errors) => {
        formik.setErrors(errors);
      });
    });
  };

  const { enumData } = UseEnumerators("biologicalsex", "Colombia");
  const { enumData: identificationtypenaturalperson } = UseEnumerators(
    "identificationtypenaturalperson",
    "Colombia"
  );
  const optionsUser: IServerDomain[] = enumData.map((item) => {
    const name = normalizeNameUsers(item.code)?.name as unknown as string;
    return {
      id: item.code,
      label: name,
      value: name,
    };
  });

  const optionsIdentificationtypenatura: IServerDomain[] =
    identificationtypenaturalperson.map((item) => {
      const name = normalizeIdentification(item.code)
        ?.name as unknown as string;
      return {
        id: item.code,
        label: name,
        value: name,
      };
    });
  return {
    formik,
    isMobile,
    handleChange,
    optionsUser,
    optionsIdentificationtypenatura,
    smallScreen,
  };
};

export { UseGeneralInfoUsersForm };

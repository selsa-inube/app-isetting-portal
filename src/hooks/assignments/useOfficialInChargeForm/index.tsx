import { useEffect, useImperativeHandle, useState } from "react";
import { useFormik } from "formik";
import { IOption, useMediaQuery } from "@inubekit/inubekit";
import { object } from "yup";

import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { enviroment } from "@config/environment";
import { addAssignmentsLabels } from "@config/assignments/assisted/addAssignmentsLabels";
import { useAssignmentsData } from "../useAssignmentsData";
import { IUseOfficialInChargeForm } from "@ptypes/assignments/assisted/IUseOfficialInChargeForm";

const useOfficialInChargeForm = (props: IUseOfficialInChargeForm) => {
  const {
    ref,
    absentOfficialSelected,
    editDataOption,
    loading,
    onSubmit,
    onFormValid,
    initialValues,
    initialOfficialData,
  } = props;

  const createValidationSchema = () =>
    object().shape({
      official: validationRules.string.required(
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
  const [officialInChargeOptions, setOfficialInChargeOptions] = useState<
    IOption[]
  >([]);
  const { absentOfficialOptions } = useAssignmentsData();

  useEffect(() => {
    const options = absentOfficialOptions.filter(
      (option) => option.label !== absentOfficialSelected
    );
    setOfficialInChargeOptions(options);
  }, [absentOfficialOptions]);

  const isMobile = useMediaQuery(enviroment.IS_MOBILE_970);

  useImperativeHandle(ref, () => formik);

  useEffect(() => {
    if (onFormValid) {
      formik.validateForm().then((errors) => {
        const isFormValid = Object.keys(errors).length === 0;
        onFormValid(isFormValid);
      });
    }
  }, [formik.values, onFormValid]);

  const handleChangeSelect = (name: string, value: string) => {
    formik.setFieldValue(name, value);
  };

  const valuesEmpty = Object.values(formik.values).every(
    (value) => value === "" || value === null || value === undefined
  );

  const valuesEqualBoton =
    JSON.stringify(initialOfficialData) === JSON.stringify(formik.values);

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

  const labelButtonPrevious = editDataOption
    ? addAssignmentsLabels.cancelButton
    : addAssignmentsLabels.previousButton;

  const labelButtonNext = editDataOption
    ? addAssignmentsLabels.sendButton
    : addAssignmentsLabels.nextButton;

  return {
    officialInChargeOptions,
    formik,
    isMobile,
    isDisabledButton,
    labelButtonPrevious,
    labelButtonNext,
    handleChangeSelect,
  };
};

export { useOfficialInChargeForm };

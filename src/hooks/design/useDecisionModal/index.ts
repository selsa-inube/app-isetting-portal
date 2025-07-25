import { useState, useEffect } from "react";
import { string, object } from "yup";
import { useFormik, FormikValues } from "formik";
import { useMediaQuery } from "@inubekit/inubekit";
import { enviroment } from "@config/environment";
import { IDecisionEntry } from "@ptypes/modals/decisionModal/IDecisionEntry";

const validationSchema = object({
  justification: string(),
});

const initialValues: IDecisionEntry = {
  justification: "",
};

const useDecisionModal = ({
  justificationOfDecision,
  setFieldEntered,
}: {
  justificationOfDecision: boolean;
  setFieldEntered?: (value: string) => void;
}) => {
  const [dynamicValidationSchema, setDynamicValidationSchema] =
    useState(validationSchema);

  const isMobile = useMediaQuery(enviroment.MEDIA_QUERY_MOBILE);
  const isMobileTextarea = useMediaQuery("(max-width: 490px)");

  const getFieldState = (formik: FormikValues, fieldName: string) => {
    if (formik.errors[fieldName]) return "invalid";
  };

  const formik = useFormik({
    initialValues,
    validationSchema: dynamicValidationSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async () => {
      return Promise.resolve(true);
    },
  });

  useEffect(() => {
    if (justificationOfDecision) {
      setDynamicValidationSchema(
        validationSchema.shape({
          justification: string()
            .required("El dato es requerido")
            .min(5, "Debe registrar como mínimo 5 caracteres.")
            .max(130, "No puede superar de 130 caracteres."),
        })
      );
    }
  }, [justificationOfDecision]);

  useEffect(() => {
    if (formik.values && setFieldEntered)
      setFieldEntered(formik.values.justification);
  }, [formik.values, setFieldEntered]);

  const comparisonData = Boolean(
    justificationOfDecision &&
      formik.values.justification === initialValues.justification
  );

  return {
    dynamicValidationSchema,
    formik,
    isMobile,
    isMobileTextarea,
    getFieldState,
    comparisonData,
  };
};

export { useDecisionModal };

import { forwardRef } from "react";
import { FormikProps } from "formik";
import { IContactDataFormValues } from "@ptypes/users/tabs/userTab/addUser/forms/IContactData";
import { ContactDataFormUI } from "./interface";
import { IContactDataForm } from "@ptypes/users/tabs/userTab/addUser/forms/initializers/initializeContacDataForm";
import { useContactDataForm } from "@hooks/users/tabs/userTab/addUser/form/contactDataForm";

const ContactDataForm = forwardRef<
  FormikProps<IContactDataFormValues>,
  IContactDataForm
>(
  (
    {
      initialValues,
      onFormValid,
      handleNextStep,
      loading,
      editDataOption = false,
      initialContactData,
      handlePreviousStep,
    },
    ref
  ) => {
    const {
      formik,
      componentSize,
      mobilePadding,
      labelButtonNext,
      buttonDisabledState,
    } = useContactDataForm({
      initialValues,
      ref,
      onFormValid,
      loading,
      editDataOption,
      initialContactData,
    });

    return (
      <ContactDataFormUI
        loading={loading}
        formik={formik}
        onNextStep={handleNextStep}
        componentSize={componentSize as "column" | "row"}
        mobilePadding={mobilePadding}
        labelButtonNext={labelButtonNext}
        buttonDisabledState={buttonDisabledState}
        handlePreviousStep={handlePreviousStep}
      />
    );
  }
);
ContactDataForm.displayName = "ContactDataForm";
export { ContactDataForm };

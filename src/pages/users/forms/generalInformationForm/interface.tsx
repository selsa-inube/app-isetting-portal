import { Grid, Select, Textfield, Date } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { Userlabels } from "@config/users/addUsersInvitation/assisted/assistedText";
import { IGeneralInformationFormUI } from "@ptypes/users/generalInformationForm/IGeneralInformationFormUI";
import { getFieldState } from "@utils/forms";
const GeneralInformationFormUI = (props: IGeneralInformationFormUI) => {
  const { formik, handleChange } = props;

  return (
    <Grid
      gap={basic.spacing.s300}
      templateColumns="repeat(2, 1fr)"
      templateRows="repeat(3, 1fr)"
    >
      <Textfield
        name="nameUser"
        id="nameUser"
        label={Userlabels.nameUser}
        placeholder={Userlabels.placeholderNameUser}
        type="text"
        size="wide"
        value={formik.values.nameUser}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        status={getFieldState(formik, "nameUser")}
        message={formik.errors.nameUser}
        fullwidth
      />

      <Select
        name="biologicalSex"
        id="biologicalSex"
        onChange={handleChange}
        options={[
          { id: "1", label: "Masculino", value: "male" },
          { id: "2", label: "Femenino", value: "female" },
          { id: "3", label: "Otro", value: "other" },
        ]}
        label={Userlabels.biologicalSex}
        placeholder={Userlabels.placeholderBiologicalSex}
        value={formik.values.biologicalSex}
        onBlur={formik.handleBlur}
        message={formik.errors.biologicalSex}
        required
        fullwidth
        size="wide"
      />
      <Select
        id="typeOfIdentification"
        name="typeOfIdentification"
        onChange={function (): void {
          throw new Error("Function not implemented.");
        }}
        options={[]}
        label={Userlabels.typeOfIdentification}
        placeholder={Userlabels.placeholderTypeOfIdentification}
        value={""}
        fullwidth
        size="wide"
      />
      <Date
        id="birthdate"
        name="birthdate"
        onChange={function (): void {
          throw new Error("Function not implemented.");
        }}
        label={Userlabels.birthdate}
        fullwidth
        size="wide"
      />
      <Textfield
        name="identificationNumber"
        id="identificationNumber"
        label={Userlabels.identificationNumber}
        placeholder={Userlabels.placeholderIdentificationNumber}
        type="text"
        size="wide"
        value={formik.values.identificationNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        status={getFieldState(formik, "identificationNumber")}
        message={formik.errors.identificationNumber}
        fullwidth
      />
    </Grid>
  );
};

export { GeneralInformationFormUI };

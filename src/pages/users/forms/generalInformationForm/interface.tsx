import {
  Grid,
  Select,
  Textfield,
  Date,
} from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { Userlabels } from "@config/users/addUsersInvitation/assisted/assistedText";
import { IGeneralInformationFormUI } from "@ptypes/users/generalInformationForm/IGeneralInformationFormUI";
import { getFieldState } from "@utils/forms";
const GeneralInformationFormUI = (props: IGeneralInformationFormUI) => {
  const {
    formik,
    handleChange,
    optionsUser,
    optionsIdentificationtypenatura,
    smallScreen,
  } = props;

  return (
    <Grid
      gap={smallScreen ? `${basic.spacing.s1600}` : `${basic.spacing.s300}`}
      templateColumns={smallScreen ? "1fr" : "repeat(2, 1fr)"}
      templateRows={smallScreen ? "none" : "repeat(3, 1fr)"}
      margin={`${basic.spacing.s0} ${basic.spacing.s0}  ${basic.spacing.s400}  ${basic.spacing.s0}`}
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
        options={optionsUser}
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
        onChange={handleChange}
        options={optionsIdentificationtypenatura}
        label={Userlabels.typeOfIdentification}
        placeholder={Userlabels.placeholderTypeOfIdentification}
        value={formik.values.typeOfIdentification}
        onBlur={formik.handleBlur}
        message={formik.errors.typeOfIdentification}
        required
        fullwidth
        size="wide"
      />
      <Date
        id="birthdate"
        name="birthdate"
        label={Userlabels.birthdate}
        value={formik.values.birthdate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        status={getFieldState(formik, "birthdate")}
        message={formik.errors.birthdate}
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

import { Grid, Select, Textfield } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { Userlabels } from "@config/users/addUsersInvitation/assisted/assistedText";
import { IGeneralInformationFormUI } from "@ptypes/users/generalInformationForm/IGeneralInformationFormUI";
import { getFieldState } from "@utils/forms";

const GeneralInformationFormUI = (props: IGeneralInformationFormUI) => {
  const { formik } = props;

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
        onChange={function (): void {
          throw new Error("Function not implemented.");
        }}
        options={[]}
        label={Userlabels.biologicalSex}
        value={""}
        fullwidth
        size="wide"
      />
      <Select
        name="biologicalSex"
        onChange={function (): void {
          throw new Error("Function not implemented.");
        }}
        options={[]}
        label={Userlabels.biologicalSex}
        value={""}
        fullwidth
        size="wide"
      />
    </Grid>
  );
};

export { GeneralInformationFormUI };

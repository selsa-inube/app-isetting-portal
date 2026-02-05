import { Grid, Stack, useMediaQuery } from "@inubekit/inubekit";

import { BoxAttribute } from "@design/feedback/boxAttribute";
import { basic } from "@design/tokens";
import { mediaQueryMobile } from "@config/environment";

import { addUserUIConfig } from "@config/users/addUsers/addUserUI";
import { IAddUserVerificationBoxes } from "@ptypes/users/tabs/userTab/addUser/forms/verificationForm/IAddUserVerificationBoxes";

import { formatDate } from "@hooks/users/tabs/userTab/addUser/form/generalInformatrionUserForm/dataAdjust";
import { AddUserVerificationBoxesLabels } from "@config/users/addUsers/form/verificationForm/verificationBoxes";

const AddUserVerificationBoxes = (props: IAddUserVerificationBoxes) => {
  const { updatedData, stepKey } = props;

  const isMobile = useMediaQuery(mediaQueryMobile);

  const generalInfoStep = stepKey === addUserUIConfig.generalInformationStep;
  const missionForStaffStep = stepKey === addUserUIConfig.misionForStaff;
  const contactDataStep = stepKey === addUserUIConfig.contactData;
  const businessEntityStep = stepKey === addUserUIConfig.businessEntityStep;
  const positionByBusinessUnitStep =
    stepKey === addUserUIConfig.positionByBusinessUnit;
  const roleByBusinessUnitStep = stepKey === addUserUIConfig.roleByBusinessUnit;

  const activeBusinessEntities =
    updatedData.businessEntityStep?.values.filter((value) => value.isActive) ||
    [];

  const positionsByBusinessUnit =
    updatedData.positionByBusinessUnitStep?.values || [];

  const activeRoles = updatedData.roleByBusinessUnitStep ?? [];

  return (
    <>
      {generalInfoStep && (
        <Grid
          templateColumns={isMobile ? "1fr" : "1fr 1fr"}
          autoRows="1fr"
          width="100%"
          gap={basic.spacing.s100}
        >
          <BoxAttribute
            label={AddUserVerificationBoxesLabels.firstName}
            value={updatedData.generalInformationStep.firstName}
          />
          <BoxAttribute
            label={AddUserVerificationBoxesLabels.lastName}
            value={updatedData.generalInformationStep.lastName}
          />

          <BoxAttribute
            label={AddUserVerificationBoxesLabels.idType}
            value={updatedData.generalInformationStep.idType}
          />
          <BoxAttribute
            label={AddUserVerificationBoxesLabels.idNumber}
            value={updatedData.generalInformationStep.idNumber}
          />

          <BoxAttribute
            label={AddUserVerificationBoxesLabels.gender}
            value={updatedData.generalInformationStep.gender}
          />
          <BoxAttribute
            label={AddUserVerificationBoxesLabels.birthDate}
            value={formatDate(
              String(updatedData.generalInformationStep.birthDate),
            )}
          />
        </Grid>
      )}

      {missionForStaffStep && (
        <Stack direction="column" width="100%" gap={basic.spacing.s100}>
          <BoxAttribute
            label={AddUserVerificationBoxesLabels.missionName}
            value={updatedData.missionForStaffStep.missionValue}
          />
          <BoxAttribute
            label={AddUserVerificationBoxesLabels.missionDescription}
            value={updatedData.missionForStaffStep.missionDescription}
          />
        </Stack>
      )}

      {contactDataStep && (
        <Grid
          templateColumns={isMobile ? "1fr" : "1fr 1fr"}
          autoRows="1fr"
          width="100%"
          gap={basic.spacing.s100}
        >
          <BoxAttribute
            label={AddUserVerificationBoxesLabels.email}
            value={updatedData.contactDataStep.email}
          />
          <BoxAttribute
            label={AddUserVerificationBoxesLabels.phone}
            value={updatedData.contactDataStep.phone}
          />
        </Grid>
      )}

      {businessEntityStep && activeBusinessEntities.length > 0 && (
        <Grid
          templateColumns={isMobile ? "1fr" : "1fr 1fr"}
          autoRows="1fr"
          width="100%"
          gap={basic.spacing.s100}
        >
          {activeBusinessEntities.map((value) => (
            <BoxAttribute
              key={value.id}
              label={AddUserVerificationBoxesLabels.businessEntity}
              value={value.value}
            />
          ))}
        </Grid>
      )}

      {positionByBusinessUnitStep && (
        <Grid
          templateColumns={isMobile ? "1fr" : "1fr 1fr"}
          autoRows="1fr"
          width="100%"
          gap={basic.spacing.s100}
        >
          {Object.keys(positionsByBusinessUnit).map((key) => (
            <BoxAttribute
              key={key}
              label={key}
              value={
                positionsByBusinessUnit[key].options.find(
                  (opt) => opt.id === positionsByBusinessUnit[key].value,
                )?.label ?? positionsByBusinessUnit[key].value
              }
            />
          ))}
        </Grid>
      )}

      {roleByBusinessUnitStep && activeRoles.length > 0 && (
        <Grid
          templateColumns={isMobile ? "1fr" : "1fr 1fr"}
          autoRows="auto"
          width="100%"
          gap={basic.spacing.s100}
        >
          {activeRoles.map((role) => (
            <BoxAttribute
              key={role.id}
              label={role.businessUnitCode}
              value={role.rolesStaff}
            />
          ))}
        </Grid>
      )}
    </>
  );
};

export { AddUserVerificationBoxes };

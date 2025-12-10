import { Grid, Stack, Tag, useMediaQuery } from "@inubekit/inubekit";

import { BoxAttribute } from "@design/feedback/boxAttribute";
import { basic } from "@design/tokens";
import { labels } from "@config/verificationTitles";
import { enviroment } from "@config/environment";
import { EComponentAppearance } from "@enum/appearances";
import { columnsAttribute } from "@utils/columnsAttribute";
import { rowsAttribute } from "@utils/rowsAttribute";
import type { IEntry } from "@ptypes/design/table/IEntry";

import { addUserUIConfig } from "@config/users/addUsers/addUserUI";
import { IAddUserVerificationBoxes } from "@ptypes/users/tabs/userTab/addUser/forms/verificationForm/IAddUserVerificationBoxes";

const AddUserVerificationBoxes = (props: IAddUserVerificationBoxes) => {
  const { updatedData, stepKey } = props;

  const isMobile = useMediaQuery(enviroment.IS_MOBILE_970);

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
  const hasActiveBusinessEntities = activeBusinessEntities.length > 0;

  const positionsByBusinessUnit =
    updatedData.positionByBusinessUnitStep?.values || [];

  const activeRolesByBusinessUnit =
    updatedData.roleByBusinessUnitStep?.values.filter(
      (value) => value.isActive
    ) || [];
  const hasActiveRoles = activeRolesByBusinessUnit.length > 0;

  return (
    <>
      {generalInfoStep && (
        <>
          <Grid
            templateColumns={isMobile ? "1fr" : "1fr 1fr"}
            autoRows="1fr"
            width="100%"
            gap={basic.spacing.s100}
          >
            <BoxAttribute
              label={labels.userFullName}
              value={updatedData.generalInformationStep.values.firstName}
            />
            <BoxAttribute
              label={labels.documentType}
              value={updatedData.generalInformationStep.values.lastName}
            />
          </Grid>

          <Stack width="100%" direction="column" gap={basic.spacing.s100}>
            <BoxAttribute
              label={labels.documentNumber}
              value={updatedData.generalInformationStep.values.idType}
            />
            <BoxAttribute
              label={labels.status}
              value={updatedData.generalInformationStep.values.idNumber}
            />
          </Stack>
        </>
      )}

      {missionForStaffStep && (
        <Stack direction="column" width="100%" gap={basic.spacing.s100}>
          <BoxAttribute
            label={labels.missionTitle}
            value={updatedData.missionForStaffStep.values.missionValue}
          />
          <BoxAttribute
            label={labels.missionDescription}
            value={updatedData.missionForStaffStep.values.missionDescription}
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
            label={labels.email}
            value={updatedData.contactDataStep.values.email}
          />
          <BoxAttribute
            label={labels.phone}
            value={updatedData.contactDataStep.values.phone}
          />
        </Grid>
      )}

      {businessEntityStep && (
        <Stack direction="column" width="100%" gap={basic.spacing.s200}>
          {hasActiveBusinessEntities ? (
            <Grid
              templateColumns={columnsAttribute(
                activeBusinessEntities as IEntry[],
                isMobile
              )}
              templateRows={rowsAttribute(
                activeBusinessEntities as IEntry[],
                isMobile
              )}
              gap={basic.spacing.s100}
              width="100%"
            >
              {activeBusinessEntities.map((value) => (
                <Stack
                  key={value.id}
                  width="100%"
                  direction="column"
                  gap={basic.spacing.s100}
                >
                  <BoxAttribute
                    label={labels.businessEntity}
                    value={value.value}
                  />
                </Stack>
              ))}
            </Grid>
          ) : (
            <Stack padding={basic.spacing.s100}>
              <Tag
                appearance={EComponentAppearance.DANGER}
                label={labels.withoutBusinessEntity}
              />
            </Stack>
          )}
        </Stack>
      )}
      {positionByBusinessUnitStep && (
        <Grid
          templateColumns={isMobile ? "1fr" : "1fr 1fr"}
          autoRows="1fr"
          width="100%"
          gap={basic.spacing.s100}
        >
          {Object.keys(positionsByBusinessUnit).map((key) => (
            <Stack key={key} direction="column" gap={basic.spacing.s100}>
              <BoxAttribute label={labels.businessUnit} value={key} />

              <BoxAttribute
                label={labels.position}
                value={
                  positionsByBusinessUnit[key].options.find(
                    (opt) => opt.value === positionsByBusinessUnit[key].value
                  )?.label ?? positionsByBusinessUnit[key].value
                }
              />
            </Stack>
          ))}
        </Grid>
      )}
      {roleByBusinessUnitStep &&
        (hasActiveRoles ? (
          <Grid
            templateColumns={isMobile ? "1fr" : "1fr 1fr"}
            autoRows="1fr"
            width="100%"
            gap={basic.spacing.s100}
          >
            {activeRolesByBusinessUnit.map((role) => (
              <Stack key={role.id} direction="column" gap={basic.spacing.s100}>
                <BoxAttribute
                  label={labels.businessUnit}
                  value={role.businessUnitName}
                />
                <BoxAttribute label={labels.role} value={role.roleName} />
              </Stack>
            ))}
          </Grid>
        ) : (
          <Stack padding={basic.spacing.s100}>
            <Tag
              appearance={EComponentAppearance.DANGER}
              label={labels.withoutRoles}
            />
          </Stack>
        ))}
    </>
  );
};

export { AddUserVerificationBoxes };

import { MdCheck } from "react-icons/md";
import { Button, Stack } from "@inubekit/inubekit";
import { BorderStack } from "@design/layout/borderStack";
import { basic } from "@design/tokens";
import { RolesCardByUnit } from "@pages/assignments/tabs/assignmentsTab/rolesCardByUnit";
import { EComponentAppearance } from "@enum/appearances";
import { IRolesByBusinessUnitFormUI } from "@ptypes/assignments/assisted/IRolesByBusinessUnitFormUI";
import { StyledFormContent } from "./styles";

const RolesByBusinessUnitFormUI = (props: IRolesByBusinessUnitFormUI) => {
  const {
    isMobile,
    onPreviousStep,
    labelButtonPrevious,
    onButtonClick,
    isDisabledButton,
    loading,
    labelButtonNext,
    rolesByBusinessUnit,
    onToggleAllEntries,
    onSelectCheckChange,
  } = props;

  return (
    <BorderStack
      direction="column"
      gap={basic.spacing.s150}
      background={EComponentAppearance.LIGHT}
      boxSizing="initial"
      minHeight="55vh"
    >
      <StyledFormContent>
        <Stack direction="column">
          <BorderStack
            direction="column"
            border={EComponentAppearance.DARK}
            borderRadius={basic.spacing.s100}
            width="100%"
            height="auto"
            background={EComponentAppearance.LIGHT}
            boxSizing="border-box"
            padding={
              isMobile ? `${basic.spacing.s150}` : `${basic.spacing.s300}`
            }
            gap={basic.spacing.s250}
          >
            <Stack
              gap={basic.spacing.s250}
              wrap="wrap"
              justifyContent={isMobile ? "center" : "start"}
            >
              {rolesByBusinessUnit.map((unit, index) => (
                <RolesCardByUnit
                  key={index}
                  id={unit.id}
                  businessUnit={unit.name}
                  roles={unit.roles ?? []}
                  actionButton={unit.actionButton ?? ""}
                  iconButton={unit.iconButton ?? <MdCheck />}
                  onButtonClick={onToggleAllEntries}
                  onSelectCheckChange={onSelectCheckChange}
                />
              ))}
            </Stack>
          </BorderStack>
        </Stack>
      </StyledFormContent>
      <Stack justifyContent="flex-end" gap={basic.spacing.s250}>
        <Button
          onClick={onPreviousStep}
          variant="outlined"
          appearance={EComponentAppearance.GRAY}
        >
          {labelButtonPrevious}
        </Button>

        <Button
          onClick={onButtonClick}
          disabled={isDisabledButton}
          loading={loading}
          appearance={EComponentAppearance.PRIMARY}
        >
          {labelButtonNext}
        </Button>
      </Stack>
    </BorderStack>
  );
};

export { RolesByBusinessUnitFormUI };

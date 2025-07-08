import { MdCheck, MdClear, MdOutlineMoreHoriz } from "react-icons/md";
import { Stack, Button, Icon } from "@inubekit/inubekit";
import { IActionButtons } from "@ptypes/design/IActionButtons";
import { basic } from "@design/tokens";
import { Menu } from "@design/navigation";
import { actionButtonsLabels } from "@config/assignmentForm/actionButtonsLabels";
import { StyledOptionsContainer } from "./styles";
import { EComponentAppearance } from "@enum/appearances";

const ActionButtons = (props: IActionButtons) => {
  const {
    smallScreen,
    showMenu,
    menuOptions,
    entries,
    isAssignAll,
    handleToggleRol,
    handleCloseMenuRol,
    handleToggleAllEntries,
  } = props;

  const disabledUncheckAll =
    !entries.some((entry) => entry.isActive) || entries.length === 0;

  const disabledCheckAll = isAssignAll || entries.length === 0;

  return (
    <>
      {smallScreen ? (
        <StyledOptionsContainer>
          <Icon
            icon={<MdOutlineMoreHoriz />}
            appearance={EComponentAppearance.DARK}
            spacing="narrow"
            size={basic.spacing.s300}
            shape="circle"
            onClick={handleToggleRol}
          />
          {showMenu && (
            <Menu options={menuOptions} handleClose={handleCloseMenuRol} />
          )}
        </StyledOptionsContainer>
      ) : (
        <Stack gap={basic.spacing.s150} alignItems="end">
          <Button
            spacing="compact"
            onClick={() => handleToggleAllEntries(false)}
            iconBefore={<MdClear />}
            disabled={disabledUncheckAll}
            variant="outlined"
          >
            {actionButtonsLabels.uncheckAll}
          </Button>
          <Button
            spacing="compact"
            iconBefore={<MdCheck />}
            onClick={() => handleToggleAllEntries(true)}
            disabled={disabledCheckAll}
            variant="outlined"
          >
            {actionButtonsLabels.checkAll}
          </Button>
        </Stack>
      )}
    </>
  );
};

export { ActionButtons };

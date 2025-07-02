import { MdCheck, MdClear, MdOutlineMoreHoriz } from "react-icons/md";
import { Stack, Button, Icon } from "@inubekit/inubekit";
import { IActionButtons } from "@ptypes/design/IActionButtons";
import { basic } from "@design/tokens";
import { Menu } from "@design/navigation";
import { actionButtonsLabels } from "@config/assignmentForm/actionButtonsLabels";
import { StyledOptionsContainer } from "./styles";

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

  const disabled =
    !entries.some((entry) => entry.isActive) || entries.length === 0;

  return (
    <>
      {smallScreen ? (
        <StyledOptionsContainer>
          <Icon
            icon={<MdOutlineMoreHoriz />}
            appearance="dark"
            spacing="narrow"
            size="24px"
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
            disabled={disabled}
            variant="outlined"
          >
            {actionButtonsLabels.uncheckAll}
          </Button>
          <Button
            spacing="compact"
            iconBefore={<MdCheck />}
            onClick={() => handleToggleAllEntries(true)}
            disabled={isAssignAll || entries.length === 0}
            variant="outlined"
          >
            {actionButtonsLabels.CheckAll}
          </Button>
        </Stack>
      )}
    </>
  );
};

export { ActionButtons };

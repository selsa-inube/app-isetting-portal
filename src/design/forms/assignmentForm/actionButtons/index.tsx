import { MdCheck, MdClear, MdOutlineMoreVert } from "react-icons/md";
import { Stack, Button, Icon } from "@inubekit/inubekit";
import { IActionButtons } from "@ptypes/design/IActionButtons";
import { basic } from "@design/tokens";
import { actionButtonsLabels } from "@config/assignments/assignmentForm/actionButtonsLabels";
import { StyledOptionsContainer } from "./styles";
import { EComponentAppearance } from "@enum/appearances";
import { Menu } from "@design/feedback/menu";

const ActionButtons = (props: IActionButtons) => {
  const {
    smallScreen,
    entries,
    isAssignAll,
    handleToggleRol,
    handleToggleAllEntries,
    showMenu,
    menuOptions,
  } = props;

  const disabledUncheckAll =
    !entries.some((entry) => entry.isActive) || entries.length === 0;

  const disabledCheckAll = isAssignAll || entries.length === 0;

  return (
    <>
      {smallScreen ? (
        <StyledOptionsContainer>
          <Icon
            icon={<MdOutlineMoreVert />}
            appearance={EComponentAppearance.DARK}
            spacing="narrow"
            size={basic.spacing.s300}
            shape="circle"
            onClick={handleToggleRol}
          />
          {showMenu && (
            <Menu
              options={menuOptions}
              onToggleInfoModal={handleToggleRol}
              onClose={handleToggleRol}
            />
          )}
        </StyledOptionsContainer>
      ) : (
        <Stack gap={basic.spacing.s150} alignItems="end">
          <Button
            spacing="wide"
            onClick={() => handleToggleAllEntries(false)}
            iconBefore={<MdClear />}
            disabled={disabledUncheckAll}
            variant="outlined"
          >
            {actionButtonsLabels.uncheckAll}
          </Button>
          <Button
            spacing="wide"
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

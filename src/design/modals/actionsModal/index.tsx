import { MdClear } from "react-icons/md";
import { IEntry } from "@design/table/types";
import { Stack, Grid } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { IActionsTable } from "@pages/positions/tabs/positionsTabs/types";
import { IFormEntry } from "@design/templates/assignmentForm/types";
import { StyledModal, StyledContentActions } from "./styles";
interface IActionsModal {
  actions: IActionsTable[];
  entry: IFormEntry | IEntry;
  onClose: () => void;
}

const ActionsModal = (props: IActionsModal) => {
  const { actions, entry, onClose } = props;

  return (
    <StyledModal>
      <Grid
        templateColumns="auto 0.5fr"
        justifyItems="end"
        justifyContent="space-between"
        gap={basic.spacing.s100}
      >
        <Stack direction="column" gap={basic.spacing.s100}>
          {actions.map((action, index) => (
            <StyledContentActions
              key={index}
              onClick={(e) => e.stopPropagation()}
            >
              <div onClick={(e) => e.stopPropagation()}>
                {action.content(entry)}
              </div>
            </StyledContentActions>
          ))}
        </Stack>
        <MdClear cursor="pointer" onClick={onClose} />
      </Grid>
    </StyledModal>
  );
};

export { ActionsModal };
export type { IActionsModal };

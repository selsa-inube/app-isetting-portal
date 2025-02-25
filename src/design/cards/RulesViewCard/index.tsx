import { MdOutlineRemoveRedEye, MdOutlineDelete } from "react-icons/md";
import { Stack, Icon, Divider } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { StyledCard, StyledContainer } from "./styles";

interface IRulesViewCard {
  children: React.ReactNode;
  handleDelete: (id: string) => void;
  handleView: (id: string) => void;
  id: string;
}

const RulesViewCard = (props: IRulesViewCard) => {
  const { children, handleDelete, handleView, id } = props;
  return (
    <StyledCard>
      <Stack height="282px" gap={basic.spacing.s24} direction="column">
        <StyledContainer>
          <Stack direction="column" margin={basic.spacing.s10}>
            {children}
          </Stack>
        </StyledContainer>
      </Stack>
      <Stack
        gap={basic.spacing.s16}
        direction="column"
        margin={`${basic.spacing.s2} ${basic.spacing.s12}`}
      >
        <Divider />
        <Stack gap={basic.spacing.s16} justifyContent="end">
          <Icon
            appearance="dark"
            size="24px"
            cursorHover
            icon={<MdOutlineRemoveRedEye />}
            onClick={() => {
              handleView(id);
            }}
          />
          <Icon
            cursorHover
            appearance="dark"
            size="24px"
            icon={<MdOutlineDelete />}
            onClick={() => {
              handleDelete(id);
            }}
          />
        </Stack>
      </Stack>
    </StyledCard>
  );
};
export { RulesViewCard };
export type { IRulesViewCard };

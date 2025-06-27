import { Stack, Label } from "@inubekit/inubekit";
import { StyledOptionItemChecked } from "./styles";

interface IOptionItemChecked {
  id: string;
  label: string;
  checked?: boolean;
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const OptionItemChecked = (props: IOptionItemChecked) => {
  const { id, label, checked = false, onchange } = props;

  return (
    <StyledOptionItemChecked>
      <Stack>
        <input
          readOnly
          type="checkbox"
          id={id}
          name={id}
          onChange={onchange}
          checked={checked}
        />
        <Label htmlFor={id}>{label}</Label>
      </Stack>
    </StyledOptionItemChecked>
  );
};

export { OptionItemChecked };
export type { IOptionItemChecked };

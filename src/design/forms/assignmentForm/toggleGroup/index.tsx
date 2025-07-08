import { Label, Stack, Toggle } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { IToggleGroup } from "@ptypes/design/IToggleGroup";

const ToggleGroup = (props: IToggleGroup) => {
  const { entries, onSelectCheckChange } = props;
  return (
<>
      {entries.map((entry) => (
        <Stack gap={basic.spacing.s100} key={entry.id}>
          <Toggle
            key={entry.id}
            checked={entry.isActive}
            disabled={false}
            id={`${entry.id}`}
            name="isActive"
            margin={basic.spacing.s0}
            onChange={() => onSelectCheckChange(entry.id)}
            padding={basic.spacing.s0}
            size="small"
          />
          <Label htmlFor={`${entry.id}`} size="large">
            {entry.value}
          </Label>
        </Stack>
      ))}
</>
  );
};

export { ToggleGroup };

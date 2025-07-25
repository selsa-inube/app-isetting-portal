import { Stack, Toggle } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { IToggleGroup } from "@ptypes/design/IToggleGroup";

const ToggleGroup = (props: IToggleGroup) => {
  const { entries, size = "small", onSelectCheckChange } = props;
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
            onChange={() => onSelectCheckChange(entry.id ?? "")}
            padding={basic.spacing.s0}
            size={size}
          >
            {entry.value}
          </Toggle>
        </Stack>
      ))}
    </>
  );
};

export { ToggleGroup };

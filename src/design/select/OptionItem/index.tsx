import { useRef } from "react";
import { Stack, Text } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { IOptionItemChecked } from "@ptypes/navigation/IOptionItemChecked";
import { StyledOptionItemChecked } from "./styles";

const OptionItemChecked = ({
  id,
  label,
  checked = false,
  onchange,
}: IOptionItemChecked) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (e.target !== inputRef.current) {
      inputRef.current?.click();
    }
  };

  return (
    <StyledOptionItemChecked onClick={handleClick} checked={checked}>
      <Stack gap={basic.spacing.s4}>
        <input
          ref={inputRef}
          type="checkbox"
          id={id}
          name={id}
          onChange={onchange}
          checked={checked}
        />
        <Text size="medium" weight="bold" type="body">
          {label}
        </Text>
      </Stack>
    </StyledOptionItemChecked>
  );
};

export { OptionItemChecked };
export type { IOptionItemChecked };

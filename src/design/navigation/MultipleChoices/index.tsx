import { useState, useEffect } from "react";
import { Text, Tag } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { SelectCheck } from "@design/select";
import { IOptionItemChecked } from "@design/select/OptionItem";
import { UseMultipleChoices } from "@hooks/design/useMultipleChoices";
import { StyledContainer, StyledSelection } from "./styles";

interface IIMultipleChoices {
  id: string;
  labelSelect: string;
  labelSelected: string;
  onHandleSelectCheckChange: (options: IOptionItemChecked[]) => void;
  options: IOptionItemChecked[];
  placeholderSelect?: string;
  required?: boolean;
  message?: string;
  onBlur?: () => void;
}

const MultipleChoices = (props: IIMultipleChoices) => {
  const {
    id,
    labelSelect,
    labelSelected,
    onHandleSelectCheckChange,
    options,
    placeholderSelect = "Selecciona una opción",
    required = false,
    message,
    onBlur,
  } = props;

  const { uniqueOptions, onHandleSelectCheck, onRemoveTag } =
    UseMultipleChoices(options, onHandleSelectCheckChange);

  const [selectedLabels, setSelectedLabels] = useState<string>("");

  useEffect(() => {
    const selected = uniqueOptions
      .filter((option) => option.checked)
      .map((option) => option.label)
      .join(", ");
    setSelectedLabels(selected);
  }, [uniqueOptions]);

  return (
    <StyledContainer>
      {uniqueOptions.length > 0 &&
        uniqueOptions.some((option) => option.checked) && (
          <>
            <Text
              margin={`${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s4} ${basic.spacing.s0}`}
              padding={`${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s16}`}
              type="label"
              size="medium"
              weight="bold"
            >
              {labelSelected}
            </Text>
            <StyledSelection>
              {uniqueOptions
                .filter((option) => option.checked)
                .map((option) => (
                  <Tag
                    key={option.id}
                    appearance="primary"
                    label={option.label}
                    weight="strong"
                    removable
                    onClose={() => onRemoveTag(option.id)}
                  />
                ))}
            </StyledSelection>
          </>
        )}

      <SelectCheck
        id={id}
        label={labelSelect}
        name={id}
        onChangeCheck={onHandleSelectCheck}
        options={uniqueOptions}
        placeholder={selectedLabels || placeholderSelect}
        required={required}
        value=""
        size="compact"
        fullwidth
        message={message}
        onBlur={onBlur}
      />
    </StyledContainer>
  );
};

export { MultipleChoices };
export type { IIMultipleChoices };

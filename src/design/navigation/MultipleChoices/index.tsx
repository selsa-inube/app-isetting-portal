import { useState, useEffect } from "react";
import { Text, Tag } from "@inubekit/inubekit";
import { useMultipleChoices } from "@hooks/design/useMultipleChoices";
import { basic } from "@design/tokens";
import { SelectCheck } from "@design/select";
import { IMultipleChoices } from "@ptypes/design/IMultipleChoices";
import { StyledContainer, StyledSelection } from "./styles";

const MultipleChoices = (props: IMultipleChoices) => {
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
    useMultipleChoices({initialOptions: options, onHandleSelectCheckChange});

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
                    displayIcon={false}
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

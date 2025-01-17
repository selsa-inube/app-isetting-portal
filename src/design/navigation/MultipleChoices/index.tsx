import { useState } from "react";

import { Tag } from "@inubekit/tag";
import { Text } from "@inubekit/text";

import { basic } from "@design/tokens";
import { IOptionItemChecked } from "@design/select/OptionItem";
import { SelectCheck } from "@design/select";
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
    placeholderSelect = "",
    required = false,
    message,
    onBlur,
  } = props;

  const [optionsSelect, setOptionsSelect] = useState(options);

  const onHandleSelectCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = event.target;
    const newOptions = optionsSelect.map((option) => {
      if (option.id === id) {
        return { ...option, checked };
      }
      return option;
    });
    setOptionsSelect(newOptions);
    onHandleSelectCheckChange(newOptions);
  };

  const onRemoveTag = (id: string) => {
    const newOptions = optionsSelect.map((option) => {
      if (option.id === id) {
        return { ...option, checked: false };
      }
      return option;
    });
    setOptionsSelect(newOptions);
  };

  return (
    <StyledContainer>
      {optionsSelect.length > 0 &&
        optionsSelect.some((option) => option.checked) && (
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
              {optionsSelect
                .filter((option) => option.checked)
                .map((option) => (
                  <Tag
                    key={option.id}
                    appearance="primary"
                    label={option.label}
                    weight="strong"
                    removable
                    onClose={() => {
                      onRemoveTag(option.id);
                    }}
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
        options={optionsSelect}
        placeholder={placeholderSelect}
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

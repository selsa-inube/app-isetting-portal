import { IUseMultipleChoices } from "@ptypes/hooks/IUseMultipleChoices";
import { useState } from "react";

const useMultipleChoices = (props: IUseMultipleChoices) => {
  const { initialOptions, onHandleSelectCheckChange } = props;
  const [optionsSelect, setOptionsSelect] = useState(
    initialOptions.map((option) => ({ ...option, checked: false }))
  );

  const onHandleSelectCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = event.target;
    const newOptions = optionsSelect.map((option) =>
      option.id === id ? { ...option, checked } : option
    );

    setOptionsSelect(newOptions);
    onHandleSelectCheckChange(newOptions);
  };

  const onRemoveTag = (id: string) => {
    const newOptions = optionsSelect.map((option) =>
      option.id === id ? { ...option, checked: false } : option
    );

    setOptionsSelect(newOptions);
  };

  const uniqueOptions = optionsSelect.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.label === value.label)
  );

  return {
    optionsSelect,
    onHandleSelectCheck,
    onRemoveTag,
    uniqueOptions,
  };
};

export { useMultipleChoices };

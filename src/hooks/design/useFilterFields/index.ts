import { useState } from "react";
import { IOptionItemChecked } from "@design/select/OptionItem";

export const useFilterFields = (
  options: IOptionItemChecked[],
  onClick: () => void,
  onSelectChange: (selected: IOptionItemChecked[]) => void
) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<IOptionItemChecked[]>(
    []
  );
  const [tempSelectedOptions, setTempSelectedOptions] = useState<
    IOptionItemChecked[]
  >([]);

  const handleToggleModal = () => {
    setShowModal(!showModal);
    if (!showModal) {
      setTempSelectedOptions(selectedOptions);
    }
  };

  const handleSelectChange = (options: IOptionItemChecked[]) => {
    setTempSelectedOptions((prev) => {
      const newOptions = options.filter((option) => option.checked);
      const mergedOptions = [...prev, ...newOptions].reduce<
        IOptionItemChecked[]
      >((acc, option) => {
        if (!acc.some((item) => item.id === option.id)) {
          acc.push(option);
        }
        return acc;
      }, []);
      return mergedOptions;
    });
  };

  const handleApplyFilters = () => {
    setShowModal(false);
    setSelectedOptions((prev) => {
      const mergedOptions = [...prev, ...tempSelectedOptions].reduce<
        IOptionItemChecked[]
      >((acc, option) => {
        if (!acc.some((item) => item.id === option.id)) {
          acc.push(option);
        }
        return acc;
      }, []);
      return mergedOptions;
    });
    onSelectChange(tempSelectedOptions);
    onClick();
  };

  const handleClearFilters = () => {
    setSelectedOptions([]);
    setTempSelectedOptions([]);
    onSelectChange(options.map((option) => ({ ...option, checked: false })));
  };

  return {
    showModal,
    selectedOptions,
    tempSelectedOptions,
    handleToggleModal,
    handleSelectChange,
    handleApplyFilters,
    handleClearFilters,
    setSelectedOptions,
  };
};

import { useState } from "react";
import { MdOutlineFilterAltOff, MdOutlineFilterAlt } from "react-icons/md";
import { Button, Stack, Tag, useMediaQuery } from "@inubekit/inubekit";
import { FilterModal } from "@design/modals/filterModal";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IOptionItemChecked } from "@design/select/OptionItem";
import { IFilterFields } from "./types";
import { StyledFilterdUserCard, StyledSearchUserCard } from "./styles";

const FilterFields = (props: IFilterFields) => {
  const { options, actionText, title, onClick, onSelectChange } = props;
  const [showModal, setShowModal] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<IOptionItemChecked[]>(
    []
  );
  const [tempSelectedOptions, setTempSelectedOptions] = useState<
    IOptionItemChecked[]
  >([]);

  const smallScreen = useMediaQuery("(max-width: 970px)");
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

  return (
    <>
      <StyledSearchUserCard $smallScreen={smallScreen} $isActive={showModal}>
        <Stack gap="20px">
          <StyledFilterdUserCard
            $smallScreen={smallScreen}
            $isActive={showModal}
          >
            {selectedOptions.map((option) => (
              <Tag
                key={option.id}
                appearance="primary"
                label={option.label}
                weight="normal"
                removable
                onClose={() =>
                  setSelectedOptions(
                    selectedOptions.filter((item) => item.id !== option.id)
                  )
                }
              />
            ))}
          </StyledFilterdUserCard>
          <Stack gap="10px">
            <Button
              appearance="gray"
              iconBefore={<MdOutlineFilterAltOff />}
              onClick={handleClearFilters}
            >
              Quitar
            </Button>

            <Button
              onClick={handleToggleModal}
              iconBefore={<MdOutlineFilterAlt />}
              disabled={selectedOptions.length === options.length}
            >
              Filtrar
            </Button>
          </Stack>
        </Stack>
      </StyledSearchUserCard>

      {showModal && (
        <FilterModal
          actionText={actionText}
          selectedOptions={selectedOptions}
          appearance={ComponentAppearance.PRIMARY}
          isLoading={false}
          portalId="portal"
          title={title}
          options={options}
          onCloseModal={handleToggleModal}
          onClick={handleApplyFilters}
          onSelectChange={handleSelectChange}
        />
      )}
    </>
  );
};

export { FilterFields };

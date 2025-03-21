import { MdOutlineFilterAltOff, MdOutlineFilterAlt } from "react-icons/md";
import { Button, Stack, Tag, useMediaQuery } from "@inubekit/inubekit";
import { FilterModal } from "@design/modals/filterModal";
import { ComponentAppearance } from "@ptypes/aparences.types";

import { IFilterFields } from "./types";
import {
  StyledButtonFilter,
  StyledFilterdUserCard,
  StyledSearchUserCard,
} from "./styles";

const FilterFields = (props: IFilterFields) => {
  const {
    options,
    actionText,
    title,
    showModal,
    selectedOptions,
    handleClearFilters,
    setSelectedOptions,
    onClick,
    onSelectChange,
    handleToggleModal,
  } = props;
  const isSmallScreen = useMediaQuery("(max-width: 580px)");

  return (
    <>
      <StyledSearchUserCard $smallScreen={isSmallScreen} $isActive={showModal}>
        <Stack gap="20px">
          <StyledFilterdUserCard
            $smallScreen={isSmallScreen}
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
          <StyledButtonFilter>
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
          </StyledButtonFilter>
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
          onClick={onClick}
          onSelectChange={onSelectChange}
          setSelectedOptions={setSelectedOptions}
        />
      )}
    </>
  );
};

export { FilterFields };

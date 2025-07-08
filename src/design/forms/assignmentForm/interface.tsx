import { Stack, Searchfield, Button } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { IAssignmentFormUI } from "@ptypes/assignmentForm/IAssignmentFormUI";
import { Filter, FilterModal, FormFilter } from "@isettingkit/business-rules";
import { portalId } from "@config/portalId";
import { ActionButtons } from "./actionButtons";
import { ToggleGroup } from "./toggleGroup";
import { BorderStack } from "@design/modals/borderStack";
import { searchLabels } from "@config/searchLabels";
import { assignmentLabels } from "@config/assignmentForm/assigmentLabels";
import { EComponentAppearance } from "@enum/appearances";


const AssignmentFormUI = (props: IAssignmentFormUI) => {
  const {
    appliedFilters,
    fields,
    filteredEntries,
    filterValue,
    isAssignAll,
    isDisabledButton,
    labelButtonNext,
    labelButtonPrevious,
    loading,
    menuOptions,
    showMenu,
    smallScreen,
    showFilter,
    showFilterModal,
    handleClearFilters,
    handleCloseMenuRol,
    handleFilterInput,
    handleToggleAllEntries,
    handleToggleModal,
    handleToggleRol,
    onApply,
    onButtonClick,
    onFilterChange,
    onReset,
    onSelectCheckChange,
  } = props;


 const fieldsData = fields?.map((field) => ({
    ...field,
    icon:
      typeof field.icon === "object" &&
      field.icon !== null &&
      "type" in field.icon
        ? (field.icon as React.ReactElement)
        : undefined,
  }));

  return (
    <BorderStack
      gap={basic.spacing.s250}
      direction="column"
      boxSizing="border-box"
    >
      {showFilter && (
        <Filter
          onClear={handleClearFilters}
          onClick={handleToggleModal ?? (() => {})}
          titleClearFilter={assignmentLabels.clearFilter}
          titleFilter={assignmentLabels.titleFilter}
          appliedFilters={appliedFilters}
          noFiltersLabel={assignmentLabels.noFiltersLabel}
        />
      )}
      <BorderStack
        border={EComponentAppearance.DARK}
        borderRadius={basic.spacing.s100}
        padding={basic.spacing.s300}
        gap={basic.spacing.s250}
      >
        <Stack
          gap={basic.spacing.s200}
          direction="column"
          width="-webkit-fill-available"
        >
          <Stack gap={basic.spacing.s400} justifyContent="space-between">
            <Stack gap={basic.spacing.s200} direction="column" width="100%">
              <Searchfield
                placeholder={searchLabels.searchPlaceholder}
                label={searchLabels.searchLabel}
                name="search"
                id="search"
                size="compact"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFilterInput(e)
                }
                fullwidth={smallScreen}
                value={filterValue}
              />
            </Stack>
            <ActionButtons
              smallScreen={smallScreen}
              showMenu={showMenu}
              menuOptions={menuOptions}
              entries={filteredEntries}
              isAssignAll={isAssignAll}
              handleToggleRol={handleToggleRol}
              handleCloseMenuRol={handleCloseMenuRol}
              handleToggleAllEntries={handleToggleAllEntries}
            />
          </Stack>
          <BorderStack
            direction="column"
            border={EComponentAppearance.DARK}
            borderRadius={basic.spacing.s100}
            padding={basic.spacing.s200}
            gap={basic.spacing.s200}
            height="300px"
            overflowY="auto"
          >
            <ToggleGroup
              entries={filteredEntries}
              onSelectCheckChange={onSelectCheckChange}
            />
          </BorderStack>
        </Stack>
      </BorderStack>

      <Stack justifyContent="flex-end" gap={basic.spacing.s250}>
        <Button
          onClick={onReset}
          variant="outlined"
          appearance={EComponentAppearance.GRAY}
        >
          {labelButtonPrevious}
        </Button>

        <Button
          onClick={onButtonClick}
          disabled={isDisabledButton}
          loading={loading}
          appearance={EComponentAppearance.PRIMARY}
        >
          {labelButtonNext}
        </Button>
      </Stack>

      {showFilterModal && (
        <FilterModal
          actionButtonLabel={assignmentLabels.titleFilter}
          cancelButtonLabel={assignmentLabels.clearFilter}
          onClick={onApply ?? (() => {})}
          onCloseModal={handleToggleModal ?? (() => {})}
          portalId={portalId}
          title={assignmentLabels.titleFilter}
        >
          <FormFilter
            appliedFilters={appliedFilters}
            fields={fieldsData}
            onChange={onFilterChange ?? (() => {})}
          />
        </FilterModal>
      )}
    </BorderStack>
  );
};

export { AssignmentFormUI };

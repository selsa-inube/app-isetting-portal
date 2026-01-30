import { Stack, Searchfield, Button } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { IAssignmentFormUI } from "@ptypes/assignments/assignmentForm/IAssignmentFormUI";
import { ActionButtons } from "./actionButtons";
import { ToggleGroup } from "./toggleGroup";
import { BorderStack } from "@design/layout/borderStack";
import { searchLabels } from "@config/searchLabels";
import { EComponentAppearance } from "@enum/appearances";
import { Checkpicker } from "@inubekit/inubekit";

const AssignmentFormUI = (props: IAssignmentFormUI) => {
  const {
    appliedFilters = "",
    fields,
    filteredEntries,
    filterValue,
    isAssignAll,
    labelButtonNext,
    labelButtonPrevious,
    loading,
    menuOptions,
    showMenu,
    smallScreen,
    handleFilterInput,
    handleToggleAllEntries,
    handleToggleRol,
    onButtonClick,
    onFilterChange,
    onReset,
    onSelectCheckChange,
    withFilter,
    filterTitle,
    filterPlaceholder,
  } = props;

  const showFilter = !!(withFilter && filterTitle && onFilterChange && fields);
  const OptiosWithSearch = showFilter && smallScreen;
  const directionValue = OptiosWithSearch ? "column" : "row";
  return (
    <BorderStack
      gap={basic.spacing.s250}
      direction="column"
      boxSizing="border-box"
    >
      <BorderStack
        border={"dark"}
        borderRadius={basic.spacing.s100}
        padding={basic.spacing.s300}
        gap={basic.spacing.s250}
      >
        <Stack
          gap={basic.spacing.s200}
          direction="column"
          width="-webkit-fill-available"
        >
          <Stack
            gap={basic.spacing.s400}
            direction={directionValue}
            width="100%"
            justifyContent="space-between"
            alignItems="end"
          >
            <Searchfield
              placeholder={searchLabels.searchPlaceholder}
              name="search"
              id="search"
              size="compact"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFilterInput(e)
              }
              value={filterValue}
              fullwidth={smallScreen}
            />
            <Stack
              alignItems="end"
              gap={smallScreen ? basic.spacing.s4 : basic.spacing.s32}
              width={!OptiosWithSearch ? "" : smallScreen ? "100%" : "65%"}
              justifyContent="space-between"
            >
              {showFilter && (
                <Checkpicker
                  label={filterTitle}
                  placeholder={filterPlaceholder}
                  name={filterTitle}
                  onChange={onFilterChange}
                  options={fields}
                  values={appliedFilters}
                  size="compact"
                ></Checkpicker>
              )}

              <ActionButtons
                smallScreen={smallScreen}
                showMenu={showMenu}
                menuOptions={menuOptions}
                entries={filteredEntries}
                isAssignAll={isAssignAll}
                handleToggleRol={handleToggleRol}
                handleToggleAllEntries={handleToggleAllEntries}
              />
            </Stack>
          </Stack>
          <BorderStack
            direction="column"
            border="dark"
            borderRadius={basic.spacing.s100}
            padding={basic.spacing.s200}
            gap={basic.spacing.s200}
            height="300px"
            overflowY="true"
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
          loading={loading}
          appearance={EComponentAppearance.PRIMARY}
        >
          {labelButtonNext}
        </Button>
      </Stack>
    </BorderStack>
  );
};

export { AssignmentFormUI };

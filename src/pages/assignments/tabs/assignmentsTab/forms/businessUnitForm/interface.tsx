import { Button, Searchfield, Stack } from "@inubekit/inubekit";
import { EComponentAppearance } from "@enum/appearances";
import { basic } from "@design/tokens";
import { BorderStack } from "@design/layout/borderStack";
import { searchLabels } from "@config/searchLabels";
import { ActionButtons } from "@design/forms/assignmentForm/actionButtons";
import { ToggleGroup } from "@design/forms/assignmentForm/toggleGroup";
import { IBusinessUnitFormUI } from "@ptypes/assignments/assisted/IBusinessUnitFormUI";
import { StyledFormContent } from "./styles";
import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";

const BusinessUnitFormUI = (props: IBusinessUnitFormUI) => {
  const {
    filteredEntries,
    isAssignAll,
    isDisabledButton,
    isMobile,
    labelButtonNext,
    labelButtonPrevious,
    loading,
    menuOptions,
    searchBusinessUnit,
    showMenu,
    onButtonClick,
    onPreviousStep,
    onSearchBusinessUnit,
    onSelectCheckChange,
    onToggleAllEntries,
    onToggleUnits,
  } = props;

  return (
    <BorderStack
      direction="column"
      gap={basic.spacing.s150}
      background={EComponentAppearance.LIGHT}
      boxSizing="initial"
      minHeight="55vh"
    >
      <StyledFormContent>
        <Stack direction="column">
          <BorderStack
            direction="column"
            border={EComponentAppearance.DARK}
            borderRadius={basic.spacing.s100}
            width="100%"
            height="auto"
            background={EComponentAppearance.LIGHT}
            boxSizing="border-box"
            padding={
              isMobile ? `${basic.spacing.s150}` : `${basic.spacing.s300}`
            }
            gap={basic.spacing.s250}
          >
            <Stack
              gap={basic.spacing.s200}
              direction="column"
              width="-webkit-fill-available"
              height={isMobile ? "380px" : "40vh"}
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
                      onSearchBusinessUnit(e)
                    }
                    fullwidth={isMobile}
                    value={searchBusinessUnit}
                  />
                </Stack>
                <ActionButtons
                  smallScreen={isMobile}
                  showMenu={showMenu}
                  menuOptions={menuOptions}
                  entries={filteredEntries as IFormEntry[]}
                  isAssignAll={isAssignAll}
                  handleToggleRol={onToggleUnits}
                  handleToggleAllEntries={onToggleAllEntries}
                />
              </Stack>
              <BorderStack
                direction="column"
                border={EComponentAppearance.DARK}
                borderRadius={basic.spacing.s100}
                padding={basic.spacing.s200}
                gap={basic.spacing.s200}
                height="100%"
                overflowY="auto"
              >
                <ToggleGroup
                  entries={filteredEntries}
                  onSelectCheckChange={onSelectCheckChange}
                />
              </BorderStack>
            </Stack>
          </BorderStack>
        </Stack>
      </StyledFormContent>
      <Stack justifyContent="flex-end" gap={basic.spacing.s250}>
        <Button
          onClick={onPreviousStep}
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
    </BorderStack>
  );
};

export { BusinessUnitFormUI };

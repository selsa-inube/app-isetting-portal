import {
  MdApps,
  MdClear,
  MdClose,
  MdOutlineFilterAlt,
  MdOutlineFilterAltOff,
} from "react-icons/md";
import { createPortal } from "react-dom";
import { useState } from "react";
import {
  Stack,
  Text,
  Icon,
  IIconAppearance,
  Divider,
  useMediaQuery,
  Blanket,
  Button,
  inube,
} from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IOptionItemChecked } from "@design/select/OptionItem";
import { MultipleChoices } from "@design/navigation/MultipleChoices";
import {
  StyledContainerButton,
  StyledFilterdUserCard,
  StyledModal,
} from "./styles";

import { TagsFilter } from "../tagsFilter";
import { BorderStack } from "../borderStack";

interface IFilterModal {
  actionText: string;
  appearance: IIconAppearance;
  isLoading: boolean;
  portalId: string;
  title: string;
  options: IOptionItemChecked[];
  selectedOptions: IOptionItemChecked[];
  onClick: () => void;
  onCloseModal: () => void;
  onSelectChange: (options: IOptionItemChecked[]) => void;
  setSelectedOptions: React.Dispatch<
    React.SetStateAction<IOptionItemChecked[]>
  >;
}

const FilterModal = (props: IFilterModal) => {
  const {
    actionText,
    appearance,
    isLoading,
    portalId,
    title,
    selectedOptions,
    options,
    onCloseModal,
    onClick,
    onSelectChange,
    setSelectedOptions,
  } = props;

  const isMobile = useMediaQuery("(max-width: 1001px)");
  const isSmallScreen = useMediaQuery("(max-width: 1001px)");

  const node = document.getElementById(portalId);
  const [showHidden, setShowHidden] = useState(false);
  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  const filterSelectedOptions = () => {
    return options.filter(
      (option) => !selectedOptions.some((selected) => selected.id === option.id)
    );
  };

  const handleClearFilters = () => {
    setSelectedOptions([]);
  };

  const handleSelectChange = (updatedOptions: IOptionItemChecked[]) => {
    if (isMobile) {
      const selected = updatedOptions.filter((option) => option.checked);
      setSelectedOptions(selected);
    } else {
      onSelectChange(updatedOptions);
    }
  };

  const hiddenTags = selectedOptions.filter((opt) => opt.checked).slice(2);

  const onRemove = (id: string) => {
    setSelectedOptions((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: false } : item))
    );
  };

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" gap={basic.spacing.s200}>
          <Stack alignItems="center" justifyContent="space-between">
            <Text type="headline" size="small" appearance="dark">
              {title}
            </Text>
            <StyledContainerButton>
              <Button
                spacing="compact"
                appearance={ComponentAppearance.DARK}
                variant="none"
                onClick={() => {
                  handleClearFilters();
                  onCloseModal();
                }}
                iconAfter={
                  <Icon
                    appearance={ComponentAppearance.DARK}
                    icon={<MdClear />}
                  />
                }
              >
                Cerrar
              </Button>
            </StyledContainerButton>
          </Stack>
          <Stack alignItems="center" gap={basic.spacing.s8}>
            {isSmallScreen && (
              <Icon
                appearance={ComponentAppearance.GRAY}
                icon={<MdOutlineFilterAlt />}
                size="16px"
              />
            )}

            {isSmallScreen && (
              <StyledFilterdUserCard
                $smallScreen={isSmallScreen}
                $isActive={isMobile}
              >
                {selectedOptions
                  .filter((option) => option.checked)
                  .slice(0, 2)
                  .map((option) => (
                    <TagsFilter
                      key={option.id}
                      appearance="light"
                      label={option.label}
                      weight="normal"
                      removable
                      onClose={() => {
                        setSelectedOptions(
                          selectedOptions.map((item) =>
                            item.id === option.id
                              ? { ...item, checked: false }
                              : item
                          )
                        );
                        handleClearFilters();
                      }}
                      background={inube.palette.blue.B400}
                      icon={<MdApps />}
                    />
                  ))}

                {hiddenTags.length > 0 && (
                  <>
                    <TagsFilter
                      appearance="light"
                      label="..."
                      weight="normal"
                      removable={false}
                      onClick={() => setShowHidden((prev) => !prev)}
                      background={inube.palette.blue.B400}
                    />
                    {showHidden && (
                      <BorderStack
                        position="absolute"
                        zIndex="1"
                        top="90%"
                        right="0px"
                        background={inube.palette.neutral.N0}
                        borderRadius={basic.spacing.s8}
                        boxShadow="0px 2px 6px 1px"
                        padding={basic.spacing.s100}
                        gap={basic.spacing.s100}
                        minWidth="175px"
                        direction="column"
                      >
                        {hiddenTags.map((tag) => (
                          <Stack
                            justifyContent="space-between"
                            alignItems="center"
                            padding="8px 12px"
                            key={tag.id}
                          >
                            <Stack gap="4px" alignItems="center">
                              <Icon
                                appearance="primary"
                                icon={<MdApps />}
                                size="14px"
                              />
                              <Text size="small">{tag.label}</Text>
                            </Stack>
                            <Icon
                              appearance="dark"
                              icon={<MdClose />}
                              cursorHover={true}
                              size="16px"
                              onClick={() => onRemove(tag.id)}
                            />
                          </Stack>
                        ))}
                      </BorderStack>
                    )}
                  </>
                )}
              </StyledFilterdUserCard>
            )}
          </Stack>
          <Divider dashed={isMobile} />
        </Stack>

        <MultipleChoices
          id="Multiples-choices"
          labelSelect="Aplicación"
          labelSelected=""
          onHandleSelectCheckChange={handleSelectChange}
          options={
            isMobile
              ? options
              : filterSelectedOptions().length > 0
                ? filterSelectedOptions()
                : options
          }
          placeholderSelect="Seleccione opciones"
        />

        <Stack gap={basic.spacing.s250} justifyContent="flex-end">
          <Button
            spacing="wide"
            appearance={ComponentAppearance.GRAY}
            variant="filled"
            onClick={() => {
              handleClearFilters();
              onCloseModal();
            }}
            iconBefore={isSmallScreen ? <MdOutlineFilterAltOff /> : undefined}
          >
            {isSmallScreen ? "Quitar" : "Cancelar"}
          </Button>

          <Button
            spacing="wide"
            appearance={appearance}
            variant="filled"
            loading={isLoading}
            onClick={onClick}
          >
            {actionText}
          </Button>
        </Stack>
      </StyledModal>
    </Blanket>,
    node
  );
};

export { FilterModal };
export type { IFilterModal };

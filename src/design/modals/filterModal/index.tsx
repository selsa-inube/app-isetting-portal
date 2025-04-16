import { MdClear, MdOutlineFilterAltOff } from "react-icons/md";
import { createPortal } from "react-dom";
import {
  Stack,
  Text,
  Icon,
  IIconAppearance,
  Divider,
  useMediaQuery,
  Blanket,
  Button,
  Tag,
} from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { enviroment } from "@config/environment";
import { IOptionItemChecked } from "@design/select/OptionItem";
import { MultipleChoices } from "@design/navigation/MultipleChoices";
import {
  StyledContainerButton,
  StyledFilterdUserCard,
  StyledModal,
} from "./styles";

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

  const isMobile = useMediaQuery(enviroment.MEDIA_QUERY_MOBILE);

  const node = document.getElementById(portalId);

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

  const isSmallScreen = useMediaQuery("(max-width: 580px)");
  const handleClearFilters = () => {
    setSelectedOptions([]);
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
                onClick={onCloseModal}
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

          {isSmallScreen && (
            <StyledFilterdUserCard
              $smallScreen={isSmallScreen}
              $isActive={isMobile}
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
          )}

          <Divider dashed={isMobile} />
        </Stack>

        <MultipleChoices
          id="Multiples-choices"
          labelSelect="Aplicación"
          labelSelected=""
          onHandleSelectCheckChange={onSelectChange}
          options={
            filterSelectedOptions().length > 0
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
            onClick={isSmallScreen ? handleClearFilters : onCloseModal}
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

import { MdClear } from "react-icons/md";
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
} from "@inubekit/inubekit";
import { StyledContainerButton, StyledModal } from "./styles";
import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { enviroment } from "@config/environment";
import { IOptionItemChecked } from "@design/select/OptionItem";
import { MultipleChoices } from "@design/navigation/MultipleChoices";

interface IFilterModal {
  actionText: string;
  appearance: IIconAppearance;
  isLoading: boolean;
  portalId: string;
  title: string;
  options: IOptionItemChecked[];
  onClick: () => void;
  onCloseModal: () => void;
  onSelectChange: (options: IOptionItemChecked[]) => void;
}

const FilterModal = (props: IFilterModal) => {
  const {
    actionText,
    appearance,
    isLoading,
    portalId,
    title,
    options,
    onCloseModal,
    onClick,
    onSelectChange,
  } = props;

  const isMobile = useMediaQuery(enviroment.MEDIA_QUERY_MOBILE);

  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

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
          <Divider />
        </Stack>

        <MultipleChoices
          id="Multiples-choices"
          labelSelect="Aplicación"
          labelSelected=""
          onHandleSelectCheckChange={onSelectChange}
          options={options}
          placeholderSelect="Seleccione opciones"
        />

        <Stack gap={basic.spacing.s250} justifyContent="flex-end">
          <Button
            spacing="wide"
            appearance={ComponentAppearance.GRAY}
            variant="filled"
            onClick={onCloseModal}
          >
            Cancelar
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

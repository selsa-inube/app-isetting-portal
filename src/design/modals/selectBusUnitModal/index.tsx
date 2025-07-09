import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";
import {
  Blanket,
  Button,
  Divider,
  Icon,
  Select,
  Stack,
} from "@inubekit/inubekit";
import { BorderStack } from "../../layout/borderStack";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { basic } from "@design/tokens";
import { ISelectBusUnitModal } from "@ptypes/design/ISelectBusUnitModal";
import { isInvalid } from "@utils/isInvalid";

const SelectBusUnitModal = (props: ISelectBusUnitModal) => {
  const {
    portalId,
    formik,
    options,
    smallScreen,
    description,
    labelCloseModal,
    labelActionButton,
    labelCloseButton,
    comparisonData,
    placeholder,
    onChange,
    onClick,
    onCloseModal,
  } = props;

  const disabledButton = formik.values.businessUnits === "" || comparisonData

  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return createPortal(
    <Blanket>
      <BorderStack
        width={smallScreen ? "330px" : "450px"}
        height="auto"
        direction="column"
        padding={basic.spacing.s300}
        gap={basic.spacing.s300}
        borderRadius={basic.spacing.s100}
        boxSizing="border-box"
      >
        <Stack direction="column" justifyContent="space-between">
          <Stack
            direction="column"
            gap={basic.spacing.s200}
            width="100%"
            alignItems="flex-end"
          >
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
              {labelCloseModal}
            </Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack>
          <Select
            fullwidth={true}
            id="businessUnits"
            name="businessUnits"
            label={description}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={formik.handleBlur}
            options={options}
            required={false}
            size="compact"
            value={formik.values.businessUnits ?? ""}
            invalid={isInvalid(formik, "businessUnits")}
            message={formik.errors.businessUnits}
          />
        </Stack>

        <Stack gap={basic.spacing.s250} justifyContent="flex-end">
          <Button
            spacing="wide"
            appearance={ComponentAppearance.LIGHT}
            variant="filled"
            onClick={onCloseModal}
          >
            {labelCloseButton}
          </Button>

          <Button
            spacing="wide"
            appearance={ComponentAppearance.PRIMARY}
            variant="filled"
            onClick={onClick}
            disabled={disabledButton}
          >
            {labelActionButton}
          </Button>
        </Stack>
      </BorderStack>
    </Blanket>,
    node
  );
};

export { SelectBusUnitModal };

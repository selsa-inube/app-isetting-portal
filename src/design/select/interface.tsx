import { forwardRef } from "react";
import { MdOutlineArrowDropDown, MdApps } from "react-icons/md";
import { Text, Label, Icon, Stack } from "@inubekit/inubekit";
import { BorderStack } from "@design/modals/borderStack";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { ISelectCheckUI } from "@ptypes/navigation/ISelectCheckUI";
import { basic } from "@design/tokens";
import { OptionItemChecked } from "./OptionItem";
import { OptionList } from "./OptionList";
import { StyledContainer, StyledInputContainer, StyledInput } from "./styles";

import { Message } from "./message";
import { getTypo } from "@utils/sizeToTypography";

const SelectCheckUI = forwardRef<HTMLDivElement, ISelectCheckUI>(
  (props: ISelectCheckUI, ref) => {
    const {
      disabled,
      id,
      name,
      options,
      value,

      displayList,
      focused,
      fullwidth,
      label,
      message,
      onBlur,
      onChange,
      onChangeCheck,
      onClick,
      onFocus,
      placeholder,
      readonly,
      required,
      size,
      status,
    } = props;

    return (
      <StyledContainer $fullwidth={fullwidth} disabled={disabled} ref={ref}>
        {(label || required) && (
          <Stack
            alignItems="center"
            margin={`${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s4} ${basic.spacing.s0}`}
            padding={`${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s16}`}
            gap={basic.spacing.s4}
          >
            {required && !disabled && (
              <Text type="body" size="small" appearance="dark">
                (Requerido)
              </Text>
            )}
          </Stack>
        )}
        <BorderStack width="100%" direction="column">
          <Stack
            padding={`${basic.spacing.s0} ${basic.spacing.s16} ${basic.spacing.s0} ${basic.spacing.s400}`}
          >
            {label && (
              <Label
                htmlFor={id}
                disabled={disabled}
                focused={!readonly && focused}
                invalid={status === "invalid" && !readonly}
                size={getTypo(size!)}
                margin={`${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s2}`}
                padding={`${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s150}`}
              >
                {label}
              </Label>
            )}
          </Stack>
          <Stack width="100%">
            <Stack alignItems="center" gap={basic.spacing.s4} width="10%">
              <Icon
                appearance={ComponentAppearance.PRIMARY}
                icon={<MdApps />}
              ></Icon>
            </Stack>
            <StyledInputContainer
              disabled={disabled}
              $focused={focused!}
              $status={status}
              onClick={onClick}
              $readonly={readonly}
            >
              <StyledInput
                autoComplete="off"
                readOnly
                value={value}
                name={name}
                id={id}
                placeholder={placeholder}
                disabled={disabled}
                $required={required}
                $size={size}
                $status={status}
                $fullwidth={fullwidth}
                $focused={focused!}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
                onClick={onClick}
              />

              {!readonly && (
                <Icon
                  appearance="dark"
                  icon={<MdOutlineArrowDropDown />}
                  size="24px"
                  spacing="narrow"
                  disabled={disabled}
                />
              )}

              {displayList && !disabled && (
                <OptionList onClick={onChangeCheck}>
                  {options &&
                    options.map((optionItem) => (
                      <OptionItemChecked
                        key={optionItem.id}
                        id={optionItem.id}
                        label={optionItem.label}
                        checked={optionItem.checked}
                        onchange={onChangeCheck}
                      />
                    ))}
                </OptionList>
              )}
            </StyledInputContainer>
          </Stack>
        </BorderStack>
        {status && !readonly && (
          <Message disabled={disabled} status={status} message={message} />
        )}
      </StyledContainer>
    );
  }
);

SelectCheckUI.displayName = "SelectCheckUI";

export { SelectCheckUI };
export type { ISelectCheckUI };

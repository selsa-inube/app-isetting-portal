import { forwardRef } from "react";
import {
  MdOutlineError,
  MdCheckCircle,
  MdOutlineArrowDropDown,
  MdApps,
} from "react-icons/md";
import { Text, Label, Icon, Stack } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { Size } from "@ptypes/select/selectbusinessUnit/Istatus";
import { OptionItemChecked } from "./OptionItem";
import { OptionList } from "./OptionList";
import { StyledContainer, StyledInputContainer, StyledInput } from "./styles";
import { ISelectCheck } from ".";

interface ISelectCheckUI extends ISelectCheck {
  displayList: boolean;
  focused?: boolean;
}

const getTypo = (size: Size) => {
  if (size === "compact") {
    return "medium";
  }
  return "large";
};

const Message = (
  props: Pick<ISelectCheck, "disabled" | "status"> & { message?: string }
) => {
  const { disabled, status, message } = props;

  return (
    status !== "pending" && (
      <Stack
        alignItems="center"
        gap={basic.spacing.s4}
        margin={`${basic.spacing.s4} ${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s16}`}
      >
        <Icon
          appearance={status === "invalid" ? "danger" : "success"}
          disabled={disabled}
          icon={status === "invalid" ? <MdOutlineError /> : <MdCheckCircle />}
          size="14px"
        />
        <Text
          type="body"
          size="small"
          appearance={status === "invalid" ? "danger" : "success"}
          disabled={disabled}
        >
          {message && `${message}`}
        </Text>
      </Stack>
    )
  );
};

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

            {required && !disabled && (
              <Text type="body" size="small" appearance="dark">
                (Requerido)
              </Text>
            )}
          </Stack>
        )}
        <Stack alignItems="center" gap={basic.spacing.s4}>
          <Icon appearance={"gray"} icon={<MdApps />}></Icon>
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
          </StyledInputContainer>
        </Stack>

        {status && !readonly && (
          <Message disabled={disabled} status={status} message={message} />
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
      </StyledContainer>
    );
  }
);

SelectCheckUI.displayName = "SelectCheckUI";

export { SelectCheckUI };
export type { ISelectCheckUI };

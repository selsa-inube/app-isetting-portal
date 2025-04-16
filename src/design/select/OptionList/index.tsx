import { IOptionList } from "@ptypes/navigation/IOptionList";
import { StyledOptionList } from "./styles";

const OptionList = (props: IOptionList) => {
  const { children, onClick } = props;

  return <StyledOptionList $onClick={onClick}>{children}</StyledOptionList>;
};

export { OptionList };
export type { IOptionList };

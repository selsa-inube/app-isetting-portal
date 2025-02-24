import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Text, Icon, Divider } from "@inubekit/inubekit";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { UseAccordion } from "@hooks/design/useAccordion";
import { StyledContainer, StyledHead } from "./styles";

interface IAccordion {
  title: string;
  defaultOpen?: boolean;
  children?: React.ReactNode;
}

const Accordion = (props: IAccordion) => {
  const { title, defaultOpen = true, children } = props;
  const { isOpen, toggleAccordion } = UseAccordion(defaultOpen);

  return (
    <StyledContainer>
      <StyledHead onClick={toggleAccordion}>
        <Text
          type="label"
          size={"large"}
          appearance={ComponentAppearance.GRAY}
          weight="bold"
          ellipsis
        >
          {title}
        </Text>

        <Icon
          icon={isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          appearance={ComponentAppearance.DARK}
          spacing="compact"
          cursorHover={true}
          size="24px"
        />
      </StyledHead>

      {isOpen && (
        <>
          <Divider dashed={true} />
          {children}
        </>
      )}
    </StyledContainer>
  );
};

export { Accordion };
export type { IAccordion };

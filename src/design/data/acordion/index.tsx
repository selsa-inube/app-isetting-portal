import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Text, Icon, Divider } from "@inubekit/inubekit";
import { useAccordion } from "@hooks/design/useAccordion";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IAccordion } from "@ptypes/design/IAccordion";
import { StyledContainer, StyledHead } from "./styles";

const Accordion = (props: IAccordion) => {
  const { title, defaultOpen = true, children } = props;
  const { isOpen, toggleAccordion } = useAccordion({defaultOpen});

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

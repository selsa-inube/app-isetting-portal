import { useState } from "react";
import { IUseAccordion } from "@ptypes/hooks/IUseAccordion";

const useAccordion = (props: IUseAccordion) => {
  const { defaultOpen = true } = props;
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    isOpen,
    toggleAccordion,
  };
};

export { useAccordion };

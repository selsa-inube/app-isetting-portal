import { useState } from "react";

const UseAccordion = (defaultOpen: boolean = true) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    isOpen,
    toggleAccordion,
  };
};

export { UseAccordion };

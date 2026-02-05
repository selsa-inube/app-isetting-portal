import { useServiceInConstructionFlag } from "@hooks/constructionFlag";
import { useEffect, useState } from "react";

const useEditInConstructionModal = () => {
  const [isConstructionMode, setIsConstructionMode] = useState(false);
  const { showServiceInConstructionFlag } = useServiceInConstructionFlag();

  const handleEdit = () => {
    setIsConstructionMode(true);
  };

  useEffect(() => {
    if (isConstructionMode) {
      const duration = showServiceInConstructionFlag();

      const timer = setTimeout(() => {
        setIsConstructionMode(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isConstructionMode]);

  return {
    handleEdit,
  };
};

export { useEditInConstructionModal };

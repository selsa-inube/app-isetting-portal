import { useContext, useEffect, useState } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { IUseValidateUseCase } from "@ptypes/useValidateUseCase";

const useValidateUseCase = (props: IUseValidateUseCase) => {
  const { useCase } = props;
  const [disabledButton, setDisabledButton] = useState<boolean>(false);

  const { appData } = useContext(AuthAndData);
  const useCasesData = appData.useCasesByStaff;
  useEffect(() => {
    if (useCasesData) {
      const validateUseCase = useCasesData.includes(useCase);
      setDisabledButton(!validateUseCase);
    }
  }, [useCasesData]);
  return {
    disabledButton,
  };
};

export { useValidateUseCase };

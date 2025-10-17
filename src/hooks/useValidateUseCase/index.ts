import { useEffect, useState } from "react";
//import { AuthAndData } from "@context/authAndDataProvider";
import { IUseValidateUseCase } from "@ptypes/useValidateUseCase";
import { EUseCaseTypes } from "@enum/useCaseTypes";

const useValidateUseCase = (props: IUseValidateUseCase) => {
  const { useCase } = props;
  const [disabledButton, setDisabledButton] = useState<boolean>(false);

  //const { appData } = useContext(AuthAndData);
  const useCasesData = EUseCaseTypes.ADD_USER;
  // CAMBIAR POR LA DATA REAL CUANDO ESTE DISPONIBLE
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

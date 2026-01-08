import { IUseCaseForStaff } from "@ptypes/hooks/IUseCaseForStaff";
import { getUseCaseForStaff } from "@services/staffPortal/getUseCaseForStaff";
import { useState, useEffect } from "react";

const useCaseForStaff = (props: IUseCaseForStaff) => {
  const {
    businessUnitPrevious,
    useCasesByStaff,
    businessUnit,
    userAccount,
    businessManagerCode,
  } = props;
  const [useCases, setUseCases] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchUseCasesData = async () => {
      setLoading(true);

      const shouldValidateChange = useCasesByStaff.length === 0;

      try {
        if (shouldValidateChange && businessManagerCode) {
          if (businessManagerCode) {
            const data = await getUseCaseForStaff(
              userAccount,
              businessManagerCode
            );
            setUseCases(data);
          }
        }
      } catch (error) {
        console.info(error);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUseCasesData();
  }, [businessUnit, businessManagerCode]);

  return {
    useCases,
    loading,
    hasError,
  };
};

export { useCaseForStaff };

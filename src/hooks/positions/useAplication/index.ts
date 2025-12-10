import { useEffect, useState } from "react";
import { getApplicationCatalog } from "@services/positions/getApplicationCatalog";
import { IAplicationCatalog } from "@ptypes/applicationCatalog";

const useFetchAplicationStaff = () => {
  const [AplicationStaff, setAplicationStaff] =
    useState<IAplicationCatalog[]>();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchAplicaionStaff = async () => {
      try {
        const data = await getApplicationCatalog();
        setAplicationStaff(data);
      } catch (error) {
        console.info(error);
        setHasError(true);
      }
    };
    fetchAplicaionStaff();
  }, []);
  const options = AplicationStaff?.map((staff) => {
    return {
      id: staff.appId,
      value: staff.abbreviatedName,
    };
  });
  return { AplicationStaff, hasError, options };
};

export { useFetchAplicationStaff };

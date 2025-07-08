import { useEffect, useState } from "react";
import { IAplicationCatalog } from "@ptypes/applicationCatalog";
import { getApplicationCatalog } from "@services/positions/getApplicationCatalog";

const UseFetchAplicationStaff = () => {
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

export { UseFetchAplicationStaff };

import { useEffect, useState } from "react";
import { getRolesForStaff } from "@services/positions/getRolesForStaff";
import { IRoleForStaff } from "@ptypes/rolesForStaff";

const useFetchRolesStaff = (token: string) => {
  const [rolesStaff, setRolesStaff] = useState<IRoleForStaff[]>();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchRolesStaff = async () => {
      try {
        const data = await getRolesForStaff(token);
        setRolesStaff(data);
      } catch (error) {
        console.info(error);
        setHasError(true);
      }
    };
    fetchRolesStaff();
  }, []);

  return { rolesStaff, hasError };
};

export { useFetchRolesStaff };

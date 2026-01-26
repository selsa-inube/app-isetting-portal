import { IUsers } from "@ptypes/users/tabs/userTab/usersTable/IUsers";
import { getIportalStaffUsers } from "@services/users/getIportalStaffUsers";
import { useEffect, useState } from "react";

const useUserConsult = (businessManager: string, token: string) => {
  const [userData, setUserData] = useState<IUsers[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSaasServices = async () => {
      setLoading(true);
      try {
        const newData = await getIportalStaffUsers(businessManager, token);
        setUserData(newData);
      } catch (error) {
        console.info(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSaasServices();
  }, []);

  return { userData, loading };
};
export { useUserConsult };

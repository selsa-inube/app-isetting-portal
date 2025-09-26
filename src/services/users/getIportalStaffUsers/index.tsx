import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";
import { iportalStaffAxiosInstance } from "@api/iportalStaff";
import { IUsers } from "@ptypes/users/tabs/userTab/usersTable/IUsers";
import { mapUsersPortalStaffEntities } from "./mappers";

const getIportalStaffUsers = async (
  businessManager: string
): Promise<IUsers[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllStaff",
    },
  };
  const queryParams = new URLSearchParams({
    publicCode: businessManager,
  });
  const data: IUsers[] = await getWithRetries<IUsers[]>(
    iportalStaffAxiosInstance,
    `/staffs?${queryParams.toString()}`,
    config
  );
  return Array.isArray(data) ? mapUsersPortalStaffEntities(data) : [];
};

export { getIportalStaffUsers };

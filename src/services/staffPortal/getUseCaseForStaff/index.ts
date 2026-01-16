import { AxiosRequestConfig } from "axios";

import { getWithRetries } from "@services/core/getWithRetries";
import { IGetUseCaseForStaff } from "@ptypes/staffPortal/IGetUseCaseForStaff";
import { iportalStaffAxiosInstance } from "@api/iportalStaff";

const getUseCaseForStaff = async (
  userAccount: string,
  businessManagerCode: string,
  _businessUnit?: string
): Promise<string[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchUseCaseForStaff",
      "X-User-Name": userAccount,
    },
  };

  const queryParams = new URLSearchParams({
    businessManagerCode: businessManagerCode,
    businessUnitCode: "test",
  });

  const data: IGetUseCaseForStaff = await getWithRetries<IGetUseCaseForStaff>(
    iportalStaffAxiosInstance,
    `/staffs?${queryParams.toString()}`,
    config
  );
  return Array.isArray(data.listOfUseCases) ? data.listOfUseCases : [];
};

export { getUseCaseForStaff };

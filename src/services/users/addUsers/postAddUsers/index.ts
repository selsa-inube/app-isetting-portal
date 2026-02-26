import { AxiosRequestConfig } from "axios";
import { postWithRetries } from "@services/core/postWithRetries";
import { mapAddUsersToApi } from "./mappers";
import { isettingIsaasAxiosInstance } from "@api/isettingIsaas";
import { IRequestUsers } from "@ptypes/users/tabs/userTab/addUser/IRequestUsers";

const postAddUsers = async (
  businessUnit: string,
  user: string,
  data: IRequestUsers,
  businessManagerCode: string,
  token: string,
): Promise<IRequestUsers> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "AddStaff",
      "X-Business-Unit": businessUnit,
      "X-User-Name": user,
      Authorization: token,
    },
  };
  const newData = await postWithRetries<IRequestUsers>(
    `/staffs`,
    config,
    mapAddUsersToApi(data, businessManagerCode) as unknown as string[],
    isettingIsaasAxiosInstance,
  );

  return newData;
};

export { postAddUsers };

import { IUseVerifiedErrorRequest } from "@ptypes/hooks/IUseVerifiedErrorRequest";

const useVerifiedErrorRequest = (props: IUseVerifiedErrorRequest ): boolean => {

  const {requests} = props;
  return requests.find((request) => request.status === "error") ? true : false;
};

export { useVerifiedErrorRequest };

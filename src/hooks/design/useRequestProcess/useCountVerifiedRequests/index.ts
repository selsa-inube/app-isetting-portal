import { IUseCountVerifiedRequests } from "@ptypes/hooks/IUseCountVerifiedRequests";

const useCountVerifiedRequests = (props: IUseCountVerifiedRequests) => {
  const { requests } = props;
  const countVerified = requests.filter(
    (request) => request.status === "completed" || request.status === "error"
  ).length;
  return (countVerified * 100) / requests.length;
};

export { useCountVerifiedRequests };

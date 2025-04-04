import { UseDetailsRequestInProgress } from "@hooks/positions/useDetailsRequestInProgress";
import { IEntry } from "@ptypes/table/IEntry";
import { DetailsRequestInProcess } from "./detailsRequestInProcess";

interface IDetails {
  data: IEntry;
}

const Details = (props: IDetails) => {
  const { data } = props;
  const { showModal, handleToggleModal, normalizeData } =
    UseDetailsRequestInProgress(data);

  return (
    <DetailsRequestInProcess
      data={normalizeData}
      showModal={showModal}
      onToggleModal={handleToggleModal}
    />
  );
};

export { Details };

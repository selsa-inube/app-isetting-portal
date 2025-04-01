import { DetailsRequestInProcess } from "@design/feedback/detailsRequestInProcess";

import { UseDetailsRequestInProgress } from "@hooks/positions/useDetailsRequestInProgress";
import { IEntry } from "@ptypes/table/IEntry";

interface IDetails {
  data: IEntry;
}

const Details = (props: IDetails) => {
  const { data } = props;

  const {
    dateOptions,
    form,
    showModal,
    handleChange,
    handleToggleModal,
    normalizeData,
  } = UseDetailsRequestInProgress(data);

  return (
    <DetailsRequestInProcess
      data={normalizeData}
      showModal={showModal}
      form={form}
      onToggleModal={handleToggleModal}
      onChange={handleChange}
      dateOptions={dateOptions}
    />
  );
};

export { Details };

import { useState } from "react";
import { IServerDomain } from "@ptypes/IServerDomain";
import { IConfigurationRequestsTraceability } from "@ptypes/positions/requestsInProgress/IConfigRequestsTraceability";
import { formatDateTable } from "@utils/date/formatDateTable";
import { IEntry } from "@design/table/types";

const UseDetailsRequestInProgress = (data: IEntry) => {
  const [showModal, setShowModal] = useState(false);

  const dateOptions = data.configurationRequestsTraceability.map(
    (traceability: IConfigurationRequestsTraceability) => {
      return {
        id: traceability.traceabilityId,
        label: formatDateTable(new Date(traceability.executionDate)),
        value: formatDateTable(new Date(traceability.executionDate)),
        observation: traceability.description,
      };
    }
  );
  const [form, setForm] = useState({
    name: "",
    dateTraceability: dateOptions[0].value,
  });

  const handleChange = (name: string, newValue: string) => {
    setForm({ ...form, [name]: newValue });
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const normalizeData = {
    ...data,
    request: data.useCaseName,
    responsable:
      data.configurationRequestsTraceability[0].userWhoExecutedAction,
    status: data.requestStatus,
    observation:
      dateOptions.find(
        (option: IServerDomain) => option.value === form.dateTraceability
      )?.observation || "",
  };

  return {
    dateOptions,
    form,
    showModal,
    handleChange,
    handleToggleModal,
    normalizeData,
  };
};

export { UseDetailsRequestInProgress };

import { UseInitializerForm } from "@hooks/design/useInitializerForm";
import { InitializerFormUI } from "./interface";
import { IIUseInitializerForm } from "./types";

const InitializerForm = (props: IIUseInitializerForm) => {
  const {
    IsLoading,
    Message,
    HandleChangeRenderForm,
    HandleSubmitForm,
    HandleReset,
    HandleCloseSectionMessage,
    HasChanges,
    readOnly,
    dataOptionsValueSelect,
    setSelectedToggle,
  } = UseInitializerForm(props);
  return (
    <InitializerFormUI
      handleChangeInitializerForm={HandleChangeRenderForm}
      handleSubmitForm={HandleSubmitForm}
      handleReset={HandleReset}
      isLoading={IsLoading}
      dataOptionsForms={props.dataOptionsForms}
      withSubmitButtons={props.withSubmitButtons}
      message={Message}
      onCloseSectionMessage={HandleCloseSectionMessage}
      hasChanges={HasChanges}
      readOnly={readOnly}
      dataOptionsValueSelect={dataOptionsValueSelect}
      setSelectedToggle={setSelectedToggle}
    />
  );
};

export { InitializerForm };

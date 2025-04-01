import { useState } from "react";
import { updateItemData } from "@mocks/utils/dataMock.service";
import { IAssignmentFormEntry, IMessageState } from "@ptypes/positions/forms";
import { IIUseInitializerForm } from "@ptypes/initializerForm/IIUseInitializerForm";

const LoadingTimeout = 1500;

const UseInitializerForm = ({
  dataOptionsForms: InitialDataOptionsForms,
  id,
  keyData,
  nameDB,
  property,
  propertyData,
  setSelectedToggle,
  onHasChanges,
  readOnly = false,
  dataOptionsValueSelect,
}: IIUseInitializerForm) => {
  const [FormDataOptions, SetFormDataOptions] = useState(
    InitialDataOptionsForms
  );
  const [InitialFormDataOptions] = useState(InitialDataOptionsForms);
  const [IsLoading, SetIsLoading] = useState(false);
  const [Message, SetMessage] = useState<IMessageState>({
    visible: false,
  });

  const HasChanges = (ValueCompare: IAssignmentFormEntry[]) =>
    JSON.stringify(InitialDataOptionsForms) !== JSON.stringify(ValueCompare);

  const HandleChangeRenderForm = (RenderForm: IAssignmentFormEntry[]) => {
    SetFormDataOptions(RenderForm);
    if (onHasChanges) onHasChanges(HasChanges(RenderForm));
  };

  const NormalizeDataOption = FormDataOptions.filter(
    (DataOption) => DataOption.isActive === true
  ).map((Option) => ({
    [propertyData as keyof string]: Option.id,
  }));

  const HandleEditData = async () => {
    if (nameDB && keyData) {
      await updateItemData({
        key: keyData,
        nameDB: nameDB,
        identifier: id!,
        editData: NormalizeDataOption,
        property: property,
      });
    }
  };

  const HandleSubmitForm = () => {
    SetIsLoading(true);
    setTimeout(() => {
      HandleEditData();
      SetIsLoading(false);
      SetMessage({
        visible: true,
      });
    }, LoadingTimeout);
  };

  const HandleReset = () => {
    SetFormDataOptions(InitialFormDataOptions);
    if (onHasChanges) onHasChanges(false);
  };

  const HandleCloseSectionMessage = () => {
    SetMessage({
      visible: false,
    });
  };

  return {
    FormDataOptions,
    IsLoading,
    Message,
    HandleChangeRenderForm,
    HandleSubmitForm,
    HandleReset,
    HandleCloseSectionMessage,
    HasChanges,
    setSelectedToggle,
    readOnly,
    dataOptionsValueSelect,
  };
};

export { UseInitializerForm };

import { useFormik } from "formik";
import { useContext, useEffect, useImperativeHandle, useState } from "react";
import { object } from "yup";

import { mediaQueryMobile } from "@config/environment";
import { basic } from "@design/tokens";
import { IOption, useMediaQuery } from "@inubekit/inubekit";
import { IUseAddUserMissionForStaffStep } from "@ptypes/hooks/IUseAddUserMissionForStaffStep";
import { validationMessages } from "@validations/validationMessages";
import { validationRules } from "@validations/validationRules";
import { useMissionsData } from "@hooks/missions/useMissionsData";
import { AuthAndData } from "@context/authAndDataProvider";
import { missionForStaffConfig } from "@config/users/addUsers/form/missionForStaff";

const useMissionForUserForm = (props: IUseAddUserMissionForStaffStep) => {
  const { initialValues, ref, onSubmit, onFormValid } = props;
  const { appData } = useContext(AuthAndData);
  const [isDisabledButton, setIsDisableButton] = useState(true);

  const validationSchema = object().shape({
    missionValue: validationRules.string.required(validationMessages.required),
    missionName: validationRules.string,
    missionDescription: validationRules.string,
  });

  const [dynamicValidationSchema, setDynamicValidationSchema] =
    useState(validationSchema);
  const formik = useFormik({
    initialValues,
    validationSchema: dynamicValidationSchema,
    validateOnBlur: true,
    onSubmit: onSubmit ?? (() => true),
  });
  const isMobile = useMediaQuery(mediaQueryMobile);
  const mobilePadding = isMobile ? basic.spacing.s150 : basic.spacing.s300;
  useImperativeHandle(ref, () => formik);

  useEffect(() => {
    if (onFormValid) {
      formik.validateForm().then((errors) => {
        const isFormValid = Object.keys(errors).length === 0;

        onFormValid(isFormValid);
        setIsDisableButton(!isFormValid);
      });
    }
  }, [formik.values, onFormValid]);

  const { missionsData } = useMissionsData(
    appData.token,
    appData.businessManager.publicCode,
  );

  const optionMission: IOption[] = [
    missionForStaffConfig.addMission,
    ...(missionsData?.map((mission) => ({
      label: mission.missionName,
      id: mission.missionId,
      value: mission.missionName,
    })) || []),
  ];

  const buttonDisabledState = isDisabledButton;
  const [missionSelected, setMissionSelected] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSelectChange = (_name: string, value: string) => {
    setMissionSelected(value);
    formik.setFieldValue("missionValue", value);

    if (missionForStaffConfig.addMission.value === value) {
      setShowForm(true);
      setDynamicValidationSchema(
        validationSchema.shape({
          missionName: validationRules.string.required(
            validationMessages.required,
          ),
          missionDescription: validationRules.string.required(
            validationMessages.required,
          ),
        }),
      );
    } else {
      formik.setFieldValue("missionName", "");
      formik.setFieldValue("missionDescription", "");
      setShowForm(false);
      setDynamicValidationSchema(validationSchema);
    }
  };

  return {
    formik,
    mobilePadding,
    buttonDisabledState,
    handleSelectChange,
    missionSelected,
    optionMission,
    showForm,
  };
};
export { useMissionForUserForm };

import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { object } from "yup";
import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { assignmentsTabLabels } from "@config/assignments/generic/assignmentsTabLabels";
import { mediaQueryTabletMain } from "@config/environment";
import { IAbsenceEntry } from "@ptypes/assignments/IAbsenceEntry";
import { IAssignmentsData } from "@ptypes/assignments/IAssignmentsData";
import { IUseAssignmentsTab } from "@ptypes/hooks/IUseAssignmentsTab";
import { useAssignmentsData } from "../useAssignmentsData";
import { EUseCaseTypes } from "@src/enum/useCaseTypes";
import { useValidateUseCase } from "@src/hooks/useValidateUseCase";

const useAssignmentsTab = (props: IUseAssignmentsTab) => {
  const { showAbsenceModal } = props;
  const [searchAssingments, setSearchAssingments] = useState<string>("");
  const [entryDeleted, setEntryDeleted] = useState<string | number>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [disabledButtonModal, setDisabledButtonModal] =
    useState<boolean>(false);

  const { loading, hasError, data, absentOfficialOptions } =
    useAssignmentsData();

  const [assingments, setAssingments] = useState<IAssignmentsData[]>([]);
  const initialValues: IAbsenceEntry = {
    isActive: false,
    absentOfficial: "",
  };

  const { disabledButton } = useValidateUseCase({
    useCase: EUseCaseTypes.ADD_USER,
  });

  useEffect(() => {
    if (data.length > 0) {
      setAssingments(data);
    }
  }, [data]);

  useEffect(() => {
    setShowModal(showAbsenceModal);
  }, [showAbsenceModal]);

  const validationSchema = object({
    isActive: validationRules.boolean,
    absentOfficial: validationRules.string,
  });

  const [dynamicValidationSchema, setDynamicValidationSchema] =
    useState(validationSchema);

  const formik = useFormik({
    initialValues,
    validationSchema: dynamicValidationSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async () => {
      return Promise.resolve(true);
    },
  });

  const navigate = useNavigate();

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (entryDeleted) {
      setAssingments((prev) =>
        prev.filter((entry) => entry.id !== entryDeleted)
      );
    }
  }, [entryDeleted]);

  useEffect(() => {
    if (formik.values.isActive) {
      const disabledButton = formik.values.absentOfficial === "";
      setDynamicValidationSchema(
        validationSchema.shape({
          isActive: validationRules.boolean,
          absentOfficial: validationRules.string.required(
            validationMessages.required
          ),
        })
      );
      setDisabledButtonModal(disabledButton);
    } else {
      setDisabledButtonModal(false);
      formik.setFieldValue("absentOfficial", "");
    }
  }, [formik.values]);

  const handleSearchAssingments = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchAssingments(e.target.value);
  };

  const handleClickModal = () => {
    navigate("/assignments/add-assignment", {
      state: { data: formik.values.absentOfficial },
    });
  };

  const handleSelectCheckChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;
    formik.setFieldValue(name, checked);
  };

  const handleSelectChange = (name: string, value: string) => {
    formik.setFieldValue(name, value).then(() => {
      formik.validateForm().then((errors) => {
        formik.setErrors(errors);
      });
    });
  };

  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);

  const handleToggleInfoModal = () => {
    if (disabledButton) {
      setShowInfoModal(!showInfoModal);
    }
  };
  const smallScreen = useMediaQuery(mediaQueryTabletMain);
  const columnWidths = smallScreen ? [68] : [52, 17, 17];

  const emptyDataMessage = smallScreen
    ? assignmentsTabLabels.emptyDataMessageMobile
    : assignmentsTabLabels.emptyDataMessageDesk;

  return {
    assingments,
    disabledButton,
    searchAssingments,
    loading,
    hasError,
    smallScreen,
    columnWidths,
    emptyDataMessage,
    showModal,
    absentOfficialOptions,
    formik,
    disabledButtonModal,
    showInfoModal,
    handleToggleInfoModal,
    handleSelectChange,
    handleSelectCheckChange,
    handleClickModal,
    handleToggleModal,
    setEntryDeleted,
    handleSearchAssingments,
  };
};

export { useAssignmentsTab };

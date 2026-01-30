import { useEffect, useRef, useState } from "react";
import { FormikProps } from "formik";

import { formatDate } from "@utils/date/formatDate";
import { editPositionTabsConfig } from "@config/positions/editPositions/tabs";
import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { IGeneralInformationEntry } from "@ptypes/positions/assisted/IGeneralInformationEntry";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { IFormAddPosition } from "@ptypes/positions/assisted/IFormAddPosition";
import { IUseEditPositions } from "@ptypes/hooks/IUseEditPositions";
import { ERequestType } from "@src/enum/request/requestType";
import { useMediaQuery } from "@inubekit/inubekit";
import { useStore } from "../usePositionBusinessUnit";

const useEditPositions = (props: IUseEditPositions) => {
  const { data, appData, rolesData } = props;
  const businessUnitCode = useStore((s) => s.businessUnitCode);
  const normalizeGeneralData = {
    positionId: data.positionId,
    namePosition: data.positionName,
    descriptionPosition: data.descriptionUse,
  };

  const initialFormValues = {
    generalInformation: {
      isValid: false,
      values: normalizeGeneralData,
    },
    rolesStaff: {
      isValid: false,
      values: [],
    },
    applicationStaff: {
      isValid: false,
      values:
        rolesData?.map((role) => ({
          id: role.application?.appId ?? "",
          value: role.application?.applicationName ?? "",
          isActive: role.isActive ?? false,
        })) ?? [],
    },
  };

  const [isSelected, setIsSelected] = useState<string>(
    editPositionTabsConfig.generalInformation.id,
  );
  const transformedApplicationData = rolesData?.map((role) => ({
    id: role.application?.appId ?? "",
    value: role.application?.applicationName ?? "",
    isActive: role.isActive ?? false,
  }));

  const [formValues, setFormValues] =
    useState<IFormAddPosition>(initialFormValues);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);
  const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);
  const [saveData, setSaveData] = useState<ISaveDataRequest>();
  const [errorFetchSaveData, setErrorFetchSaveData] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedToggle, setSelectedToggle] = useState<IFormEntry[]>([]);
  const smallScreen = useMediaQuery("(max-width: 990px)");
  const [initialRoles, setInitialRoles] = useState<
    {
      id: string;
      value: string;
      isActive: boolean;
    }[]
  >([]);
  const roles = formValues.rolesStaff.values.map((role) => {
    const applicationStaff = rolesData?.find((app) => app.roleId === role.id);
    return {
      ...role,
      applicationStaff: applicationStaff?.applicationName,
    };
  });
  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  const rolesDataEndpoint = formValues.rolesStaff.values
    .filter((role) => role.isActive !== undefined)
    .map((role) => ({
      roleName: role.value,
      transactionOperation: role.isActive ? "Insert" : "Delete",
    }));

  useEffect(() => {
    if (rolesData && rolesData.length > 0) {
      const transformedRolesData = rolesData?.map((role) => ({
        id: role.roleId,
        value: role.roleName,
        isActive: role.isActive ?? false,
      }));

      const roles = transformedRolesData?.map((role) => {
        const applicationStaff = transformedApplicationData?.find(
          (app) => app.id !== role.id,
        );
        return {
          ...role,
          applicationStaff: applicationStaff?.value,
        };
      });

      const rolesInitial = roles?.map((role) => {
        const active =
          Array.isArray(data.positionsByRole) &&
          data.positionsByRole.find((app) => app.roleName === role.value);

        return {
          ...role,
          isActive: !!active,
        };
      });
      setInitialRoles(rolesInitial);
      setFormValues((prev) => ({
        ...prev,
        rolesStaff: {
          ...prev.rolesStaff,
          isValid: true,
          values: rolesInitial ?? [],
        },
        applicationStaff: {
          isValid: true,
          values: transformedApplicationData ?? [],
        },
      }));
    }
  }, [rolesData]);

  const onSubmit = () => {
    const configurationRequestData: {
      positionId: string;
      abbreviatedName?: string;
      descriptionUse?: string;
    } = {
      positionId: data.positionId,
    };

    if (
      generalInformationRef.current?.values.namePosition !== undefined &&
      (generalInformationRef.current?.values.namePosition !==
        data.positionName ||
        generalInformationRef.current?.values.descriptionPosition !==
          data.descriptionUse)
    ) {
      configurationRequestData.abbreviatedName =
        generalInformationRef.current?.values.namePosition ?? "";
      configurationRequestData.descriptionUse =
        generalInformationRef.current?.values.descriptionPosition ?? "";
    }

    setSaveData({
      applicationName: "istaff",
      businessManagerCode: appData.businessManager.publicCode,
      businessUnitCode: appData.businessUnit.publicCode,
      description: "Solicitud de modificación de un cargo",
      entityName: "PositionStaff",
      requestDate: formatDate(new Date()),
      useCaseName: "ModifyPosition",
      requestType: ERequestType.MODIFY,
      configurationRequestData: {
        positionId: data.positionId,
        positionName: formValues.generalInformation.values.namePosition,
        businessManagerCode: appData.businessManager.publicCode,
        businessUnitCode: businessUnitCode,
        descriptionUse:
          formValues.generalInformation.values.descriptionPosition,
        positionsByRole: rolesDataEndpoint,
      },
    });
    setShowRequestProcessModal(true);
  };

  const handleReset = () => {
    setSelectedToggle([]);
    if (isSelected === editPositionTabsConfig.generalInformation.id) {
      generalInformationRef.current?.resetForm();
    }
    formValues.rolesStaff.values.forEach((role) => {
      if (role.isActive) {
        handleRoleToggle(role.id);
      }
    });
    setFormValues({
      ...initialFormValues,
      rolesStaff: {
        isValid: true,
        values: initialRoles,
      },
    });
  };

  useEffect(() => {
    if (generalInformationRef.current?.values) {
      setFormValues((prev) => ({
        ...prev,
        generalInformation: {
          isValid: false,
          values: generalInformationRef.current
            ?.values as unknown as typeof formValues.generalInformation.values,
        },
      }));
    }
  }, [generalInformationRef.current?.values]);

  const handleTabChange = (tabId: string) => {
    if (generalInformationRef.current?.values) {
      setFormValues((prev) => ({
        ...prev,
        generalInformation: {
          isValid: false,
          values: generalInformationRef.current
            ?.values as unknown as typeof formValues.generalInformation.values,
        },
      }));
    }
    setIsSelected(tabId);
  };

  const handleRoleToggle = (roleId: string) => {
    const updatedRoles = formValues.rolesStaff.values.map((role) => {
      if (role.id === roleId) {
        const updatedRole = { ...role, isActive: !role.isActive };

        setSelectedToggle((prev) =>
          updatedRole.isActive
            ? (prev ?? []).concat(updatedRole)
            : (prev ?? []).filter((item) => item.id !== updatedRole.id),
        );

        return updatedRole;
      }
      return role;
    });

    setFormValues((prev) => ({
      ...prev,
      rolesStaff: {
        ...prev.rolesStaff,
        values: updatedRoles,
      },
    }));
  };
  if (selectedToggle && selectedToggle.length > 0) {
    formValues.rolesStaff.values = selectedToggle;
  }

  const showGeneralInformation =
    isSelected === editPositionTabsConfig.generalInformation.id;

  const showRolesForm = isSelected === editPositionTabsConfig.selectionRoles.id;

  return {
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    isSelected,
    saveData,
    showRequestProcessModal,
    showModal,
    errorFetchSaveData,
    handleReset,
    onSubmit,
    setIsCurrentFormValid,
    handleTabChange,
    setShowRequestProcessModal,
    setErrorFetchSaveData,
    setShowModal,
    setSelectedToggle,
    handleRoleToggle,
    smallScreen,
    roles,
    showGeneralInformation,
    showRolesForm,
  };
};

export { useEditPositions };

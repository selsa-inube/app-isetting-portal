import { useEffect, useRef, useState } from "react";
import { FormikProps } from "formik";

import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { formatDate } from "@utils/date/formatDate";
import { IAppData } from "@ptypes/authAndPortalDataProvider/IAppData";
import { editPositionTabsConfig } from "@config/positions/editPositions/tabs";

import { IRoleForStaff } from "@ptypes/rolesForStaff";
import { IFormEntry } from "@ptypes/assignmentForm/IFormEntry";
import { IGeneralInformationEntry } from "@ptypes/positions/assisted/IGeneralInformationEntry";
import { IFormAddPosition } from "@ptypes/positions/assisted/IFormAddPosition";

const UseEditPositions = (
  data: {
    missionId: string;
    missionName: string;
    descriptionUse: string;
    missionByRole: IRoleForStaff[];
  },
  appData: IAppData,
  rolesData: IRoleForStaff[] | undefined
) => {
  const normalizeGeneralData = {
    missionId: data.missionId,
    namePosition: data.missionName,
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
    editPositionTabsConfig.generalInformation.id
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
  const [selectedToggle, setSelectedToggle] = useState<
    IFormEntry[] | undefined
  >([]);

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
          (app) => app.id !== role.id
        );
        return {
          ...role,
          applicationStaff: applicationStaff?.value,
        };
      });

      const rolesInitial = roles?.map((role) => {
        const active =
          Array.isArray(data.missionByRole) &&
          data.missionByRole.find((app) => app.roleName === role.value);

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
      missionId: string;
      abbreviatedName?: string;
      descriptionUse?: string;
    } = {
      missionId: data.missionId,
    };

    if (
      generalInformationRef.current?.values.namePosition !== undefined &&
      (generalInformationRef.current?.values.namePosition !==
        data.missionName ||
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
      entityName: "Mission",
      requestDate: formatDate(new Date()),
      useCaseName: "ModifyMission",

      configurationRequestData: {
        missionId: data.missionId,
        missionName: formValues.generalInformation.values.namePosition,
        descriptionUse:
          formValues.generalInformation.values.descriptionPosition,
        missionByRole: rolesDataEndpoint,
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
            : (prev ?? []).filter((item) => item.id !== updatedRole.id)
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
    roles,
  };
};

export { UseEditPositions };

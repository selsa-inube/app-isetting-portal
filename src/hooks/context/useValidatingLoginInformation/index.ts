import { useEffect, useMemo, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { usePortalData } from "@hooks/staffPortal/usePortalData";
import { useBusinessManagers } from "@hooks/staffPortal/useBusinessManagers";
import { decrypt } from "@utils/decrypt";
import { validateAndTrimString } from "@utils/validateAndTrimString";
import { IAppData } from "@ptypes/authAndDataProvider/IAppData";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";

const useValidatingLoginInformation = () => {
  const { user } = useAuth0();

  const portalCode = decrypt(localStorage.getItem("portalCode") ?? "");
  const { portalData } = usePortalData({ portalCode });

  const { businessManagersData } = useBusinessManagers({
    portalPublicCode: portalData,
  });

  const [businessUnitSigla, setBusinessUnitSigla] = useState(
    localStorage.getItem("businessUnitSigla") ?? ""
  );

  const [useCases, setUseCases] = useState<string>(
    localStorage.getItem("useCasesByStaff") ?? ""
  );

  let useCasesData: string[] = [];
  try {
    useCasesData = JSON.parse(useCases || "[]") as string[];
  } catch (error) {
    console.error("Error parsing useCases:", error);
  }

  const [businessUnitsToTheStaff, setBusinessUnitsToTheStaff] = useState<
    IBusinessUnitsPortalStaff[]
  >(() => {
    const savedBusinessUnits = localStorage.getItem("businessUnitsToTheStaff");
    return savedBusinessUnits ? JSON.parse(savedBusinessUnits) : [];
  });

  const [appData, setAppData] = useState<IAppData>({
    portal: {
      abbreviatedName: "",
      staffPortalCatalogId: "",
      businessManagerId: "",
      publicCode: "",
    },
    businessManager: {
      publicCode: "",
      abbreviatedName: "",
      urlBrand: "",
      urlLogo: "",
    },
    businessUnit: {
      publicCode: "",
      abbreviatedName: "",
      languageId: "",
      urlLogo: "",
    },
    user: {
      userAccount: validateAndTrimString(user?.email ?? "") ?? "",
      userName: user?.name ?? "",
    },
    useCasesByStaff: useCasesData ?? [],
  });

  useEffect(() => {
    if (!businessManagersData) return;

    setAppData((prev) => ({
      ...prev,
      portal: {
        ...prev.portal,
        abbreviatedName: portalData?.abbreviatedName || "",
        staffPortalCatalogCode: portalData?.staffPortalCatalogCode || "",
        businessManagerCode: portalData?.businessManagerCode || "",
        publicCode: portalData?.publicCode || "",
      },
    }));
  }, [businessManagersData, portalData, portalCode]);

  useEffect(() => {
    if (!businessManagersData) return;

    if (
      businessManagersData.publicCode &&
      businessManagersData.publicCode.length > 0
    ) {
      setAppData((prev) => ({
        ...prev,
        businessManager: {
          ...prev.businessManager,
          publicCode: businessManagersData.publicCode,
          abbreviatedName: businessManagersData.abbreviatedName,
          urlBrand: businessManagersData.urlBrand,
          urlLogo: businessManagersData.urlLogo,
        },
      }));
    }
  }, [businessManagersData]);
  console.log("unitsigkla", businessUnitSigla);
  useEffect(() => {
    localStorage.setItem("businessUnitSigla", businessUnitSigla);

    if (businessUnitsToTheStaff && businessUnitSigla) {
      const businessUnit = JSON.parse(businessUnitSigla);

      setAppData((prev) => ({
        ...prev,
        businessUnit: {
          ...prev.businessUnit,
          abbreviatedName: businessUnit?.abbreviatedName,
          publicCode: businessUnit?.publicCode,
          languageId: businessUnit?.languageId,
          urlLogo: businessUnit?.urlLogo,
        },
      }));
    }
  }, [businessUnitSigla, businessUnitsToTheStaff]);

  useEffect(() => {
    localStorage.setItem(
      "businessUnitsToTheStaff",
      JSON.stringify(businessUnitsToTheStaff)
    );
  }, [businessUnitsToTheStaff]);

  useEffect(() => {
    localStorage.setItem("useCasesByStaff", useCases);

    if (useCases) {
      const businessUnit = JSON.parse(useCases);

      setAppData((prev) => ({
        ...prev,
        useCasesByStaff: businessUnit,
      }));
    }
  }, [useCases]);

  useEffect(() => {
    localStorage.setItem(
      "businessUnitsToTheStaff",
      JSON.stringify(businessUnitsToTheStaff)
    );
  }, [businessUnitsToTheStaff]);

  useEffect(() => {
    localStorage.setItem("useCasesByStaff", useCases);
  }, [useCases]);
  console.log(appData);
  const AuthAndData = useMemo(
    () => ({
      appData,
      businessUnitSigla,
      businessUnitsToTheStaff,
      setAppData,
      setUseCases,
      setBusinessUnitSigla,
      setBusinessUnitsToTheStaff,
    }),
    [appData, businessUnitSigla, businessUnitsToTheStaff]
  );

  return AuthAndData;
};

export { useValidatingLoginInformation };

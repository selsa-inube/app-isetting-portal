import { useEffect, useMemo, useState } from "react";
import { usePortalData } from "@hooks/staffPortal/usePortalData";
import { useBusinessManagers } from "@hooks/staffPortal/useBusinessManagers";
import { decrypt } from "@utils/decrypt";
import { IAppData } from "@ptypes/authAndDataProvider/IAppData";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { useLanguage } from "@hooks/language";
import { useIAuth } from "@inube/iauth-react";
import { useBusinessUnitManagers } from "@src/hooks/staffPortal/useBusinessUnitManager";

const useValidatingLoginInformation = () => {
  const {
    user,
    isLoading: isIAuthLoading,
    getAccessTokenSilently,
  } = useIAuth();
  const portalCode = decrypt(localStorage.getItem("portalCode") ?? "");
  const { portalData } = usePortalData({ portalCode });
  const { businessManagersData } = useBusinessManagers({
    portalPublicCode: portalData,
  });
  const [businessUnitSigla, setBusinessUnitSigla] = useState(
    localStorage.getItem("businessUnitSigla") ?? "",
  );
const { businessUnitManagersData } = useBusinessUnitManagers({
    portalPublicCode: portalData,
  });
  const [useCases, setUseCases] = useState<string>(
    localStorage.getItem("useCasesByStaff") ?? "",
  );

  const { languageBrowser } = useLanguage();

  const [businessUnitsToTheStaff, setBusinessUnitsToTheStaff] = useState<
    IBusinessUnitsPortalStaff[]
  >(() => {
    const savedBusinessUnits = localStorage.getItem("businessUnitsToTheStaff");
    return savedBusinessUnits ? JSON.parse(savedBusinessUnits) : [];
  });

  
  let useCasesData: string[] = [];
  try {
    useCasesData = JSON.parse(useCases || "[]") as string[];
  } catch (error) {
    console.error("Error parsing useCases:", error);
  }

  const [appData, setAppData] = useState<IAppData>({
    portal: {
      abbreviatedName: "",
      staffPortalCatalogCode: "",
      businessManagerCode: "",
      publicCode: "",
    },
    businessManager: {
      publicCode: "",
      abbreviatedName: "",
      urlBrand: "",
      urlLogo: "",
      clientId: "",
    },
    businessUnit: {
      publicCode: "test",
      abbreviatedName:  "",
      languageIso:  "",
      urlLogo:  "",
      countryIso:  "",
      iconUrl:  "",

    },
    user: {
      userAccount: user.id || "",
      userName: user.username || "",
      identificationDocumentNumber: user.id || "",
    },
    useCasesByStaff: useCasesData ?? [],
    language:  "",
    token: "",
  });
  useEffect(() => {
    if (!isIAuthLoading) {
      if (user) {
        setAppData((prev) => ({
          ...prev,
          user: {
            ...prev.user,
            userAccount: user.id || "",
            userName: user.username || "",
            identificationDocumentNumber: user.id || "",
          },
        }));
      }
    }
  }, [user, isIAuthLoading]);
  useEffect(() => {
    setAppData((prev) => ({
      ...prev,
      portal: {
        ...prev.portal,
        abbreviatedName: portalData?.abbreviatedName || "",
        staffPortalCatalogCode: portalData?.staffPortalId || "",
        businessManagerCode: portalData?.businessManagerCode || "",
        publicCode: portalData?.publicCode || "",
      },
    }));
  }, [portalData, portalCode]);

  useEffect(() => {
    
    if (
      businessUnitManagersData.publicCode &&
      businessUnitManagersData.publicCode.length > 0
    ) {
      
      setAppData((prev) => ({
        ...prev,
        businessUnit: {
          ...prev.businessUnit,
          publicCode: businessUnitManagersData.publicCode,
          abbreviatedName: businessUnitManagersData.abbreviatedName,
          urlLogo: businessUnitManagersData.urlLogo,
          countryIso: businessUnitManagersData.countryIso,
          iconUrl: businessUnitManagersData.iconUrl,
          languageIso: businessUnitManagersData.languageIso || languageBrowser || "es",
        },
        language: businessUnitManagersData.languageIso || languageBrowser || "es",
      }));
    }
  }, [businessUnitManagersData]);


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

  

  useEffect(() => {
    localStorage.setItem("useCasesByStaff", useCases);

    if (useCases) {
      const useCasesData = JSON.parse(useCases);

      setAppData((prev) => ({
        ...prev,
        useCasesByStaff: useCasesData,
      }));
    }
  }, [useCases]);

  useEffect(() => {
    localStorage.setItem(
      "businessUnitsToTheStaff",
      JSON.stringify(businessUnitsToTheStaff),
    );
  }, [businessUnitsToTheStaff]);

  useEffect(() => {
    localStorage.setItem("useCasesByStaff", useCases);
  }, [useCases]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const tokenData = await getAccessTokenSilently();
        setAppData((prev) => ({
          ...prev,
          token: tokenData,
        }));
      } catch (error) {
        console.error("Error Token:", error);
      }
    };
    obtenerDatos();
  }, [getAccessTokenSilently]);
  const AuthAndData = useMemo(
    () => ({
      appData,
      businessUnitSigla,
      businessUnitsToTheStaff,
      useCases,
      setAppData,
      setBusinessUnitSigla,
      setUseCases,
      setBusinessUnitsToTheStaff,
    }),
    [appData, businessUnitSigla, businessUnitsToTheStaff, useCases],
  );

  return AuthAndData;
};

export { useValidatingLoginInformation };

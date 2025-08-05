import { useState, useEffect } from "react";

import { getStaffPortalByBusinessManager } from "@services/subMenu";
import { normalizeOptionsByPublicCode } from "@utils/normalizeOptionsPublic";
import { options } from "@config/options/optionMain";
import { IPortalStaff } from "@ptypes/subMenu/types";
import { IUseOptionsByBusinessunits } from "@ptypes/hooks/IUseOptionsByBusinessunits";

const useOptionsByBusinessunits = (props: IUseOptionsByBusinessunits) => {
  const { staffPortalId, businessUnitSigla, optionName } =
    props;
  const [optionsData, setOptionsData] = useState<IPortalStaff[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchOptionsByBusinessUnits = async () => {
      setLoading(true);
      try {
        const businessUnit = JSON.parse(businessUnitSigla || "{}");

        const newOptions = await getStaffPortalByBusinessManager(
          staffPortalId,
          businessUnit.publicCode
        );

        setOptionsData(newOptions);
      } catch (error) {
        console.error("Error en fetchOptionsByBusinessUnits:", error);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchOptionsByBusinessUnits();
  }, [businessUnitSigla]);

  const optionsCards = optionsData
    .filter((option) => normalizeOptionsByPublicCode(option.publicCode, options))
    .map((option) => {
      const normalizedOption = normalizeOptionsByPublicCode(option.publicCode, options);

      return {
        id: option.publicCode,
        publicCode: option.abbreviatedName,
        label: option.abbreviatedName,
        description: option.descriptionUse,
        icon: normalizedOption?.icon || "",
        url: normalizedOption?.url || "",
      };
    });

  const descriptionOptions =
    optionName &&
    optionsCards.find((option) => option.publicCode === optionName);

  return { optionsCards, hasError, loading, descriptionOptions };
};

export { useOptionsByBusinessunits };

import { useState, useEffect } from "react";

import { getStaffPortalByBusinessManager } from "@services/subMenu";
import { IPortalStaff } from "@ptypes/subMenu/types";
import { IUseOptionsByBusinessunits } from "@ptypes/hooks/IUseOptionsByBusinessunits";
import { normalizeOptionsByPublicCode } from "@utils/normalizeOptionsPublic";
import { options } from "@config/options/optionMain";
import { normalizeSubOptionsByPublicCode } from "@utils/normalizesubOptionsPublic";

const useOptionsByBusinessunits = (props: IUseOptionsByBusinessunits) => {
  const { staffPortalId, businessUnitSigla, publicCodeParent, optionName } =
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

  const subOptions = optionsData
    .filter((option) => option.publicCode === publicCodeParent)
    .flatMap((option) =>
      option.subOption.map((item) => {
        const normalizedSubOption = normalizeSubOptionsByPublicCode(
          option.publicCode,
          item.publicCode
        );
        return {
          parentCode: option.publicCode,
          id: normalizedSubOption?.publicCodeOption,
          icon: normalizedSubOption?.icon,
          label: item.abbreviatedName,
          description: item.descriptionUse,
          url: normalizedSubOption?.url || "",
          domain: normalizedSubOption?.domain || "",
          crumbs: normalizedSubOption?.crumbs,
        };
      })
    );

  const descriptionOptions =
    optionName &&
    optionsCards.find((option) => option.publicCode === optionName);

  return { optionsCards, subOptions, hasError, loading, descriptionOptions };
};

export { useOptionsByBusinessunits };

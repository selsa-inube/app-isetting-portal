import { useState, useEffect, useMemo, useContext } from "react";

import { getStaffPortalByBusinessManager } from "@services/subMenu";
import { IUseOptionsByBusinessUnit } from "@ptypes/hooks/IUseOptionsByBusinessunits";
import { getIcon } from "@utils/getIcon";
import { IOptionsByBusinessUnits } from "@ptypes/staffPortal/IOptionsByBusinessUnits";
import { normalizeOptionsByPublicCode } from "@utils/optionByBusinessunit";
import { AuthAndData } from "@context/authAndDataProvider";

const useOptionsByBusinessUnits = (props: IUseOptionsByBusinessUnit) => {
  const { businessUnit, staffPortalId, optionName } = props;

  const { appData } = useContext(AuthAndData);
  const [optionsBusinessUnit, setOptionsBusinessUnit] = useState<
    IOptionsByBusinessUnits[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const fetchOptionBusinessUnitData = async () => {
      if (staffPortalId.length === 0) {
        setOptionsBusinessUnit([]);
        setHasError(false);
        setLoading(false);
        return;
      }

      setLoading(true);
      setHasError(false);
      try {
        const data = await getStaffPortalByBusinessManager(
          staffPortalId,
          appData.user.userAccount
        );
        setOptionsBusinessUnit(data);
      } catch (error) {
        console.info(error);
        setHasError(true);
        setOptionsBusinessUnit([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOptionBusinessUnitData();
  }, [businessUnit, staffPortalId, appData.user]);

  const optionsCards = useMemo(() => {
    if (hasError) {
      return [];
    }

    const cards = optionsBusinessUnit
      .filter((option) => normalizeOptionsByPublicCode(option.publicCode))
      .map((option) => {
        const normalizedOption = normalizeOptionsByPublicCode(
          option.publicCode
        );
        return {
          id: option.publicCode,
          publicCode: option.abbreviatedName,
          description: option.descriptionUse,
          icon: getIcon(option.iconReference, 22, false) ?? "",
          url: normalizedOption?.url ?? "",
        };
      });
    return cards;
  }, [hasError, optionsBusinessUnit]);

  const descriptionOptions = useMemo(() => {
    return optionName
      ? optionsCards.find((option) => option.publicCode === optionName)
      : undefined;
  }, [optionName, optionsCards]);

  return { optionsCards, hasError, loading, descriptionOptions };
};

export { useOptionsByBusinessUnits };

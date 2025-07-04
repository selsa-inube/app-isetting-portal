import { useContext } from "react";
import { appsConfig } from "@pages/rules/config/rules.config";

import { useSubOptions } from "@hooks/subMenu/useSubOptions";
import { useOptionsByBusinessunits } from "@hooks/subMenu/useOptionsByBusinessunits";
import { decrypt } from "@utils/decrypt";
import { catalogsOptionsConfig } from "@config/options/catalogsConfig";
import { AuthAndData } from "@context/authAndDataProvider";
import { catalogName } from "@config/positions/catalogName/inde";
import { PositionsOptionsUI } from "./interface";

const PositionsOptions = () => {
  const { subOptions } = useSubOptions(catalogName);
  const catalogsOptions = catalogsOptionsConfig(subOptions).find(
    (item) => item
  );
  const portalId = localStorage.getItem("portalCode");
  const staffPortalId = portalId ? decrypt(portalId) : "";
  const { businessUnitSigla } = useContext(AuthAndData);
  const { optionsCards, loading } = useOptionsByBusinessunits({
    staffPortalId,
    businessUnitSigla
  });

  if (loading || !optionsCards?.length) {
    return <></>;
  }

  return (
    <PositionsOptionsUI
      appName={optionsCards[0]?.label}
      appDescription={optionsCards[0]?.description}
      appOptions={catalogsOptions}
      appRoute={appsConfig[0]?.crumbs}
    />
  );
};

export { PositionsOptions };

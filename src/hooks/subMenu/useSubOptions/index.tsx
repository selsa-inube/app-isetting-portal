import { useContext } from "react";

import { decrypt } from "@utils/decrypt";
import { useOptionsByBusinessunits } from "../useOptionsByBusinessunits";
import { AuthAndData } from "@context/authAndDataProvider";

export function useSubOptions(catalogName: string) {
  const { businessUnitSigla } = useContext(AuthAndData);
  const portalId = localStorage.getItem("portalCode");
  const staffPortalId = portalId ? decrypt(portalId) : "";
  const { subOptions } = useOptionsByBusinessunits(
    staffPortalId,
    businessUnitSigla,
    catalogName
  );

  return { subOptions };
}

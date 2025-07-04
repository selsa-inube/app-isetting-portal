import { useContext } from "react";
import { decrypt } from "@utils/decrypt";
import { AuthAndData } from "@context/authAndDataProvider";
import { useOptionsByBusinessunits } from "../useOptionsByBusinessunits";
const useSubOptions = (catalogName: string) => {
  const { businessUnitSigla } = useContext(AuthAndData);
  const portalId = localStorage.getItem("portalCode");
  const staffPortalId = portalId ? decrypt(portalId) : "";
  const { subOptions } = useOptionsByBusinessunits({
    staffPortalId,
    businessUnitSigla,
    publicCodeParent:catalogName
  });

  return { subOptions };
};

export { useSubOptions };

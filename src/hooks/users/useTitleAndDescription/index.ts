import { AuthAndData } from "@context/authAndDataProvider";

import { useOptionsByBusinessunits } from "@hooks/subMenu/useOptionsByBusinessunits";
import { decrypt } from "@utils/decrypt";
import { useContext } from "react";

const useTitleAndPrivileges = () => {
  const { businessUnitSigla } = useContext(AuthAndData);
  const portalId = localStorage.getItem("portalCode");
  const staffPortalId = portalId ? decrypt(portalId) : "";

  const { optionsCards } = useOptionsByBusinessunits({
    businessUnitSigla,
    staffPortalId,
  });

  const title = optionsCards[1]?.publicCode;

  return {
    title,
  };
};
export { useTitleAndPrivileges };

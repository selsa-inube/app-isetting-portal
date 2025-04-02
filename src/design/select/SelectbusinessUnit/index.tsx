import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IBusinessUnitsPortalStaff } from "@ptypes/select/selectbusinessUnit/IBusinessUnitsPortalStaff";
import { IBusinessUnitstate } from "@ptypes/select/selectbusinessUnit/IBusinessUnitstate";

import { BusinessUnitsUI } from "./interface";

interface IBusinessUnits {
  businessUnits: IBusinessUnitsPortalStaff[];
}

const BusinessUnits = (props: IBusinessUnits) => {
  const { businessUnits } = props;
  const [search, setSearch] = useState("");
  const [businessUnitLocal, setBusinessUnitLocal] =
    useState<IBusinessUnitstate>({
      ref: null,
      value: true,
    });

  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (businessUnitLocal.ref) {
      businessUnitLocal.ref.checked = false;
    }
    setBusinessUnitLocal({ ref: null, value: true });
    setSearch(event.target.value);
  };

  const handleCChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessUnitLocal({ ref: event.target, value: false });
  };

  const handleSubmit = () => {
    navigate("/login/loading-app");
  };

  const filterBusinessUnits = (
    businessUnits: IBusinessUnitsPortalStaff[],
    search: string
  ) => {
    const searchTerm = search?.toUpperCase();

    return businessUnits.filter((unit) => {
      const businessUnitName = unit?.abbreviatedName?.toUpperCase() || "";
      const businessUnitSigla =
        unit?.businessUnitPublicCode?.toUpperCase() || "";

      return (
        businessUnitName.includes(searchTerm) ||
        businessUnitSigla.includes(searchTerm)
      );
    });
  };

  return (
    <BusinessUnitsUI
      businessUnits={Object.values(businessUnits)}
      search={search}
      businessUnit={businessUnitLocal}
      handleSearchChange={handleSearchChange}
      handleBussinessUnitChange={handleCChange}
      filterBusinessUnits={filterBusinessUnits}
      handleSubmit={handleSubmit}
    />
  );
};

export { BusinessUnits };

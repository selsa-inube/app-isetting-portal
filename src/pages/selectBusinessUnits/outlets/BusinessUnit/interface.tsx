import { MdSearch } from "react-icons/md";
import { basic } from "@design/tokens";
import { Input, Stack, Text, Button } from "@inubekit/inubekit";
import { RadioBusinessUnit } from "@design/feedback/RadioBusinessUnit";
import { NoResultsMessage } from "@design/text/noResultsMessage";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
import {
  StyledBusinessUnits,
  StyledBusinessUnitsList,
  StyledBusinessUnitsItem,
} from "./styles";
import { IBusinessUnitstate } from "./types";

interface IBusinessUnitsUI {
  businessUnits: IBusinessUnitsPortalStaff[];
  search: string;
  businessUnit: IBusinessUnitstate;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBussinessUnitChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  filterBusinessUnits: (
    businessUnits: IBusinessUnitsPortalStaff[],
    search: string
  ) => IBusinessUnitsPortalStaff[];
  handleSubmit: () => void;
}

const BusinessUnitsUI = ({
  businessUnits,
  search,
  businessUnit,
  handleSearchChange,
  filterBusinessUnits,
  handleBussinessUnitChange,
  handleSubmit,
}: IBusinessUnitsUI) => {
  const filteredBusinessUnits = filterBusinessUnits(businessUnits, search);

  return (
    <StyledBusinessUnits>
      <Text type="title" as="h2" textAlign="center">
        Unidades de Negocios
      </Text>
      <Text size="medium" textAlign="center">
        Seleccione la Unidad de Negocio
      </Text>
      <form>
        <Stack direction="column" alignItems="center" gap={basic.spacing.s300}>
          {businessUnits.length > 5 && (
            <Input
              placeholder="Buscar..."
              type="search"
              name="searchBusinessUnits"
              id="searchBusinessUnits"
              value={search}
              fullwidth={true}
              onChange={handleSearchChange}
              iconBefore={<MdSearch size={22} />}
            />
          )}
          {filteredBusinessUnits.length === 0 && (
            <NoResultsMessage search={search} />
          )}
          <StyledBusinessUnitsList $scroll={businessUnits.length > 5}>
            <Stack
              direction="column"
              padding={`${basic.spacing.s0} ${basic.spacing.s100}`}
              alignItems="center"
              gap={basic.spacing.s100}
            >
              {filteredBusinessUnits.map((businessUnit) => (
                <StyledBusinessUnitsItem key={businessUnit.publicCode}>
                  <RadioBusinessUnit
                    name="businessUnit"
                    label={businessUnit.abbreviatedName}
                    id={businessUnit.publicCode}
                    value={businessUnit.abbreviatedName}
                    logo={businessUnit.urlLogo}
                    handleChange={handleBussinessUnitChange}
                  />
                </StyledBusinessUnitsItem>
              ))}
            </Stack>
          </StyledBusinessUnitsList>
          <Button
            type="button"
            disabled={businessUnit.value}
            onClick={handleSubmit}
          >
            Continuar
          </Button>
        </Stack>
      </form>
    </StyledBusinessUnits>
  );
};

export { BusinessUnitsUI };

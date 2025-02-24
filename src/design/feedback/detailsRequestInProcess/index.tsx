import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IEntrys } from "@design/templates/assignmentForm/types";
import { IServerDomain } from "@ptypes/IServerDomain";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { Icon, useMediaQuery, Text } from "@inubekit/inubekit";
import { DetailsRequestsInProgressModal } from "@design/modals/detailsRequestsInProgressModal";
import { labelsOfRequest } from "@config/requestsInProgressTab/details/labelsOfRequest";
import { labelsOfTraceability } from "@config/requestsInProgressTab/details/labelsOfTraceability";
import { StyledContainerIcon } from "./styles";

interface IDetails {
  data: IEntrys;
  showModal: boolean;
  form: { name: string; dateTraceability: string };
  dateOptions: IServerDomain[];
  onToggleModal: () => void;
  onChange: (name: string, newValue: string) => void;
}

const DetailsRequestInProcess = (props: IDetails) => {
  const { data, showModal, form, dateOptions, onToggleModal, onChange } = props;

  const screenTablet = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <StyledContainerIcon onClick={onToggleModal} $isTablet={screenTablet}>
        <Icon
          appearance={ComponentAppearance.DARK}
          icon={<MdOutlineRemoveRedEye />}
          size={screenTablet ? "20px" : "16px"}
          cursorHover
          spacing="narrow"
        />
        {screenTablet && (
          <Text type="body" size="medium">
            Detalles
          </Text>
        )}
      </StyledContainerIcon>

      {showModal && (
        <DetailsRequestsInProgressModal
          data={data}
          portalId="portal"
          dateOptions={dateOptions}
          labelsOfRequest={labelsOfRequest}
          labelsOfTraceability={labelsOfTraceability}
          dateSelected={form.dateTraceability}
          onCloseModal={onToggleModal}
          onChange={onChange}
          onMoreDetails={() => {
            console.log("");
          }}
        />
      )}
    </>
  );
};

export { DetailsRequestInProcess };

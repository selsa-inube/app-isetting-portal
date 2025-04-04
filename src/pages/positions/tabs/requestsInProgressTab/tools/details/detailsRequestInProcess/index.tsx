import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IEntry } from "@ptypes/table/IEntry";

import { ComponentAppearance } from "@ptypes/aparences.types";
import { Icon, useMediaQuery, Text } from "@inubekit/inubekit";

import { labelsOfRequest } from "@config/requestsInProgressTab/details/labelsOfRequest";
import { labelsOfTraceability } from "@config/requestsInProgressTab/details/labelsOfTraceability";
import { StyledContainerIcon } from "./styles";
import { RequestsInProcess } from "../requestsInProcess";

interface IDetails {
  data: IEntry;
  showModal: boolean;
  onToggleModal: () => void;
}

const DetailsRequestInProcess = (props: IDetails) => {
  const { data, showModal, onToggleModal } = props;

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
        <RequestsInProcess
          data={data}
          onCloseModal={onToggleModal}
          labelsOfTraceability={labelsOfTraceability}
          labelsOfRequest={labelsOfRequest}
          isMobile={screenTablet}
          onClick={() => console.log("click")}
        />
      )}
    </>
  );
};

export { DetailsRequestInProcess };

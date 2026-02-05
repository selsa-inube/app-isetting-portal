import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon, Text } from "@inubekit/inubekit";

import { EComponentAppearance } from "@enum/appearances";
import { IDetailsUI } from "@ptypes/missions/requestTab/IDetailsUI";
import { detailsLabels } from "@config/missions/requestTab/table/generic/detailsLabels";
import { labelsOfTraceability } from "@config/requestsInProgressTab/details/labelsOfTraceability";
import { StyledContainerIcon } from "./styles";

import { RequestsInProcess } from "@design/modals/requestInProgressModal";
import { DetailsMissionModal } from "@pages/missions/tools/detailsModal/detailsMissionModal";
import { labelsOptions } from "@config/missions/missionTab/table/labelsOptions";

const DetailsUI = (props: IDetailsUI) => {
  const {
    data,
    filteredTabs,
    isMobile,
    isSelectedRequest,
    labelsOfRequest,
    screenTablet,
    showErrorData,
    showModal,
    showTrazabilityData,
    title,
    showMoreDetailsModal,
    normalizeDetails,
    onMoreDetails,
    onTabRequestChange,
    onToggleModal,
  } = props;

  return (
    <>
      <StyledContainerIcon onClick={onToggleModal} $isTablet={screenTablet}>
        <Icon
          appearance={EComponentAppearance.DARK}
          icon={<MdOutlineRemoveRedEye />}
          size={screenTablet ? "20px" : "16px"}
          cursorHover
          spacing="narrow"
        />
        {screenTablet && (
          <Text type="body" size="medium">
            {detailsLabels.titleMobile}
          </Text>
        )}
      </StyledContainerIcon>

      {showModal && (
        <RequestsInProcess
          data={data}
          title={title}
          labelsOfRequest={labelsOfRequest}
          labelsOfTraceability={labelsOfTraceability}
          onCloseModal={onToggleModal}
          isMobile={isMobile}
          onClick={onMoreDetails}
          isSelected={isSelectedRequest}
          filteredTabs={filteredTabs}
          showTrazabilityData={showTrazabilityData}
          showErrorData={showErrorData}
          onTabChange={onTabRequestChange}
        />
      )}

      {showMoreDetailsModal && (
        <DetailsMissionModal
          infoData={normalizeDetails ?? {}}
          labels={labelsOptions}
          onClose={onMoreDetails}
          smallScreen={screenTablet}
        />
      )}
    </>
  );
};

export { DetailsUI };

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon } from "@inubekit/inubekit";
import { useDetailsAssignments } from "@hooks/assignments/useDetailsAssignments";
import { MoreDetails } from "@pages/assignments/moreDetails";
import { EComponentAppearance } from "@enum/appearances";
import { portalId } from "@config/portalId";
import { moreLabelsDetails } from "@config/assignments/details/moreLabelsDetails";
import { moreDetailsModal } from "@config/assignments/details/moreDetailsModal";
import { IDetails } from "@ptypes/assignments/IDetailsUI";
import { IEntry } from "@ptypes/design/table/IEntry";
import { StyledContainerIcon } from "./styles";

const Details = (props: IDetails) => {
  const { data } = props;

  const {
    showModal,
    smallScreen,
    normalizeData,
    pageLength,
    columnWidths,
    onToggleModal,
  } = useDetailsAssignments({
    data,
  });

  return (
    <>
      <StyledContainerIcon onClick={onToggleModal} $isTablet={smallScreen}>
        <Icon
          appearance={EComponentAppearance.DARK}
          icon={<MdOutlineRemoveRedEye />}
          size="16px"
          cursorHover
          spacing="narrow"
        />
      </StyledContainerIcon>

      {showModal && (
        <MoreDetails
          data={normalizeData as IEntry}
          labelsDetails={moreLabelsDetails}
          isMobile={smallScreen}
          portalId={portalId}
          onCloseModal={onToggleModal}
          title={moreDetailsModal.titleDetails}
          moreDetailsModal={moreDetailsModal}
          pageLength={pageLength}
          columnWidths={columnWidths}
        />
      )}
    </>
  );
};

export { Details };

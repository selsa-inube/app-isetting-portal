import { ModalWrapper } from "@design/modals/modalWrapper";
import { BorderStack } from "@design/modals/borderStack";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import RequestTitleSection from "@pages/positions/tabs/requestsInProgressTab/tools/details/requestsInProcess/requestTitleSection";
import { IDetailsMissionModalUI } from "@ptypes/missions/IDetailsMissionModalUI";
import { LabelsInfo } from "./labelsInfo";
import { TableView } from "./tableView";
import { detailsMission } from "@config/missions/details";

const DetailsMissionModalUI = (props: IDetailsMissionModalUI) => {
  const { onClose, labels, infoData, hasLabels, dataTable, isMobile } = props;

  return (
    <ModalWrapper
      portalId="portal"
      isMobile={false}
      labelActionButton={detailsMission.detailsMissionsInfoText}
      labelCloseButton={detailsMission.detailsMissionsInfoText}
      labelCloseModal={detailsMission.detailsMissionsInfoText}
      title={detailsMission.detailsMissions}
      onCloseModal={onClose}
      onClick={onClose}
      width={isMobile ? "335px" : "700px"}
      height={isMobile ? "auto" : "100%"}
    >
      <BorderStack
        direction="column"
        borderRadius={basic.spacing.s100}
        border={inube.palette.neutral.N40}
        boxSizing="border-box"
        width="100%"
        height="100%"
        gap={basic.spacing.s200}
        padding={isMobile ? basic.spacing.s150 : basic.spacing.s200}
      >
        <RequestTitleSection requestType={detailsMission.detailsMissions} />
        <LabelsInfo labels={labels} infoData={infoData} hasLabels={hasLabels} />
        {dataTable && <TableView dataTable={dataTable} />}
      </BorderStack>
    </ModalWrapper>
  );
};

export { DetailsMissionModalUI };

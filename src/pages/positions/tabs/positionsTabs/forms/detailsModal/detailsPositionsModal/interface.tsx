import { DetailsPosition } from "@config/positions/details";
import { IDetailsPositionsModalUI } from "@ptypes/positions/details/IDetailsPositionsModalUI";
import { LabelsInfo } from "./labelsInfo";
import { TableView } from "./tableView";
import { ModalWrapper } from "@design/modals/modalWrapper";
import { BorderStack } from "@design/modals/borderStack";
import { basic } from "@design/tokens";
import RequestTitleSection from "@pages/positions/tabs/requestsInProgressTab/tools/details/requestsInProcess/requestTitleSection";
import { EComponentAppearance } from "@enum/appearances";

const DetailsPositionsModalUI = (props: IDetailsPositionsModalUI) => {
  const { onClose, labels, infoData, hasLabels, dataTable, isMobile } = props;

  return (
    <ModalWrapper
      portalId="portal"
      isMobile={false}
      labelActionButton={DetailsPosition.detailsPositionsInfoText}
      labelCloseButton={DetailsPosition.detailsPositionsInfoText}
      labelCloseModal={DetailsPosition.detailsPositionsInfoText}
      title={DetailsPosition.detailsPositions}
      onCloseModal={onClose}
      onClick={onClose}
      width={isMobile ? "335px" : "700px"}
      height={isMobile ? "auto" : "100%"}
    >
      <BorderStack
        direction="column"
        borderRadius={basic.spacing.s100}
        border={EComponentAppearance.DARK}
        boxSizing="border-box"
        width="100%"
        height="100%"
        gap={basic.spacing.s200}
        padding={isMobile ? basic.spacing.s150 : basic.spacing.s200}
      >
        <RequestTitleSection requestType={DetailsPosition.detailsPositions} />
        <LabelsInfo labels={labels} infoData={infoData} hasLabels={hasLabels} />
        {dataTable && <TableView dataTable={dataTable} />}
      </BorderStack>
    </ModalWrapper>
  );
};

export { DetailsPositionsModalUI };

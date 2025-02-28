import { FormikProps } from "formik";
import {
  Breadcrumbs,
  Button,
  Stack,
  Tabs,
  useMediaQuery,
} from "@inubekit/inubekit";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { InitializerForm } from "@design/forms/InitializerForm";
import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { RequestProcessModal } from "@design/modals/requestProcessModal";
import { requestProcessMessage } from "@config/positionsTabs/requestProcessMessage";
import { requestStatusMessage } from "@config/positionsTabs/generics/requestStatusMessage";
import { DecisionModal } from "@design/modals/decisionModal";
import { requestPendingModal } from "@config/positionsTabs/generics/requestPendingModal";
import { IEditPositionsTabsConfig } from "@ptypes/positions/tabs/ITabConfig/IEditDestinationTabsConfig";
import { IEntry } from "@design/templates/assignmentForm/types";
import { IRequestSteps } from "@design/feedback/requestProcess/types";
import { Title } from "@design/label/Title";
import { crumbsEditPosition } from "@config/positions/editPositions/navigation";
import {
  IFormAddPosition,
  IGeneralInformationEntry,
} from "../addPosition/types";

import { GeneralInformationForm } from "../../forms/generalInformationForm";

interface IEditPositionsUI {
  editPositionTabsConfig: IEditPositionsTabsConfig;
  generalInformationRef: React.RefObject<FormikProps<IGeneralInformationEntry>>;
  initialValues: IFormAddPosition;
  isSelected: string;
  requestSteps: IRequestSteps[];
  loading: boolean;
  showPendingReqModal: boolean;
  showRequestProcessModal: boolean;
  savePositions: ISaveDataResponse;
  onTabChange: (id: string) => void;
  onButtonClick: () => void;
  onReset: () => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseRequestStatus: () => void;
  onClosePendingReqModal: () => void;
  setSelectedToggle: React.Dispatch<React.SetStateAction<IEntry[] | undefined>>;
}

const EditPositionsUI = (props: IEditPositionsUI) => {
  const {
    editPositionTabsConfig,
    generalInformationRef,
    initialValues,
    savePositions,
    isSelected,
    loading,
    showRequestProcessModal,
    onButtonClick,
    onTabChange,
    onCloseRequestStatus,
    onClosePendingReqModal,
    setIsCurrentFormValid,
    setSelectedToggle,
    showPendingReqModal,
    requestSteps,
    onReset,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 990px)");

  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={
        smallScreen
          ? `${basic.spacing.s200}`
          : `${basic.spacing.s300} ${basic.spacing.s800}`
      }
    >
      <Stack gap={basic.spacing.s300} direction="column">
        <Stack gap={basic.spacing.s300} direction="column">
          <Breadcrumbs crumbs={crumbsEditPosition} />
          <Title
            title="Destinos de dinero"
            description=" Destino del dinero para crédito."
            sizeTitle="large"
          />
        </Stack>
        <Stack gap={basic.spacing.s300} direction="column">
          <Tabs
            tabs={Object.values(editPositionTabsConfig)}
            selectedTab={isSelected}
            onChange={onTabChange}
          />
          <Stack direction="column">
            {isSelected === editPositionTabsConfig.generalInformation.id && (
              <GeneralInformationForm
                ref={generalInformationRef}
                initialValues={initialValues.generalInformation.values}
                onFormValid={setIsCurrentFormValid}
                editDataOption
                loading={loading}
                handleNextStep={() => false}
              />
            )}
            {isSelected === editPositionTabsConfig.selectionRoles.id && (
              <InitializerForm
                key={isSelected}
                dataOptionsForms={initialValues.rolesStaff.values}
                dataOptionsValueSelect={initialValues.applicationStaff.values}
                setSelectedToggle={setSelectedToggle}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
      <Stack justifyContent="flex-end" gap={basic.spacing.s250}>
        <Button
          fullwidth={smallScreen}
          onClick={onReset}
          appearance={ComponentAppearance.GRAY}
          disabled={false}
        >
          Cancelar
        </Button>

        <Button
          fullwidth={smallScreen}
          onClick={onButtonClick}
          disabled={false}
          loading={loading}
          appearance={ComponentAppearance.PRIMARY}
        >
          Guardar
        </Button>
      </Stack>
      {showRequestProcessModal && savePositions && (
        <RequestProcessModal
          portalId="portal"
          saveData={savePositions}
          descriptionRequestProcess={requestProcessMessage}
          descriptionRequestStatus={requestStatusMessage}
          loading={loading}
          requestProcessSteps={requestSteps}
          appearance={ComponentAppearance.SUCCESS}
          onCloseRequestStatus={onCloseRequestStatus}
        />
      )}
      {showPendingReqModal && savePositions.requestNumber && (
        <DecisionModal
          portalId="portal"
          title={requestPendingModal(savePositions.requestNumber).title}
          description={
            requestPendingModal(savePositions.requestNumber).description
          }
          actionText={
            requestPendingModal(savePositions.requestNumber).actionText
          }
          onCloseModal={onClosePendingReqModal}
          onClick={onClosePendingReqModal}
          withCancelButton={false}
        />
      )}
    </Stack>
  );
};

export { EditPositionsUI };

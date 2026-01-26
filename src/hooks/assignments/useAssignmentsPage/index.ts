import { ITab, useMediaQuery } from "@inubekit/inubekit";
import { useContext, useEffect, useState } from "react";
import { ChangeToRequestTab } from "@context/changeToRequestTab";
import { getRequestsInProgress } from "@services/requestInProgress/getRequestsInProgress";
import { useOptionsByBusinessUnits } from "@hooks/subMenu/useOptionsByBusinessUnits";
import { EOptionsByBusinessunits } from "@enum/optionsByBusinessunits";
import { ERequestAssignments } from "@enum/requestAssignments";
import { AuthAndData } from "@context/authAndDataProvider";
import { mediaQueryTabletMain } from "@config/environment";
import { assignmentsTabsConfig } from "@config/assignments/tabs";
import { IUseAssignmentsPage } from "@ptypes/hooks/assignments/IUseAssignmentsPage";
import { IAssignmentsTabsConfig } from "@ptypes/assignments/IAssignmentsTabsConfig";
import { IRequestsInProgress } from "@ptypes/requestsInProgress/IRequestsInProgress";

const useAssignmentsPage = (props: IUseAssignmentsPage) => {
  const { businessUnitSigla, businessManager, user, token } = props;
  const { appData } = useContext(AuthAndData);
  const smallScreen = useMediaQuery(mediaQueryTabletMain);

  const tabs = assignmentsTabsConfig(smallScreen);

  const [requestsInProgress, setRequestsInProgress] = useState<
    IRequestsInProgress[]
  >([]);
  const [isSelected, setIsSelected] = useState<string>(tabs.assigments.id);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [showAbsenceModal, setShowAbsenceModal] = useState<boolean>(false);

  const { descriptionOptions } = useOptionsByBusinessUnits({
    businessUnit: businessUnitSigla,
    staffPortalId: appData.portal.publicCode,
    businessUnitPublicCode: appData.businessUnit.publicCode,
    user: user,
    token: token,
    optionName: EOptionsByBusinessunits.ASSIGNMENTS,
  });

  const onToggleModal = () => {
    setShowModal(!showModal);
  };

  const onToggleInfoModal = () => {
    setShowInfoModal(!showInfoModal);
  };
  const onCloseMenu = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const fetchRequestsInProgressData = async () => {
      try {
        if (businessManager.length > 0) {
          const data = await getRequestsInProgress(
            ERequestAssignments.ASSIGNMENTS,
            businessManager,
            token,
          );
          setRequestsInProgress(data);
        }
      } catch (error) {
        console.info(error);
      }
    };

    fetchRequestsInProgressData();
  }, [businessManager]);

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };
  const { changeTab, setChangeTab } = useContext(ChangeToRequestTab);

  useEffect(() => {
    if (changeTab) {
      setIsSelected(tabs.requestsInProgress.id);
    }
  }, [changeTab]);

  useEffect(() => {
    if (isSelected === tabs.requestsInProgress.id) {
      setChangeTab(false);
      setIsSelected(tabs.requestsInProgress.id);
    }
  }, [isSelected]);

  const filteredTabsConfig = Object.keys(tabs).reduce((visibleTabs, key) => {
    const tab = tabs[key as keyof typeof assignmentsTabsConfig];

    if (
      key === tabs.requestsInProgress.id &&
      requestsInProgress &&
      requestsInProgress.length === 0
    ) {
      return visibleTabs;
    }

    if (tab !== undefined) {
      visibleTabs[key as keyof IAssignmentsTabsConfig] = tab;
    }
    return visibleTabs;
  }, {} as IAssignmentsTabsConfig);

  const showAssignmentstTab = isSelected === tabs.assigments.id;

  const showRequestsInProgressTab = isSelected === tabs.requestsInProgress.id;

  const assignmentsTabs: ITab[] = Object.values(filteredTabsConfig);

  return {
    isSelected,
    descriptionOptions,
    showAssignmentstTab,
    showRequestsInProgressTab,
    smallScreen,
    assignmentsTabs,
    filteredTabsConfig,
    showModal,
    showInfoModal,
    showAbsenceModal,
    setShowAbsenceModal,
    onToggleInfoModal,
    onCloseMenu,
    onToggleModal,
    handleTabChange,
  };
};

export { useAssignmentsPage };

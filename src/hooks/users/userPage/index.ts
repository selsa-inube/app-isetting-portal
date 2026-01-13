import { useContext, useEffect, useState } from "react";

import { useMediaQuery } from "@inubekit/inubekit";

import { decrypt } from "@utils/decrypt";
import { AuthAndData } from "@context/authAndDataProvider";
import { mediaQueryTabletMain } from "@config/environment";
import { usersTabsConfig } from "@config/users/tabs";
import { useOptionsByBusinessUnits } from "@hooks/subMenu/useOptionsByBusinessUnits";

import { IUseUserPage } from "@ptypes/hooks/IUseUserPage";
import { ChangeToRequestTab } from "@context/changeToRequestTab";
import { getRequestsInProgress } from "@services/requestInProgress/getRequestsInProgress";
import { IRequestsInProgress } from "@ptypes/requestsInProgress/IRequestsInProgress";
import { IUsersTabsConfig } from "@ptypes/hooks/IUseUserPage/tabs";
import { ERequestUsers } from "@enum/requestUsers";

const useUserPage = (props: IUseUserPage) => {
  const { businessManager } = props;
  const smallScreen = useMediaQuery(mediaQueryTabletMain);
  const tabs = usersTabsConfig(smallScreen);
  const [isSelected, setIsSelected] = useState<string>(tabs.staff.id);
  const [requestsInProgress, setRequestsInProgress] = useState<
    IRequestsInProgress[]
  >([]);
  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };
  const { businessUnitSigla } = useContext(AuthAndData);
  const portalId = localStorage.getItem("portalCode");
  const staffPortalId = portalId ? decrypt(portalId) : "";
  const [loading, setLoading] = useState(true);
  const { optionsCards } = useOptionsByBusinessUnits({
    businessUnit: businessUnitSigla,
    staffPortalId,
  });

  const title = optionsCards[3]?.publicCode;

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

  useEffect(() => {
    const fetchRequestsInProgressData = async () => {
      setLoading(true);
      try {
        if (businessManager.length > 0) {
          const data = await getRequestsInProgress(
            ERequestUsers.STAFF,
            businessManager
          );
          setRequestsInProgress(data);
        }
      } catch (error) {
        console.info(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequestsInProgressData();
  }, [businessManager]);
  const filteredTabsConfig = Object.keys(tabs).reduce((allTabs, key) => {
    const tab = tabs[key as keyof typeof usersTabsConfig];

    if (
      key === tabs.requestsInProgress.id &&
      requestsInProgress &&
      requestsInProgress.length === 0
    ) {
      return allTabs;
    }

    if (tab !== undefined) {
      allTabs[key as keyof IUsersTabsConfig] = tab;
    }
    return allTabs;
  }, {} as IUsersTabsConfig);

  const showStaffTab = isSelected === tabs.staff.id;

  const showRequestsInProgressTab = isSelected === tabs.requestsInProgress.id;

  const userTabs = Object.values(filteredTabsConfig);

  return {
    smallScreen,
    isSelected,
    handleTabChange,
    title,
    showStaffTab,
    showRequestsInProgressTab,
    userTabs,
    loading,
  };
};
export { useUserPage };

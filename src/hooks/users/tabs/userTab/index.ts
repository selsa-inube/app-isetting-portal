import { useState, useMemo, useContext } from "react";

import { useMediaQuery } from "@inubekit/inubekit";

import { enviroment } from "@config/environment";
import { useValidateUseCase } from "@hooks/useValidateUseCase";
import { EUseCaseTypes } from "@enum/useCaseTypes";
import { addUserPath } from "@config/users/addUsers/path";
import { useUserConsult } from "./usersConsult";
import { AuthAndData } from "@context/authAndDataProvider";

const useSearchAndPageControlUser = () => {
  const { appData } = useContext(AuthAndData);
  const [searchService, setSearchService] = useState<string>("");
  const [entryDeleted, setEntryDeleted] = useState<string | number>("");
  const { userData, loading } = useUserConsult(appData.businessUnit.publicCode);

  const filteredData = useMemo(() => {
    return userData
      .filter((row) =>
        Object.values(row).some((value) =>
          value?.toString().toLowerCase().includes(searchService.toLowerCase())
        )
      )
      .filter((row) => row.staffId !== entryDeleted)
      .map((row) => ({
        id: row.staffId,
        abbreviatedName: row.staffName,
      }));
  }, [userData, searchService, entryDeleted]);

  const handleSearchService = (value: React.ChangeEvent<HTMLInputElement>) => {
    setSearchService(value.target.value);
  };
  const smallScreen = useMediaQuery(enviroment.IS_MOBILE_970);
  const direction = smallScreen ? "column-reverse" : "column";

  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);

  const { disabledButton } = useValidateUseCase({
    useCase: EUseCaseTypes.ADD_SUITE,
  });

  const handleToggleInfoModal = () => {
    if (disabledButton) {
      setShowInfoModal(!showInfoModal);
    }
  };
  const path = disabledButton ? "" : addUserPath;

  return {
    searchService,
    handleSearchService,
    userData,
    filteredData,
    loading,
    setEntryDeleted,
    entryDeleted,
    smallScreen,
    direction,
    disabledButton,
    showInfoModal,
    handleToggleInfoModal,
    path,
  };
};

export { useSearchAndPageControlUser };

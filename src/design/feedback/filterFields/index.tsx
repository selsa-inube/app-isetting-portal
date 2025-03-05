import { useEffect, useState } from "react";

import { MdOutlineFilterAltOff, MdOutlineFilterAlt } from "react-icons/md";
import { ILabel } from "./types";
import { StyledFilterdUserCard, StyledSearchUserCard } from "./styles";
import { Button, Stack, useMediaQuery } from "@inubekit/inubekit";

import { FilterModal } from "@design/modals/filterModal";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IOptionItemChecked } from "@design/select/OptionItem";

interface IFilterFields {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  options: IOptionItemChecked[];
  userData: { [key: string]: string | number }[] | Record<string, unknown>[];
  actionText: string;
  title: string;
  labels?: ILabel[];
  onUserSelect: (data: { [key: string]: string | number }) => void;
  onReset: (field: () => void) => void;
  onCloseModal: () => void;
  onClick: () => void;
  onSelectChange: (options: IOptionItemChecked[]) => void;
  idLabel?: string;
  nameLabel?: string;
  selectedId?: string;
  required?: boolean;
  message?: string;
  status?: string | null;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FilterFields(props: IFilterFields) {
  const {
    options,
    actionText,
    userData,
    title,
    idLabel = "userID",
    nameLabel = "username",
    selectedId,
    onReset,
    onClick,
    onSelectChange,
  } = props;
  const [showModal, setShowModal] = useState(false);

  const [selectedUsername, setSelectedUsername] = useState(
    String(
      userData.find((data) => data[idLabel] === selectedId)?.[nameLabel] || ""
    )
  );

  const [validateCardRemoved, setValidateCardRemoved] = useState(false);
  console.log(selectedUsername);
  const smallScreen = useMediaQuery("(max-width: 970px)");

  useEffect(() => {
    setSelectedUsername(
      String(
        userData.find((data) => data[idLabel] === selectedId)?.[nameLabel] || ""
      )
    );
  }, [idLabel, selectedId, nameLabel, userData]);

  const resetSelectedUser = () => {
    setSelectedUsername("");
  };

  useEffect(() => {
    if (onReset) {
      onReset(resetSelectedUser);
    }
  }, [onReset]);

  useEffect(() => {
    if (validateCardRemoved) {
      setSelectedUsername("");
    }
  }, [validateCardRemoved]);

  const handleToggleModal = () => {
    setShowModal(!showModal);
    setValidateCardRemoved(false);
  };

  // const handleUserSelect = (data: { [key: string]: string | number }) => {
  //   if (data && data[nameLabel]) {
  //     setSelectedUsername(String(data[nameLabel]));
  //   }
  //   onUserSelect(data);
  //   handleToggleModal();
  // };

  return (
    <>
      <StyledSearchUserCard $smallScreen={smallScreen} $isActive={showModal}>
        <Stack gap="20px">
          <StyledFilterdUserCard
            $smallScreen={smallScreen}
            $isActive={showModal}
          ></StyledFilterdUserCard>
          <Stack gap="10px">
            <Button appearance="gray" iconBefore={<MdOutlineFilterAltOff />}>
              Quitar
            </Button>
            <Button
              onClick={handleToggleModal}
              iconBefore={<MdOutlineFilterAlt />}
            >
              Filtrar
            </Button>
          </Stack>
        </Stack>
      </StyledSearchUserCard>
      {showModal && (
        <FilterModal
          actionText={actionText}
          appearance={ComponentAppearance.PRIMARY}
          isLoading={false}
          portalId="portal"
          title={title}
          options={options}
          onCloseModal={handleToggleModal}
          onClick={onClick}
          onSelectChange={onSelectChange}
        />
      )}
    </>
  );
}

export { FilterFields };
export type { IFilterFields };

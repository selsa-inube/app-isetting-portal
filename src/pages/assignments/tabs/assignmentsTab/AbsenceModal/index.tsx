import { Select, Stack, Text, Toggle } from "@inubekit/inubekit";

import { ModalWrapper } from "@design/modals/modalWrapper";

import { IAbsenceModal } from "@ptypes/assignments/IAbsenceModal";
import { detailsAbsenceModal } from "@config/assignments/generic/detailsAbsenceModal";
import { portalId } from "@config/portalId";
import { basic } from "@design/tokens";
import { isInvalid } from "@utils/isInvalid";
import { EComponentAppearance } from "@enum/appearances";
import { EBooleanText } from "@enum/booleanText";

const AbsenceModal = (props: IAbsenceModal) => {
  const {
    isMobile,
    isActiveChecked,
    absentOfficialOptions,
    formik,
    disabled,
    onSelectChange,
    onSelectCheckChange,
    onCloseModal,
    onClick,
  } = props;

  const toggleLabel = isActiveChecked ? EBooleanText.YES : EBooleanText.NO;

  return (
    <ModalWrapper
      portalId={portalId}
      width={isMobile ? "335px" : "450px"}
      height="auto"
      isMobile={isMobile}
      labelActionButton={detailsAbsenceModal.labelActionButton}
      labelCloseButton={detailsAbsenceModal.labelCloseButton}
      labelCloseModal={detailsAbsenceModal.labelCloseModal}
      title={detailsAbsenceModal.title}
      withCancelButton={true}
      onCloseModal={onCloseModal}
      onClick={onClick}
      overflowY="initial"
      disabledActionButton={disabled}
    >
      <Stack
        direction="column"
        width="100%"
        height="100%"
        gap={basic.spacing.s250}
      >
        <Text size="medium">{detailsAbsenceModal.description}</Text>

        <Toggle
          checked={isActiveChecked}
          id="isActive"
          name="isActive"
          margin={basic.spacing.s0}
          onChange={onSelectCheckChange}
          padding={basic.spacing.s0}
          size="large"
        >
          <Text
            weight="bold"
            size="medium"
            appearance={
              isActiveChecked
                ? `${EComponentAppearance.SUCCESS}`
                : `${EComponentAppearance.DARK}`
            }
          >
            {toggleLabel}
          </Text>
        </Toggle>

        {isActiveChecked && (
          <Select
            id="absentOfficial"
            name="absentOfficial"
            label={detailsAbsenceModal.labelAbsentOfficial}
            placeholder={detailsAbsenceModal.placeholderAbsentOfficial}
            onChange={onSelectChange}
            options={absentOfficialOptions ?? []}
            size="compact"
            value={formik.values.absentOfficial ?? ""}
            fullwidth
            onBlur={formik.handleBlur}
            message={formik.errors.absentOfficial}
            invalid={isInvalid(formik, "absentOfficial")}
          />
        )}
      </Stack>
    </ModalWrapper>
  );
};

export { AbsenceModal };

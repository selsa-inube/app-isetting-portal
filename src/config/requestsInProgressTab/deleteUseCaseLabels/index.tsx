import { Text } from "@inubekit/inubekit";
import { EComponentAppearance } from "@enum/appearances";

const deleteUseCaseLabels = (
  abbreviatedName: string,
  businessCase?: string,
) => {
  return {
    description: (
      <Text
        as="span"
        type="label"
        size="large"
        appearance={EComponentAppearance.GRAY}
      >
        {`Se solicitó la eliminación del ${businessCase}  `}
        <Text
          as="span"
          type="label"
          size="large"
          appearance={EComponentAppearance.GRAY}
          weight="bold"
        >
          {abbreviatedName}
        </Text>
      </Text>
    ),
  };
};

export { deleteUseCaseLabels };

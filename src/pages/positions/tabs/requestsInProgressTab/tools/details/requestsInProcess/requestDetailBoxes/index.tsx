import { Stack } from "@inubekit/inubekit";
import { DetailBox } from "@design/feedback/detailBox";
import { basic } from "@design/tokens";
import { IRequestDetailBoxes } from "@ptypes/requestsInProgress/IRequestDetailBoxes";
import { EComponentAppearance } from "@enum/appearances";

const RequestDetailBoxes = (props: IRequestDetailBoxes) => {
  const { labels, data, isMobile } = props;
  return (
    <Stack direction={isMobile ? "column" : "row"} gap={basic.spacing.s250}>
      {labels.map(
        (field, id) =>
          data[field.id] && (
            <DetailBox
              key={id}
              field={field}
              data={data}
              id={id}
              borderRadius={basic.spacing.s100}
              padding={`${basic.spacing.s075} ${basic.spacing.s150}`}
              width={isMobile ? "253px" : "240px"}
              borderColor={EComponentAppearance.DARK}
              ellipsis
            />
          )
      )}
    </Stack>
  );
};

export default RequestDetailBoxes;

import { Stack } from "@inubekit/inubekit";
import { DetailBox } from "@design/feedback/detailBox";
import { basic } from "@design/tokens";
import { inube } from "@inubekit/inubekit";
import { IRequestDetailBoxes } from "@ptypes/requestsInProgress/IRequestDetailBoxes";

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
              borderColor={inube.palette.neutral.N40}
              ellipsis
            />
          )
      )}
    </Stack>
  );
};

export default RequestDetailBoxes;

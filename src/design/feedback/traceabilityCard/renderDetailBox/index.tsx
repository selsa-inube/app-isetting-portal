import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { IRenderDetailBox } from "@ptypes/traceabilityCard/IRenderDetailBox";
import { DetailBox } from "../../detailBox";

const RenderDetailBox = (props: IRenderDetailBox) => {
  const { field, id, data, isMobile, withTag } = props;
  return (
    <DetailBox
      key={id}
      field={field}
      data={data}
      id={id}
      backgroundColor={inube.palette.neutral.N10}
      borderRadius={basic.spacing.s100}
      padding={
        isMobile
          ? `${basic.spacing.s075}`
          : `${basic.spacing.s075} ${basic.spacing.s150}`
      }
      width="100%"
      {...(withTag && { withTag })}
    />
  );
};

export { RenderDetailBox };

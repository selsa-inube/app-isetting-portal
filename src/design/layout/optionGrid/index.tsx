import { Grid, useMediaQuery } from "@inubekit/inubekit";

import { basic } from "@design/tokens";
import {
  ActionItemBlock,
  IActionItemBlock,
} from "@design/cards/actionItemBlock";
import { enviroment } from "@config/environment";

interface IContentFrameworkGrid {
  appOptions: IActionItemBlock[];
}

const ContentFrameworkGrid = (props: IContentFrameworkGrid) => {
  const { appOptions } = props;

  const screenMovil = useMediaQuery(enviroment.IS_MOBILE_580);

  return (
    <Grid
      templateColumns={
        screenMovil ? "1fr" : "repeat(auto-fill,minmax(auto, 205px))"
      }
      autoRows="auto"
      gap={basic.spacing.s24}
    >
      {appOptions.map((item) => (
        <ActionItemBlock
          id={item.id}
          key={item.id}
          icon={item.icon}
          label={item.label}
          description={item.description}
          url={item.url}
          domain={item.domain}
        />
      ))}
    </Grid>
  );
};

export { ContentFrameworkGrid };
export type { IContentFrameworkGrid };

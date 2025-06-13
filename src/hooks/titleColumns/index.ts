import { useMemo } from "react";
import { ITitle } from "@ptypes/design/table/ITitle";
import { IBreakpoint } from "@ptypes/design/table/IBreakpoint";
import { totalTitleColumns } from "../../utils/table/totalTitleColumns";

const useTitleColumns = (
  titles: ITitle[],
  breakpoints: IBreakpoint[],
  media: Record<string, boolean>,
  findCurrentMediaQuery: number,
) =>
  useMemo(
    () => totalTitleColumns(titles, breakpoints, findCurrentMediaQuery),
    [titles, breakpoints, media],
  );

export { useTitleColumns };

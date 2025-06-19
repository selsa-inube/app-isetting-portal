import { useMemo } from "react";
import { IBreakpoint } from "@ptypes/design/table/IBreakpoint";

const useGetQueriesArray = (breakpoints: IBreakpoint[]) =>
  useMemo(
    () => breakpoints?.map((breakpoint) => breakpoint.breakpoint),
    [breakpoints],
  );

export { useGetQueriesArray };

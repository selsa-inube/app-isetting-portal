import { Td } from "@inubekit/inubekit";

import { ActionMobile } from "../actionMobile";
import { IAction, IEntry } from "../types";

const ShowAction = (
  actionContent: IAction[],
  entry: IEntry,
  mediaQuery: boolean
) => {
  return mediaQuery ? (
    <>
      <Td type="custom" align="center">
        <ActionMobile actions={actionContent} entry={entry} />
      </Td>
    </>
  ) : (
    <>
      {actionContent.map((action) => (
        <Td type="custom" align="center" key={`${entry.id}-${action.id}`}>
          {action.content(entry)}
        </Td>
      ))}
    </>
  );
};

export { ShowAction };

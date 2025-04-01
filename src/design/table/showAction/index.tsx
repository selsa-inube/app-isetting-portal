import { Td } from "@inubekit/inubekit";
import { IEntry } from "@ptypes/table/IEntry";
import { IAction } from "@ptypes/table/IAction";
import { ActionMobile } from "../actionMobile";

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

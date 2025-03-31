import { useState, useEffect } from "react";
import { Td, Th } from "@inubekit/inubekit";
import { IAction } from "@pages/positions/tabs/positionsTabs/types";
import { ActionMobile } from "../actionMobile";
import { IEntry } from "../types";
import { IFormEntry } from "@design/templates/assignmentForm/types";

const ActionRenderer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1069);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1069);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ShowAction = (actionContent: IAction[], entry: IEntry) => {
    return isMobile ? (
      <Td type="custom" align="center">
        <ActionMobile actions={actionContent} entry={entry as IFormEntry} />
      </Td>
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

  const ShowActionTitle = (actionTitle: IAction[]) => {
    return isMobile ? (
      <Th key="actions-title">Acciones</Th>
    ) : (
      actionTitle.map((action) => (
        <Th key={`action-${action.id}`}>{action.actionName}</Th>
      ))
    );
  };

  return { ShowAction, ShowActionTitle };
};

export { ActionRenderer };

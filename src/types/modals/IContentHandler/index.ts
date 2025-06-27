import { IRequestProcessModal } from "@ptypes/IRequestProcessModal";
interface IContentHandler
  extends Omit<IRequestProcessModal, "portalId" | "loading"> {
  isMobile: boolean;
}
export type { IContentHandler };

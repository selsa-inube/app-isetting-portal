import { decrypt } from "../decrypt";

const safeDecrypt = (value?: string | null) => {
  if (!value) return "";
  try {
    return decrypt(value);
  } catch {
    return "";
  }
};
export { safeDecrypt };

import CryptoJS from "crypto-js";
import { enviroment } from "@config/environment";
const secretKey = CryptoJS.enc.Hex.parse(enviroment.SECRET_KEY_PORTAL_ID);
const iv = CryptoJS.enc.Hex.parse(btoa(enviroment.SECRET_KEY_PORTAL_NAME));

const decrypt = (data: string) => {
  try {
    if (!data) return "";
    const bytes = CryptoJS.AES.decrypt(data, secretKey, { iv });
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error("Decryption error:", error);
    return "";
  }
};

export { decrypt };

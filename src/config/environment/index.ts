const maxRetriesServices = 3;
const maxRetriesPost = 1;
const maxRetriesDelete = 1;

const fetchTimeoutServices = 6000;

const mediaQueryMobile = "(max-width: 770px)";
const mediaQueryTablet = "(max-width: 1281px)";
const mediaQueryTabletMain = "(max-width: 1000px)";
const mediaQueryMobileSmall = "(max-width: 450px)";

const maxWidthLineConstruction = "1394px";
const maxWidthOtherPages = "1064px";

const enviroment = {
  REDIRECT_URI: window.location.origin,
  PORTAL_CATALOG_CODE: import.meta.env.VITE_PORTAL_CATALOG_CODE,
  IVITE_ISAAS_QUERY_PROCESS_SERVICE: import.meta.env
    .VITE_ISAAS_QUERY_PROCESS_SERVICE,
  ISETTING_PERSISTENCE_PROCESS_SERVICE: import.meta.env
    .VITE_ISETTING_PERSISTENCE_PROCESS_SERVICE,
  IVITE_IPORTAL_STAFF_QUERY_PROCESS_SERVICE: import.meta.env
    .VITE_IPORTAL_STAFF_QUERY_PROCESS_SERVICE,
  ISETTING_QUERY_PROCESS_SERVICE: import.meta.env
    .VITE_ISETTING_QUERY_PROCESS_SERVICE,
  ISETTING_ISAAS_SERVICE: import.meta.env.VITE_ISETTING_ISAAS_SERVICE,
  SECRET_KEY_PORTAL_ID: import.meta.env.VITE_SECRET_KEY_PORTAL_ID,
  SECRET_KEY_PORTAL_NAME: import.meta.env.VITE_SECRET_KEY_PORTAL_NAME,
  REGISTRATION_REDIRECT_URL: import.meta.env.VITE_REGISTRATION_REDIRECT_URL,
  IAUTH_URL: import.meta.env.VITE_IAUTH_URL as string,
  IAUTH_SERVICE_URL: import.meta.env.VITE_IAUTH_SERVICE_URL as string,
  CODE_VERIFIER: import.meta.env.VITE_AUTH_CODE_VERIFIER as string,
  CODE_CHALLENGE: import.meta.env.VITE_AUTH_CODE_CHALLENGE as string,
  STATE: import.meta.env.VITE_AUTH_STATE as string,
};

export {
  enviroment,
  maxRetriesDelete,
  mediaQueryMobile,
  mediaQueryTablet,
  mediaQueryTabletMain,
  mediaQueryMobileSmall,
  maxWidthLineConstruction,
  maxWidthOtherPages,
  maxRetriesServices,
  maxRetriesPost,
  fetchTimeoutServices,
};

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
  CLIENT_ID: import.meta.env.VITE_AUTH0_CLIENT_ID,
  CLIENT_SECRET: import.meta.env.VITE_AUTH0_CLIENT_SECRET,
  REALM: import.meta.env.VITE_AUTH_REALM,
  PROVIDER: import.meta.env.VITE_AUTH_PROVIDER,
  REDIRECT_URI: window.location.origin,
  PORTAL_CATALOG_CODE: import.meta.env.VITE_PORTAL_CATALOG_CODE,
  ICLIENT_API_URL_QUERY: import.meta.env.VITE_ICLIENT_API_URL_QUERY,
  IPORTAL_CODE: import.meta.env.VITE_PORTAL_CODE,
  ICLIENT_API_URL_QUERY_PROCESS: import.meta.env
    .VITE_IUTILITIES_LINIX_CATALOGOS_GENERALES_API_URL_QUERY_PROCESS,
  IVITE_ISAAS_QUERY_PROCESS_SERVICE: import.meta.env
    .VITE_ISAAS_QUERY_PROCESS_SERVICE,
  ISAAS_PERSISTENCE_PROCESS_SERVICE: import.meta.env
    .VITE_ISAAS_PERSISTENCE_PROCESS_SERVICE,
  IVITE_IPORTAL_STAFF_QUERY_PROCESS_SERVICE: import.meta.env
    .VITE_IPORTAL_STAFF_QUERY_PROCESS_SERVICE,
  ISETTING_QUERY_PROCESS_SERVICE: import.meta.env
    .VITE_ISETTING_QUERY_PROCESS_SERVICE,
  ICLIENT_API_URL_PERSISTENCE_POST: import.meta.env
    .VITE_IUTILITIES_LINIX_CATALOGOS_GENERALES_API_URL_PERSISTENCE_PROCESS,
  ISETTING_ISAAS_SERVICE: import.meta.env.VITE_ISETTING_ISAAS_SERVICE,
  TEMP_BUSINESS_UNIT: "LINIX",
  ICLIENT_API_URL_QUERY_USERS_PROCESS: import.meta.env
    .VITE_IPRIVILEGES_LINIX_API_URL_QUERY_DATA_SERVICE,
  AUTH0_DOMAIN: import.meta.env.VITE_AUTH0_DOMAIN,
  MAX_RETRIES_SERVICES: Number(import.meta.env.VITE_MAX_RETRIES_SERVICES),
  FETCH_TIMEOUT_SERVICES: Number(import.meta.env.VITE_FETCH_TIMEOUT_SERVICES),
  SECRET_KEY_PORTAL_ID: import.meta.env.VITE_SECRET_KEY_PORTAL_ID,
  SECRET_KEY_PORTAL_NAME: import.meta.env.VITE_SECRET_KEY_PORTAL_NAME,

  ORIGINATOR_ID: import.meta.env.VITE_ORIGINATOR_ID as string,
  IAUTH_URL: import.meta.env.VITE_IAUTH_URL as string,
  IAUTH_SERVICE_URL: import.meta.env.VITE_IAUTH_SERVICE_URL as string,
  CODE_VERIFIER: import.meta.env.VITE_AUTH_CODE_VERIFIER as string,
  CODE_CHALLENGE: import.meta.env.VITE_AUTH_CODE_CHALLENGE as string,
  STATE: import.meta.env.VITE_AUTH_STATE as string,
  APPLICATION_NAME: import.meta.env.VITE_APPLICATION_NAME as string,
  ORIGINATOR_CODE: import.meta.env.VITE_ORIGINATOR_CODE as string,
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

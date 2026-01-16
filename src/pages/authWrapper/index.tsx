import { IAuthProvider } from "@inube/iauth-react";
import { useAuthWrapper } from "@hooks/authentication/useAuthWrapper";
import { enviroment } from "@config/environment";
import { IAuthWrapper } from "@ptypes/IAuthWrapper";

const AuthWrapper = ({ children }: IAuthWrapper) => {
  useAuthWrapper();
  // const { appData } = useContext(AuthAndData);
  return (
    <IAuthProvider
      // originatorId={appData.businessManager.clientId}
      callbackUrl={enviroment.REDIRECT_URI}
      iAuthUrl={enviroment.IAUTH_URL}
      serviceUrl={enviroment.IAUTH_SERVICE_URL}
      codeVerifier={enviroment.CODE_VERIFIER}
      codeChallenge={enviroment.CODE_CHALLENGE}
      state={enviroment.STATE}
      applicationName={enviroment.APPLICATION_NAME}
      // originatorCode={appData.businessManager.publicCode}
      originatorCode={enviroment.ORIGINATOR_CODE}
      originatorId={enviroment.ORIGINATOR_ID}
    >
      {children}
    </IAuthProvider>
  );
};

export { AuthWrapper };

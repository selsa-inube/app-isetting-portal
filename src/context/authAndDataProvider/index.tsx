import { createContext } from "react";

import { useValidatingLoginInformation } from "@hooks/context/useValidatingLoginInformation";
import { IAuthDataContainer } from "@ptypes/authAndDataProvider/IAuthDataContainer";

const AuthAndData = createContext<IAuthDataContainer>({} as IAuthDataContainer);

interface IAuthAndDataProvider {
  children: React.ReactNode;
}

const AuthAndDataProvider = ({ children }: IAuthAndDataProvider) => {
  const AuthDataContainer = useValidatingLoginInformation();

  return (
    <AuthAndData.Provider value={AuthDataContainer}>
      {children}
    </AuthAndData.Provider>
  );
};

export { AuthAndData, AuthAndDataProvider };
export type { IAuthAndDataProvider };

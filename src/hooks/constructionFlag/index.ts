import { constructionFlag } from "@config/construccionFlag";
import { IFlagAppearance, useFlag } from "@inubekit/inubekit";

const useServiceInConstructionFlag = () => {
  const { addFlag } = useFlag();

  const showServiceInConstructionFlag = () => {
    addFlag({
      title: constructionFlag.title,
      description: constructionFlag.description,
      appearance: constructionFlag.appearance as IFlagAppearance,
      duration: constructionFlag.duration,
    });

    return constructionFlag.duration;
  };

  return {
    showServiceInConstructionFlag,
  };
};

export { useServiceInConstructionFlag };

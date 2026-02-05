import { constructionFlag } from "@config/construccionFlag";
import { flowAutomaticMessages } from "@config/missions/missionTab/generic/flowAutomaticMessages";
import { IFlagAppearance, useFlag } from "@inubekit/inubekit";

const useServiceInConstructionFlag = () => {
  const { addFlag } = useFlag();

  const showServiceInConstructionFlag = () => {
    const { appearance, duration } =
      flowAutomaticMessages().successfulCreateRequest;

    addFlag({
      title: constructionFlag.title,
      description: constructionFlag.description,
      appearance: appearance as IFlagAppearance,
      duration,
    });

    return duration;
  };

  return {
    showServiceInConstructionFlag,
  };
};

export { useServiceInConstructionFlag };

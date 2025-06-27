import { IAplicationCatalog } from "@ptypes/applicationCatalog";

const mapApplicationEntity = (
  applicationData: IAplicationCatalog
): IAplicationCatalog => {
  const applicationMapped: IAplicationCatalog = {
    appId: String(applicationData.appId),
    abbreviatedName: String(applicationData.abbreviatedName),
    descriptionUse: String(applicationData.descriptionUse),
    suite: String(applicationData.suite),
  };
  return applicationMapped;
};

const mapApplicationEntities = (
  application: IAplicationCatalog[]
): IAplicationCatalog[] => {
  return application.map(mapApplicationEntity);
};

export { mapApplicationEntity, mapApplicationEntities };

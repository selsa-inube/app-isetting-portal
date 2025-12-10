import { useEffect, useState } from "react";

const useApplicationsInProcess = () => {
  const [pageLength, setPageLength] = useState(1);

  useEffect(() => {
    const updatePageRecord = () => {
      if (window.innerWidth < 1600) {
        setPageLength(2);
      } else if (window.innerWidth > 1600) {
        setPageLength(7);
      } else {
        setPageLength(1);
      }
    };

    updatePageRecord();
    window.addEventListener("resize", updatePageRecord);

    return () => window.removeEventListener("resize", updatePageRecord);
  }, []);

  return pageLength;
};

export { useApplicationsInProcess };

import { useEffect, useState } from "react";

const usePageLength = () => {
  const [pageLength, setPageLength] = useState(1);

  useEffect(() => {
    const updatePageRecord = () => {
      if (window.innerWidth < 1600) {
        setPageLength(4);
      } else if (window.innerWidth > 1600) {
        setPageLength(10);
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

export { usePageLength };

import { useEffect, useState } from "react";

const UseApplicationsInProcess = () => {
  const [pageLength, setPageLength] = useState(1);

  useEffect(() => {
    const updatePageLength = () => {
      setPageLength(window.innerWidth > 1600 ? 10 : 1);
    };

    updatePageLength();
    window.addEventListener("resize", updatePageLength);

    return () => window.removeEventListener("resize", updatePageLength);
  }, []);

  return pageLength;
};

export { UseApplicationsInProcess };

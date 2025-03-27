import { useState, useEffect } from "react";
import { PaginationConfig } from "@config/positions/tabs";

const UseMissionsUsePageRecord = () => {
  const [pageRecord, setPageRecord] = useState(PaginationConfig.PageRecord);

  useEffect(() => {
    const updatePageRecord = () => {
      if (window.innerWidth < 1600) {
        setPageRecord(2);
      } else if (window.innerWidth > 1600) {
        setPageRecord(10);
      } else {
        setPageRecord(PaginationConfig.PageRecord);
      }
    };

    updatePageRecord();
    window.addEventListener("resize", updatePageRecord);

    return () => window.removeEventListener("resize", updatePageRecord);
  }, []);

  return pageRecord;
};

export { UseMissionsUsePageRecord };

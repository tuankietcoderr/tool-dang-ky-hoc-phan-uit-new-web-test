import { createContext, useEffect, useState } from "react";
import * as XLSX from "xlsx";

export const DataContext = createContext({
  excelData: [] as any[],
});

export const DataProvider = ({ children }: any) => {
  const [excelData, setExcelData] = useState<any>(null);
  useEffect(() => {
    (async function () {
      if (window.localStorage.getItem("excelData")) {
        setExcelData(JSON.parse(window.localStorage.getItem("excelData")!));
        return;
      }
      await fetch("./tkb.xlsx")
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => {
          const data = new Uint8Array(arrayBuffer);
          const workbook = XLSX.read(data, { type: "array" });

          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];

          const excelData = XLSX.utils.sheet_to_json(sheet, {
            header: 1,
            defval: "",
          });
          setExcelData(excelData.slice(2, 20));
          window.localStorage.setItem(
            "excelData",
            JSON.stringify(excelData.slice(2, 20))
          );
        })
        .catch((error) => {
          console.error("Error fetching or parsing Excel file:", error);
        });
    })();
    return () => {
      setExcelData(null);
    };
  }, []);

  const value = {
    excelData,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

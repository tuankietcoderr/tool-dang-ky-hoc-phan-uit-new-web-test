import * as XLSX from "xlsx";

export const importExcel = (file: File) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const data = e.target?.result;
    const workbook = XLSX.read(data, { type: "binary" });
    const firstSheet = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheet];
    const result = XLSX.utils.sheet_to_json(worksheet, { raw: true });
    console.log(result);
  };
  reader.readAsBinaryString(file);
};

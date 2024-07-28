import { useSubjectStore } from "@/store/useSubjectStore";
import { arrayToTkbObject } from "@/utils/array-to-tkb-object";
import { Button, Input } from "@chakra-ui/react";
import React, { ChangeEventHandler, useCallback } from "react";
import * as XLSX from "xlsx";

const SelectSubjectButton = () => {
  const { setSubjects } = useSubjectStore();
  const handleSelectSubject = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      const rABS = !!reader.readAsBinaryString;
      reader.onload = (e) => {
        const bstr = e?.target?.result;
        const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
        const wsLyThuyet = wb.Sheets[wb.SheetNames[0]];
        const wsThucHanh = wb.Sheets[wb.SheetNames[1]];
        const dataLyThuyet = XLSX.utils.sheet_to_json<any[][]>(wsLyThuyet, {
          header: 1,
          defval: "",
        });
        const dataThucHanh = XLSX.utils.sheet_to_json<any[][]>(wsThucHanh, {
          header: 1,
          defval: "",
        });
        const dataInArray = [...dataLyThuyet, ...dataThucHanh].filter(
          (row) => typeof row[0] === "number" // những row có cột 0 là STT (STT là number) thì mới là data ta cần
        );
        if (dataInArray.length) {
          setSubjects(dataInArray.map((array) => arrayToTkbObject(array)));
        } else {
          // upload excel failed
        }
      };
      if (rABS) reader.readAsBinaryString(file);
      else reader.readAsArrayBuffer(file);
    },
    [setSubjects]
  );
  return (
    <Button>
      <Input type="file" onChange={handleSelectSubject} />
    </Button>
  );
};

export default SelectSubjectButton;

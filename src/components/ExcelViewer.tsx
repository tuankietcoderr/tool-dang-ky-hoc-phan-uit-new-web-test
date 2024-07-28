import { useSubjectStore } from "@/store/useSubjectStore";
import {
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useMemo } from "react";

function ExcelViewer() {
  const {
    subjects,
    selectedSubjects,
    addSelectedSubject,
    removeSelectedSubject,
  } = useSubjectStore();

  // memoize data
  const data = useMemo(() => subjects, [subjects]);

  const handleCheckboxChange = (e: any, row: any) => {
    if (e.target.checked) {
      addSelectedSubject({
        id: row[0],
        maLop: row[2],
      });
      return;
    }
    removeSelectedSubject(row[0]);
  };

  console.log(data);
  if (!data)
    return (
      <div className="flex justify-center pt-4">
        <Spinner />
      </div>
    );

  const RenderRow = ({ row }: { row: any }) => {
    return (
      <Tr>
        <Td>
          <input
            type="checkbox"
            onChange={(e) => handleCheckboxChange(e, row)}
            checked={
              selectedSubjects.filter((monHoc) => monHoc.id === row[0]).length >
              0
            }
          />
        </Td>
        {Object.values(row).map((cell: any, cellIndex) => (
          <Td key={cellIndex}>{cell || ""}</Td>
        ))}
      </Tr>
    );
  };

  return (
    <div>
      <TableContainer>
        <Table variant={"striped"}>
          <Thead>
            <Tr>
              <Th></Th>
              {data.length > 0 &&
                Object.keys(data[0]).map((cell: any, cellIndex: any) => (
                  <Th key={cellIndex}>{cell}</Th>
                ))}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row: any, rowIndex: React.Key | null | undefined) => (
              <RenderRow key={rowIndex} row={row} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ExcelViewer;

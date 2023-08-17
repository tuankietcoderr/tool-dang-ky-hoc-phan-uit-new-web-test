import { DataContext } from "@/context/DataContext";
import { IRowOnlyId } from "@/interface/row";
import {
  chonMonHoc,
  huyChonMonHoc,
  monHocSelector,
} from "@/store/features/mon-hoc";
import { useAppDispatch, useAppSelector } from "@/store/hook";
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
import React, { useContext } from "react";

function ExcelViewer() {
  const allowIndexes = [2, 3, 5, 7, 8, 10, 11, 13];
  const { excelData } = useContext(DataContext);
  const dispatch = useAppDispatch();
  const { monHocDaChon } = useAppSelector(monHocSelector);

  // memoize data
  const data = React.useMemo(() => excelData, [excelData]);

  const handleCheckboxChange = (e: any, row: any) => {
    if (e.target.checked) {
      dispatch(
        chonMonHoc({
          monHoc: {
            id: row[0],
            maLop: row[2],
          } as IRowOnlyId,
        })
      );
      return;
    }
    dispatch(huyChonMonHoc({ id: row[0] }));
  };

  if (!data)
    return (
      <div className="flex justify-center pt-4">
        <Spinner />
      </div>
    );
  return (
    <div>
      <TableContainer>
        <Table variant={"striped"}>
          <Thead>
            <Tr>
              <Th></Th>
              {data &&
                data.length > 0 &&
                data[0].map((cell: any, cellIndex: any) => {
                  if (allowIndexes.includes(cellIndex))
                    return <Th key={cellIndex}>{cell}</Th>;
                })}
            </Tr>
          </Thead>
          <Tbody>
            {data
              .slice(1)
              .map((row: any[], rowIndex: React.Key | null | undefined) => (
                <Tr key={rowIndex}>
                  <Td>
                    <input
                      type="checkbox"
                      onChange={(e) => handleCheckboxChange(e, row)}
                      checked={
                        monHocDaChon.filter((monHoc) => monHoc.id === row[0])
                          .length > 0
                      }
                    />
                  </Td>
                  {row.map((cell, cellIndex) => {
                    if (allowIndexes.includes(cellIndex)) {
                      if (cellIndex === 8) {
                        return (
                          <Td key={cellIndex}>{cell === 0 ? "Không" : "Có"}</Td>
                        );
                      }
                      return <Td key={cellIndex}>{cell || ""}</Td>;
                    }
                  })}
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ExcelViewer;

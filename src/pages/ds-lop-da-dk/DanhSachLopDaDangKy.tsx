import { monHocSelector } from "@/store/features/mon-hoc";
import { useAppSelector } from "@/store/hook";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const DanhSachLopDaDangKy = () => {
  const allowIndexes = [2, 3, 5, 7, 8, 10, 11, 13];
  const { monHocDaChon } = useAppSelector(monHocSelector);
  const [monHocDaDangKy, setMonHocDaDangKy] = React.useState<any>([]);
  React.useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("excelData")!) || [];
    setMonHocDaDangKy(data);
  }, []);
  return (
    <div className="px-4 py-8">
      <h2 className="font-semibold text-xl">
        Đã đăng ký: {monHocDaChon.length}
      </h2>
      <TableContainer>
        <Table variant={"striped"}>
          <Thead>
            <Tr>
              {monHocDaDangKy &&
                monHocDaDangKy.length > 0 &&
                monHocDaDangKy[0].map((cell: any, cellIndex: any) => {
                  if (allowIndexes.includes(cellIndex))
                    return <Th key={cellIndex}>{cell}</Th>;
                })}
            </Tr>
          </Thead>
          <Tbody>
            {monHocDaDangKy
              .slice(1)
              .map((row: any[], rowIndex: React.Key | null | undefined) => (
                <Tr key={rowIndex}>
                  {row.map((cell, cellIndex) => {
                    if (
                      monHocDaChon.filter((monHoc) => monHoc.id === row[0])
                        .length <= 0
                    ) {
                      return null;
                    }
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
};

export default DanhSachLopDaDangKy;

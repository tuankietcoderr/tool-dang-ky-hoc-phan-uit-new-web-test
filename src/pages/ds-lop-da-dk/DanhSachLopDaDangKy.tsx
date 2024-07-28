import { useSubjectStore } from "@/store/useSubjectStore";
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
  const { selectedSubjects, subjects } = useSubjectStore();

  return (
    <div className="px-4 py-8">
      <h2 className="font-semibold text-xl">
        Đã đăng ký: {selectedSubjects.length}
      </h2>
      <TableContainer>
        <Table variant={"striped"}>
          <Thead>
            <Tr>
              {subjects.length > 0 &&
                subjects[0].map((cell: any, cellIndex: any) => {
                  if (allowIndexes.includes(cellIndex))
                    return <Th key={cellIndex}>{cell}</Th>;
                })}
            </Tr>
          </Thead>
          <Tbody>
            {subjects.length > 0 ? (
              subjects
                .slice(1)
                .map((row: any[], rowIndex: React.Key | null | undefined) => (
                  <Tr key={rowIndex}>
                    {row.map((cell, cellIndex) => {
                      if (
                        selectedSubjects.filter(
                          (subject) => subject.id === row[0]
                        ).length <= 0
                      ) {
                        return null;
                      }
                      if (allowIndexes.includes(cellIndex)) {
                        if (cellIndex === 8) {
                          return (
                            <Td key={cellIndex}>
                              {cell === 0 ? "Không" : "Có"}
                            </Td>
                          );
                        }
                        return <Td key={cellIndex}>{cell || ""}</Td>;
                      }
                    })}
                  </Tr>
                ))
            ) : (
              <Tr>
                <Td colSpan={8}>
                  <p className="text-sm text-gray-500">
                    Chưa có môn học nào được chọn
                  </p>
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DanhSachLopDaDangKy;

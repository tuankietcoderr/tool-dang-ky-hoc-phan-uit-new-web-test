import ExcelViewer from "@/components/ExcelViewer";
import MonHocDaChon from "@/components/MonHocDaChon";
import { CopyIcon } from "@chakra-ui/icons";
import { Icon, useToast } from "@chakra-ui/react";

const DangKyHocPhan = () => {
  const toast = useToast();
  const handleCopy = async () => {
    await navigator.clipboard
      .writeText(
        "CE005.O11.MTCL\nCE213.O12.MTCL.1\nCE213.O12.MTCL\nCE222.O12.MTCL\nCE222.O12.MTCL.1"
      )
      .then(() => {
        toast({
          title: "Đã copy lớp mẫu vào clipboard",
          status: "success",
          isClosable: true,
          duration: 3000,
        });
      })
      .catch(() => {
        toast({
          title: "Không thể copy lớp mẫu vào clipboard",
          status: "error",
          isClosable: true,
          duration: 3000,
        });
      });
  };
  return (
    <div className="relative">
      <div className="px-4 py-8">
        <h2 className="font-semibold text-xl">Danh sách lớp đang mở</h2>
        <i className="block mb-2">
          <small>
            Ở đây mình chỉ đưa ra dữ liệu để test nên sẽ không nhiều
          </small>
        </i>
        <button
          onClick={handleCopy}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          <Icon as={CopyIcon} mr={2} />
          <span>Copy lớp mẫu</span>
        </button>
      </div>
      <ExcelViewer />
      <MonHocDaChon />
    </div>
  );
};

export default DangKyHocPhan;

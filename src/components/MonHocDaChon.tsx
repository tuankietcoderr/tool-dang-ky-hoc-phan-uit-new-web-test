import { useSubjectStore } from "@/store/useSubjectStore";
import { CheckCircleIcon, CloseIcon, WarningIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  TagLabel,
  TagRightIcon,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const MonHocDaChon = () => {
  const { selectedSubjects, removeSelectedSubject } = useSubjectStore();
  const cancel = (id: string) => {
    removeSelectedSubject(id);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOnClick = async () => {
    onOpen();
  };

  return (
    <div className="sticky bottom-0 bg-slate-100 p-4 border-t-2">
      <p className="text-sm font- mb-2 font-semibold">Các môn học đã chọn</p>
      <Flex gap={2} justifyContent={"space-between"}>
        <Flex gap={2} flexWrap={"wrap"} alignItems={"center"}>
          {selectedSubjects.length > 0 ? (
            selectedSubjects.map((subject) => {
              return (
                <Tag
                  key={subject.id}
                  variant={"outline"}
                  colorScheme="blue"
                  h="fit-content"
                >
                  <TagLabel fontSize={"sm"}>{subject.maLop}</TagLabel>
                  <TagRightIcon
                    cursor={"pointer"}
                    as={CloseIcon}
                    boxSize={4}
                    w={3}
                    h={3}
                    onClick={() => cancel(subject.id)}
                  />
                </Tag>
              );
            })
          ) : (
            <p className="text-sm text-gray-500">
              Chưa có môn học nào được chọn
            </p>
          )}
        </Flex>
        {selectedSubjects.length > 0 && (
          <Button
            fontSize={"sm"}
            variant={"solid"}
            colorScheme="blue"
            onClick={handleOnClick}
          >
            Đăng ký {selectedSubjects.length} lớp đã chọn
          </Button>
        )}
      </Flex>
      <AfterClickModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default MonHocDaChon;

function AfterClickModal({ isOpen, onClose }: any) {
  const { selectedSubjects } = useSubjectStore();
  const navigate = useNavigate();
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight={"bold"} textAlign={"center"}>
            KẾT QUẢ ĐĂNG KÝ
          </ModalHeader>
          <ModalCloseButton
            onClick={() => {
              onClose();
              navigate("/user-courses");
            }}
          />
          <ModalBody>
            <Flex gap={2} alignItems={"center"}>
              <Icon as={CheckCircleIcon} color={"blue"} />
              <p className="font-semibold text-sm">
                {selectedSubjects.length} Lớp Thành công
              </p>
            </Flex>
            {selectedSubjects.map((subject) => {
              return <p key={subject.id}>{subject.maLop}</p>;
            })}
            <Divider />
            <Flex gap={2} alignItems={"center"} mt={2}>
              <Icon as={WarningIcon} color={"red"} />
              <p className="font-semibold text-sm">0 Lớp bị lỗi</p>
            </Flex>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

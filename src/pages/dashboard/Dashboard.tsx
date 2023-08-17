import { Box, Container, Flex, ListItem, OrderedList } from "@chakra-ui/react";
import React from "react";

const Dashboard = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Container maxW={"768px"}>
        <h2 className="font-semibold text-lg my-4 text-center">
          TRANG ĐĂNG KÝ HỌC PHẦN - TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THÔNG TIN
        </h2>
        <Box bg={"white"} p={6} rounded={"md"} shadow={"md"}>
          <h3 className="font-semibold text-center mb-4">
            HƯỚNG DẪN ĐĂNG KÝ HỌC PHẦN:
          </h3>
          <OrderedList>
            <ListItem>Nhấn vào trình đơn Đăng ký Học phần</ListItem>
            <ListItem>Chọn các lớp cần đăng ký</ListItem>
            <ListItem>Nhấn vào nút Đăng ký</ListItem>
            <ListItem>Chờ hệ thống xử lỳ và hoàn thành xử lý</ListItem>
            <ListItem>
              Sau khi có kết quả xử lý, sinh viên kiểm tra và thực hiện chọn
              đăng ký tiếp, quay lại bước 1
            </ListItem>
          </OrderedList>
        </Box>
        <Box bg={"white"} p={6} rounded={"md"} shadow={"md"} mt={4}>
          <h3 className="font-semibold text-center mb-4">
            HƯỚNG DẪN XÁC NHẬN CÁC LỚP ĐÃ ĐƯỢC HỖ TRỢ ĐĂNG KÝ:
          </h3>
          <OrderedList>
            <ListItem>Nhấn vào trình đơn Xác nhận Đăng ký Học phần</ListItem>
            <ListItem>
              Kiểm tra thông tin danh sách lớp đã được hỗ trợ đăng ký
            </ListItem>
            <ListItem>
              Nhấn vào nút Đồng ý để xác nhận Đồng ý với danh sách, hoặc Không
              đồng ý để không tiếp nhận danh sách đã đăng ký
            </ListItem>
            <ListItem>Chờ hệ thống xử lỳ và hoàn thành xử lý</ListItem>
            <ListItem>
              Khi hết thời gian xác nhận, những sinh viên đã xác nhận sẽ được
              giữ lại và tiến hành đăng ký thêm hoặc xóa đăng ký học phần để
              chọn lớp khác. Các sinh viên không thực hiện hoặc không đồng ý thì
              hệ thống sẽ xóa những lớp đã được hỗ trợ đăng ký và vẫn tiến hành
              tham gia đăng ký mới bình thường.
            </ListItem>
          </OrderedList>
        </Box>
      </Container>
    </Flex>
  );
};

export default Dashboard;

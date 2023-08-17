interface INavigationItem {
  title: string;
  path: string;
  disabled?: boolean;
}

const navigation: INavigationItem[] = [
  {
    title: "Dashboard",
    path: "/",
  },
  {
    title: "Đăng ký Học phần",
    path: "/course-registration",
  },
  {
    title: "Danh sách Lớp Đã Đăng ký",
    path: "/user-courses",
  },
  {
    title: "Xác nhận Đăng ký Học phần",
    path: "/courses-confirmation",
    disabled: true,
  },
];

export default navigation;

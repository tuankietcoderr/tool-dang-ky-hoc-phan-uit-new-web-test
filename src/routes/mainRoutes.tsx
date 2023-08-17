/* eslint-disable react-refresh/only-export-components */
import BasePage from "@/pages/base/BasePage";
import Dashboard from "@/pages/dashboard/Dashboard";
import DangKyHocPhan from "@/pages/dkhp/DangKyHocPhan";
import DanhSachLopDaDangKy from "@/pages/ds-lop-da-dk/DanhSachLopDaDangKy";
import XacNhanDangKyHocPhan from "@/pages/xac-nhan-dkhp/XacNhanDangKyHocPhan";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BasePage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/course-registration",
        element: <DangKyHocPhan />,
      },
      {
        path: "/user-courses",
        element: <DanhSachLopDaDangKy />,
      },
      {
        path: "/courses-confirmation",
        element: <XacNhanDangKyHocPhan />,
      },
    ],
  },
]);

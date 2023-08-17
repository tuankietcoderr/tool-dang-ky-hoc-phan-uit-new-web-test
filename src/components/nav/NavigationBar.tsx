import navigation from "@/routes/nav";
import { Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const { pathname } = useLocation();
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <Flex
        justifyContent={"space-between"}
        py={4}
        gap={2}
        px={8}
        alignItems={"center"}
        className="bg-white"
        position={"sticky"}
        top={0}
        zIndex={100}
      >
        <Flex gap={8} alignItems={"center"}>
          <Link
            to={"/"}
            className="font-semibold text-xl bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 text-transparent"
          >
            UIT-ĐKHP
          </Link>
          <Flex gap={2} alignItems={"center"}>
            {navigation.map((nav) => {
              return (
                <Link key={nav.path} to={nav.path} className="relative">
                  <p
                    className={`font-semibold text-blue-600 px-4 py-2 hover:bg-blue-600 rounded-md hover:text-white text-sm`}
                  >
                    {nav.title}
                  </p>
                  {isActive(nav.path) && (
                    <div className="absolute bottom-[4px] left-0 right-0 flex justify-center">
                      <div className="h-[2px] bg-blue-600 w-6" />
                    </div>
                  )}
                </Link>
              );
            })}
          </Flex>
        </Flex>
        <p>
          <b>Tên sinh viên</b>
        </p>
      </Flex>
    </>
  );
};

export default NavigationBar;

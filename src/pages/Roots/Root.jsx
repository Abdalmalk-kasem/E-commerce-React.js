import { Outlet } from "react-router-dom";
import MainNavigation from "/src/components/Navigation/MainNavigation";
import Footer from "../../components/Footer/Footer";
import { Suspense } from "react";
import LoadingEffect from "../../components/UI/LoadingEffect";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Suspense fallback={<LoadingEffect />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default RootLayout;

import { Outlet } from "react-router-dom";
import MainNavigation from "/src/components/Navigation/MainNavigation.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { Suspense } from "react";
import LoadingEffect from "../../components/UI/LoadingEffect.jsx";

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

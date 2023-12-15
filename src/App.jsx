import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import RootLayout from "./pages/Roots/Root";
import Error from "./components/UI/Error";
import LoadingEffect from "./components/UI/LoadingEffect";
import { CartItemsProvider } from "./contexts/shopping-cart";
import ScrollToTop from "./components/Other/Scroll/ScrollToTop";
import ScrollToTopArrow from "./components/Other/Scroll/ScrollToTopArrow";

import { lazy } from "react";

import { AuthProvider } from "./contexts/AuthContext";

const HomePage = lazy(() => import("./pages/Home/Home"));
const ShopPage = lazy(() => import("./pages/Shop/Shop"));
const BlogPage = lazy(() => import("./pages/Blog/Blog"));
const CartPage = lazy(() => import("./pages/Cart/Cart"));
const AboutPage = lazy(() => import("./pages/About/About"));
const ContactPage = lazy(() => import("./pages/Contact/Contact"));
const SourcesPage = lazy(() => import("./pages/Sources/Sources"));
const ProductDetails = lazy(() =>
  import("./pages/ProductDetails/ProductDetails")
);
const AuthForm = lazy(() => import("./pages/Authentication/AuthForm"));

const PRODUCTSURL = import.meta.env.VITE_PRODUCTS_API;
const BLOGSURL = import.meta.env.VITE_BLOGSURL_API;

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: (
      <AuthProvider>
        <CartItemsProvider>
          <ScrollToTop />
          <RootLayout />
          <ScrollToTopArrow />
        </CartItemsProvider>
      </AuthProvider>
    ),
    errorElement: <Error />,
    children: [
      {
        id: "products",
        loader: (meta) =>
          import("./components/Other/loaders/loaders").then((module) =>
            module.fetchDataLoader({
              ...meta,
              url: PRODUCTSURL,
            })
          ),
        children: [
          {
            path: "",
            element: <Navigate to="/home" />,
          },
          {
            path: "home",
            element: <HomePage />,
          },
          {
            path: "shop",
            element: <ShopPage />,
          },
          {
            path: "shop/:productId",
            element: <ProductDetails />,
          },
        ],
      },
      {
        path: "blog",
        element: <BlogPage />,
        id: "blogs-details",
        loader: (meta) =>
          import("./components/Other/loaders/loaders").then((module) =>
            module.fetchDataLoader({
              ...meta,
              url: BLOGSURL,
            })
          ),
      },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      {
        path: "auth",
        element: <AuthForm />,
      },
      { path: "cart", element: <CartPage /> },
      { path: "sources", element: <SourcesPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<LoadingEffect />} />;
}

export default App;

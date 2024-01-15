import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import RootLayout from "./pages/Roots/Root.jsx";
import Error from "./components/UI/Error.jsx";
import LoadingEffect from "./components/UI/LoadingEffect.jsx";
import { CartItemsProvider } from "./contexts/shopping-cart.jsx";
import ScrollToTop from "./components/Other/Scroll/ScrollToTop.jsx";
import ScrollToTopArrow from "./components/Other/Scroll/ScrollToTopArrow.jsx";

import { lazy } from "react";

import { AuthProvider } from "./contexts/AuthContext.jsx";

const HomePage = lazy(() => import("./pages/Home/Home.jsx"));
const ShopPage = lazy(() => import("./pages/Shop/Shop.jsx"));
const BlogPage = lazy(() => import("./pages/Blog/Blog.jsx"));
const CartPage = lazy(() => import("./pages/Cart/Cart.jsx"));
const AboutPage = lazy(() => import("./pages/About/About.jsx"));
const ContactPage = lazy(() => import("./pages/Contact/Contact.jsx"));
const SourcesPage = lazy(() => import("./pages/Sources/Sources.jsx"));
const ProductDetails = lazy(() =>
  import("./pages/ProductDetails/ProductDetails.jsx")
);
const AuthForm = lazy(() => import("./pages/Authentication/AuthForm.jsx"));

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

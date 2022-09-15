import GlobalLayout from "./pages/_layout";
import Index from "./pages/index";
import ProductsIndex from "./pages/products/index";
import ProductsId from "./pages/products/[id]";
import Cart from "./pages/cart";

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <Index />, index: true },
      { path: "/products", element: <ProductsIndex />, index: true },
      { path: "/cart", element: <Cart />, index: true },
      { path: "/products/:id", element: <ProductsId /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/products" },
  { route: "/products/:id" },
];

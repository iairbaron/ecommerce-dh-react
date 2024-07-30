import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LayoutMain } from "./components/Layout/LayoutMain.tsx";
import Home from "./pages/home/Home.tsx";
import { CartProvider } from "./context/CartProvider.tsx";
import Checkout from "./pages/checkout/Checkout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductDetail from "./pages/product-detail/ProductDetail.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { index: true, element: <Home /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/product_detail", element: <ProductDetail /> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
			<CartProvider>
				<RouterProvider router={router} />
			</CartProvider>
		</QueryClientProvider>
  </React.StrictMode>
);

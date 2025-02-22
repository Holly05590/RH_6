import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layouts/Frontlayout";
import HomePage from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/cartPage";
import NotFound from "../pages/NotFound";

const router = createHashRouter([
    {
        path: '/',
        element: <FrontLayout />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'products',
                element: <ProductPage />
            },
            {
                path: 'products/:id',
                element: <ProductDetailPage />
            },
            {
                path: 'cart',
                element: <CartPage />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])

export default router;
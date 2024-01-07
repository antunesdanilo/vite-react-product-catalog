import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ProductsList } from '../modules/product/components/list';
import { ProductDetails } from '../modules/product/components/details';
import { CheckoutCart } from '../modules/checkout/components/cart';

const Routes: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: <ProductsList />,
    },
    {
      path: '/checkout',
      element: <CheckoutCart />,
    },
    {
      path: '/:id',
      element: <ProductDetails />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export { Routes };

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ProductsList } from '../modules/products-list/components/list';

const Routes: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: <ProductsList />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export { Routes };

import { useMemo } from 'react';
import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { paths } from '../config/paths';
import { AppRootErrorBoundary } from './pages/errors/AppRootErrorBoundary';

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: '/',
      lazy: async () => {
        const { AppRoot } = await import('./AppRoot');
        return { Component: AppRoot };
      },
      ErrorBoundary: AppRootErrorBoundary,
      children: [
        {
          index: true,
          lazy: async () => {
            const { HomePage } = await import('./pages/HomePage/HomePage');
            return { Component: HomePage };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.contacts.path,
          lazy: async () => {
            const { ContactsPage } = await import('./pages/ContactsPage');
            return { Component: ContactsPage };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.ourWork.path,
          lazy: async () => {
            const { OurWorkPage } = await import('./pages/OurWorkPage');
            return { Component: OurWorkPage };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
      ],
    },
    {
      path: '*',
      lazy: async () => {
        const { NotFoundRoute } = await import('./pages/errors/NotFoundPage');
        return { Component: NotFoundRoute };
      },
      ErrorBoundary: AppRootErrorBoundary,
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();
  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};

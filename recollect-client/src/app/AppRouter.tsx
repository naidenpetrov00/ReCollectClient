import { useMemo } from "react";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { paths } from "../config/paths";
import { AppRootErrorBoundary } from "./pages/errors/AppRootErrorBoundary";

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: "/",
      lazy: async () => {
        const { AppRoot } = await import("./AppRoot");
        return { Component: AppRoot };
      },
      ErrorBoundary: AppRootErrorBoundary,
      // children: [
      //   {
      //     index: true,
      //     lazy: async () => {
      //       const { HomePage } = await import("./pages/HomePage/HomePage");
      //       return { Component: HomePage };
      //     },
      //     ErrorBoundary: AppRootErrorBoundary,
      //   },
      // ],
    },
    {
      path: "*",
      lazy: async () => {
        const { NotFoundPage } = await import("./pages/errors/NorFound");
        return { Component: NotFoundPage };
      },
      ErrorBoundary: AppRootErrorBoundary,
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();
  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};

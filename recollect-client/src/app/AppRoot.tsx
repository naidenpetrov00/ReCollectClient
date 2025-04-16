import { Outlet } from "react-router-dom";

import { MainLayout } from "../components/layouts/MainLayout/MainLayout";

export const AppRoot = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

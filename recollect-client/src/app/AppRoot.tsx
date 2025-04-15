import { Outlet } from 'react-router-dom';

import { PageLayout } from '../components/layouts/PageLayout/PageLayout';
import { ScrollToTop } from '../components/helpers/ScrollToTop';

export const AppRoot = () => {
  return (
    <PageLayout>
      <ScrollToTop />
      <Outlet />
    </PageLayout>
  );
};

import { ReactNode, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { MainErrorFallback } from '../components/errors/MainErrorFallback';

import { queryConfig } from '../lib/reactQuery';
import { useCustomTheme } from '../hooks/useCustomTheme';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: queryConfig }),
  );
  const theme = useCustomTheme();

  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <CssBaseline />
            {children}
            <SpeedInsights />
            <Analytics />
          </HelmetProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "react-error-boundary";
import { ReactNode, Suspense, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Spinner } from "../components/ui/spinner/Spinner";
import { MainErrorFallback } from "../components/errors/MainError";

import { queryConfig } from "../config/reactQuery";

import { useCustomTheme } from "../hooks/useCustomTheme";
import { Provider } from "react-redux";
import { store } from "../store/store";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: queryConfig })
  );
  const theme = useCustomTheme();

  return (
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary FallbackComponent={MainErrorFallback}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <HelmetProvider>
                <CssBaseline />
                {children}
              </HelmetProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </ErrorBoundary>
      </Suspense>
    </Provider>
  );
};

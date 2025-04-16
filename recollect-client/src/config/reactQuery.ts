import { DefaultOptions } from "@tanstack/react-query";

export const queryConfig = {
  queries: {
    // throwOnError: true,
    refetchOnWindowFocus: false,
    retry: 2,
    staleTime: 1000 * 60,
  },
} satisfies DefaultOptions;

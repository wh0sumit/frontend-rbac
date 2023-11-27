"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

interface ReactQueyrProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
});

export const ReactQueryProvider = ({ children }: ReactQueyrProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};


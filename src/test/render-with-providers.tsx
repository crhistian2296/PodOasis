import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, type RenderOptions } from "@testing-library/react";
import type { ReactElement, ReactNode } from "react";
import { CatalogProvider } from "@/context";

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 60_000,
      },
    },
  });
}

function AllProviders({
  children,
  queryClient,
}: {
  children: ReactNode;
  queryClient: QueryClient;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <CatalogProvider>{children}</CatalogProvider>
    </QueryClientProvider>
  );
}

export function renderWithProviders(
  ui: ReactElement,
  options?: RenderOptions & { queryClient?: QueryClient },
) {
  const { queryClient: optionsQueryClient, ...renderOptions } = options ?? {};
  const queryClient = optionsQueryClient ?? createTestQueryClient();

  return {
    queryClient,
    ...render(ui, {
      wrapper: ({ children }) => (
        <AllProviders queryClient={queryClient}>{children}</AllProviders>
      ),
      ...renderOptions,
    }),
  };
}

export { createTestQueryClient };

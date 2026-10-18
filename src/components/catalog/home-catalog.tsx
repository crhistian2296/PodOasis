"use client";

import { LoadError } from "@/components/shared";
import { useCatalog } from "@/context";
import { usePodcasts } from "@/hooks";
import { filterPodcasts, uniqueGenres, type Podcast } from "@/lib";
import { CatalogGrid } from "./catalog-grid";

export function HomeCatalog({
  initialPodcasts,
}: {
  initialPodcasts?: Podcast[];
}) {
  const { data, isPending, isError, refetch } = usePodcasts(initialPodcasts);
  const { search, genre } = useCatalog();

  if (isError && !data) {
    return (
      <section className="container catalog">
        <LoadError
          message="No se pudieron cargar los podcasts."
          onRetry={() => void refetch()}
        />
      </section>
    );
  }

  const podcasts = data ?? [];
  uniqueGenres(podcasts);
  const filtered = filterPodcasts(podcasts, search, genre);

  return (
    <section className="container catalog">
      <div className="catalog__content">
        <CatalogGrid isPending={isPending} podcasts={filtered} />
      </div>
    </section>
  );
}

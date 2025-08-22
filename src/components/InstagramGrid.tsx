"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export function InstagramGrid() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/instagram")
      .then((r) => r.json())
      .then((d) => setItems(d.items || []));
  }, []);

  if (!items.length) {
    return <p className="text-gray-500">Não foi possível carregar o feed.</p>;
  }

  return (
    <section className="py-20" id="instagram">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold">No Instagram</h3>
        <p className="text-gray-600 mt-1">
          Acompanhe os últimos posts do nosso dia a dia.
        </p>
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                className="group rounded-xl overflow-hidden border"
              >
                <div className="relative aspect-square">
                  <Image
                    src={post.media_url}
                    alt={post.caption || "Post do Instagram"}
                    fill
                    className="object-cover transition-transform group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-3 text-sm text-gray-600 line-clamp-2">
                  {post.caption || "Ver no Instagram"}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

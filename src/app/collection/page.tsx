import type { Metadata } from "next";

import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Collection | ChainHouse",
  description: "Explore ChainHouse NFT membership pass collections and activity.",
};

const stats = [
  { label: "Volume Traded", value: "32 ETH" },
  { label: "Floor Price", value: "1 ETH" },
  { label: "Sales", value: "500" },
  { label: "Owners", value: "2500" },
];

const items = Array.from({ length: 12 }).map((_, index) => ({
  id: index + 1,
  name: `House #${1550 + index}`,
  price: "0.89 ETH",
  status: "Live",
}));

export default function CollectionPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#050505] text-[#FAFAFA]">
      <section className="relative overflow-hidden px-6 pb-32 pt-24 sm:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-x-[-25%] top-[-220px] h-[520px] bg-[radial-gradient(circle_at_top,rgba(107,53,232,0.24),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-x-[-20%] bottom-[-280px] h-[680px] bg-[radial-gradient(circle_at_bottom,rgba(63,19,164,0.2),transparent_75%)]" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(107,53,232,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(63,19,164,0.12) 1px, transparent 1px)",
            backgroundSize: "160px 160px",
          }}
        />

        <div className="relative mx-auto w-full max-w-[1280px] space-y-10">
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#4019A6] via-[#5132DD] to-[#3B18A8] p-10 shadow-[0_45px_110px_-60px_rgba(37,16,110,0.8)] sm:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.22),transparent_60%)]" aria-hidden />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_30%,rgba(0,0,0,0.18),transparent_70%)]" aria-hidden />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <h1 className="text-3xl font-semibold tracking-tight text-[#FAFAFA] sm:text-4xl">
                  ChainHouse NFT Collection
                </h1>
                <p className="text-sm leading-relaxed text-[#EAE6FF]/85">
                  Join ChainHouse, a global Web3 community. Only 3,000 NFT passes, unlocking exclusive content, events,
                  and collaborations. Created Oct 2025 • Contributor Royalties 5% • ChainHouse
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 text-right text-sm uppercase tracking-[0.35em] text-[#E4DFFF]/70 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <p>{stat.label}</p>
                    <p className="text-lg font-semibold tracking-normal text-[#FAFAFA]">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-[#2C2741] via-[#272138] to-[#1F1A2C] text-sm text-[#EAE6FF]/90 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.75)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.18),transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.25),transparent_70%)]" />

            <div className="relative flex flex-wrap items-center justify-between gap-4 border-b border-[#4D3E8C]/40 px-6 py-4">
              <div className="flex items-center gap-5 text-xs uppercase tracking-[0.35em] text-[#B5A9FF]/80">
                <button className="rounded-full bg-[#4F2EDC] px-4 py-1.5 text-[#FAFAFA]">Items</button>
                <button className="rounded-full px-4 py-1.5 text-[#FAFAFA]/60 transition hover:text-[#FAFAFA]">
                  Activity
                </button>
              </div>
              <div className="flex items-center gap-4 text-[#EAE6FF]/70">
                <span className="text-xs uppercase tracking-[0.35em]">Share</span>
                <span className="text-lg">⋮</span>
              </div>
            </div>

            <div className="relative grid gap-6 px-6 pb-10 pt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="relative flex flex-col overflow-hidden rounded-[24px] border border-[#1F1833] bg-gradient-to-b from-[#1C1730] via-[#221C3A] to-[#2D234C] text-[#FAFAFA] shadow-[0_20px_60px_-45px_rgba(0,0,0,0.8)]"
                >
                  <div className="relative flex-1 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_70%)]" />
                  <div className="flex flex-col gap-3 border-t border-[#332B4F] bg-[#140F25]/80 px-4 py-4 text-sm">
                    <div className="flex items-center justify-between font-medium">
                      <span>{item.name}</span>
                      <span className="flex items-center gap-1 text-xs text-[#44D37E]">
                        <span className="text-base leading-none">●</span>
                        {item.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#C9C3ED]/80">
                      <span>{item.price}</span>
                      {index === 2 ? (
                        <button className="rounded-full bg-[#4F2EDC] px-3 py-1 text-xs font-semibold text-[#FAFAFA]">
                          Buy Now
                        </button>
                      ) : (
                        <span className="rounded-full bg-[#30254D] px-3 py-1 text-xs text-[#C9C3ED]/90">
                          Listed
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
import type { Metadata } from "next";

import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Mint | ChainHouse",
  description: "Mint your ChainHouse membership pass and unlock exclusive Web3 learning experiences.",
};

const editionCards = [
  { id: 1, label: "Member #1", status: "Live" },
  { id: 2, label: "Member #2", status: "Live" },
  { id: 3, label: "Member #3", status: "Live" },
];

export default function MintPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#050505] text-[#FAFAFA]">
      <section className="relative flex-1 overflow-hidden px-6 pb-24 pt-32 sm:px-10 lg:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-[-20%] top-[-180px] h-[520px] bg-[radial-gradient(circle_at_top,rgba(107,53,232,0.22),transparent_75%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-[-15%] bottom-[-260px] h-[680px] bg-[radial-gradient(circle_at_bottom,rgba(63,19,164,0.22),transparent_80%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(107,53,232,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(63,19,164,0.12) 1px, transparent 1px)",
            backgroundSize: "160px 160px",
          }}
        />

        <div className="relative mx-auto flex w-full max-w-[1260px] flex-col gap-16">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-[#A891FF]">Featured Project</p>
            <h1 className="text-3xl font-semibold tracking-tight text-[#FAFAFA] sm:text-4xl">
              ChainHouse Membership Pass
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-[#D1CCEE] sm:text-base">
              One NFT, a thousand opportunities. From exclusive content to global networking, it all starts here.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#4C24C9] via-[#5C2EE8] to-[#3216A6] p-10 shadow-[0_50px_120px_-60px_rgba(31,11,94,0.75)] sm:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.18),transparent_65%)]" aria-hidden />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_40%,rgba(0,0,0,0.18),transparent_70%)]" aria-hidden />

            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.48em] text-[#E4DFFF]/80">Mint Open</p>
                  <h2 className="mt-4 text-[34px] font-semibold leading-tight text-[#FAFAFA]">
                    ChainHouse Membership Pass
                  </h2>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#F5EFFE]/85">
                    Mint your pass to access curated courses, live workshops, and a network of builders pushing the next
                    era of Web3. Only 1,000 passes availableâ€”each unlocks perpetual learning and community access.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="rounded-full bg-[#FAFAFA] px-5 py-2 text-sm font-semibold text-[#050505] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-25px_rgba(0,0,0,0.45)]">
                    View Collection
                  </button>
                  <button className="rounded-full border border-[#FAFAFA]/40 px-5 py-2 text-sm font-semibold text-[#FAFAFA] transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#FAFAFA]/80">
                    Learn More
                  </button>
                </div>
                <div className="mt-2 grid gap-3 text-xs uppercase tracking-[0.38em] text-[#CEC3FF] sm:grid-cols-3">
                  <div>
                    <span className="text-[#FAFAFA]">Supply</span>
                    <p className="mt-1 text-base font-semibold tracking-normal text-[#FAFAFA]">1,000</p>
                  </div>
                  <div>
                    <span className="text-[#FAFAFA]">Mint Price</span>
                    <p className="mt-1 text-base font-semibold tracking-normal text-[#FAFAFA]">0.08 ETH</p>
                  </div>
                  <div>
                    <span className="text-[#FAFAFA]">Status</span>
                    <p className="mt-1 text-base font-semibold tracking-normal text-[#65FF8F]">Live</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {editionCards.map((card) => (
                  <div
                    key={card.id}
                    className="relative flex h-[260px] flex-col justify-between rounded-[28px] border border-[#0F0B2A] bg-gradient-to-b from-[#5E33E2] to-[#2D137B] p-4 text-[#FAFAFA] shadow-[0_25px_60px_-40px_rgba(0,0,0,0.6)]"
                  >
                    <div className="absolute inset-0 rounded-[28px] border border-[#FFFFFF]/10" aria-hidden />
                    <div className="relative flex-1 rounded-[22px] border border-[#1F114C] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_70%)]" />
                    <div className="relative mt-3 rounded-[20px] border border-[#160A3F] bg-[#FAFAFA] px-4 py-3 text-sm font-medium text-[#050505]">
                      <div className="flex items-center justify-between">
                        <span>{card.label}</span>
                        <span className="flex items-center gap-2 text-xs text-[#0F8F4F]">
                          â— {card.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#31166B] via-[#4121A8] to-[#5D33F5] p-16 text-center shadow-[0_40px_100px_-60px_rgba(31,11,94,0.7)] sm:p-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_60%)]" aria-hidden />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.18),transparent_70%)]" aria-hidden />
            <div className="relative mx-auto flex max-w-xl flex-col items-center gap-6">
              <h2 className="text-3xl font-semibold tracking-tight text-[#FAFAFA] sm:text-4xl">Get your memberpass</h2>
              <p className="max-w-md text-sm leading-relaxed text-[#E6E1FF]/85">
                Secure your access to premium content, token-gated experiences, and private developer cohorts. Mint now
                and become part of the ChainHouse collective.
              </p>
              <button className="rounded-full bg-[#FAFAFA] px-6 py-2 text-sm font-semibold text-[#2A1180] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_-30px_rgba(18,5,55,0.55)]">
                Mint Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

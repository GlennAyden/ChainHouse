import Link from "next/link";

const cards = [
  {
    title: "Mint NFT",
    description: "Get your exclusive NFT Membership Pass your gateway to ChainHouse and everything Web3.",
    href: "/mint",
  },
  {
    title: "Discover Exclusive Content",
    description: "Get your exclusive NFT Membership Pass your gateway to ChainHouse and everything Web3.",
    href: "/content",
  },
  {
    title: "Community",
    description:
      "Join a global network of blockchain learners, developers, and investors. Stronger together in Web3.",
    href: "/community",
  },
];

export default function QuickLinksSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 pb-28 pt-12 sm:px-10 lg:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(63,19,164,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(107,53,232,0.12) 1px, transparent 1px)",
          backgroundSize: "140px 140px",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_bottom,rgba(107,53,232,0.24),transparent_65%)]" />

      <div className="relative mx-auto w-full max-w-[1260px]">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative flex min-h-[220px] flex-col justify-between rounded-[32px] bg-[#FAFAFA] px-10 py-12 text-[#050505] shadow-[0_24px_60px_-40px_rgba(0,0,0,0.5)] transition-shadow duration-300 hover:shadow-[0_30px_70px_-38px_rgba(50,28,120,0.35)]"
            >
              <span className="absolute right-8 top-8 text-lg text-[#050505] transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
              <div className="max-w-[260px] space-y-4">
                <h3 className="text-[26px] font-semibold leading-tight">{card.title}</h3>
                <p className="text-sm leading-relaxed text-[#595959]">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
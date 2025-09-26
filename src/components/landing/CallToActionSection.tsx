const headlineLines = [
  "Are you a curious learner?",
  "An ambitious builder?",
  "A passionate Web3 explorer?",
];

export default function CallToActionSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 pb-32 pt-16 sm:px-10 lg:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(107,53,232,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(89,40,220,0.15) 1px, transparent 1px)",
          backgroundSize: "160px 160px",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(107,53,232,0.22),transparent_70%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl justify-center">
        <div className="relative w-full max-w-[1240px] overflow-hidden rounded-[36px] bg-[#935455] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.55)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.16),transparent_60%)]" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_85%,rgba(0,0,0,0.2),transparent_70%)]" aria-hidden />

          <div className="relative flex h-full min-h-[520px] flex-col items-start justify-end px-10 pb-12 sm:px-14 sm:pb-16">
            <p className="rounded-full bg-[#050505] px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-[#FAFAFA]">
              Ready to join the future of Web3?
            </p>
            <div className="mt-6 flex flex-col gap-3 text-3xl font-semibold leading-tight sm:text-[34px]">
              {headlineLines.map((line) => (
                <span
                  key={line}
                  className="rounded-full bg-[#050505] px-4 py-2 text-[#FAFAFA] shadow-[0_12px_30px_-26px_rgba(0,0,0,0.85)]"
                >
                  {line}
                </span>
              ))}
            </div>
            <p className="mt-6 max-w-md rounded-3xl bg-[#050505] px-4 py-4 text-sm leading-relaxed text-[#F5E8E8]/90">
              Connect your wallet and mint your ChainHouse NFT Pass to unlock exclusive knowledge, events, and a
              thriving global community of builders.
            </p>
            <div className="mt-4 inline-flex rounded-full bg-[#FAFAFA] px-5 py-2 text-sm font-semibold text-[#050505]">
              Mint Your NFT Pass
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
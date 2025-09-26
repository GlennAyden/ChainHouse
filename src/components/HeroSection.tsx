import Image from "next/image";

import chainhouseLogo from "@/../assets/chainhouse-logo.png";

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#050505] text-[#FAFAFA]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(107, 53, 232, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(63, 19, 164, 0.25) 1px, transparent 1px)",
          backgroundSize: "140px 140px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(107,53,232,0.35),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center px-6 pb-20 pt-28 text-center sm:px-10 lg:px-12">
        <div className="flex items-center gap-3 rounded-full border border-[#6B35E8]/40 bg-[#050505]/80 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#CFC2FF]">
          <Image src={chainhouseLogo} alt="ChainHouse emblem" width={28} height={28} className="h-7 w-7" />
          <span>ChainHouse</span>
        </div>
        <h1 className="mt-10 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Your Gateway to the Future of
          <span className="block bg-gradient-to-r from-[#6B35E8] via-[#3F13A4] to-[#6B35E8] bg-clip-text text-transparent">
            Blockchain Learning.
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-base text-[#D6D6D6] sm:text-lg">
          ChainHouse is a global community connecting learners, builders, and blockchain enthusiasts through NFT Membership Passes with exclusive access to content, events, and networks in Web3.
        </p>
        <div className="mt-12 flex w-full max-w-2xl flex-col gap-4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#6B35E8]/50 to-transparent" />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#3F13A4]/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}

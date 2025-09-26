import Image from "next/image";
import Link from "next/link";

import chainhouseLogo from "@/../assets/chainhouse-logo.png";
import discordLogo from "@/../assets/discord-logo.png";
import xLogo from "@/../assets/x-twitter-logo.png";

const quickLinks = [
  { href: "#explore", label: "Explore" },
  { href: "#mint", label: "Mint" },
  { href: "#content", label: "Content" },
  { href: "#community", label: "Community" },
];

const resources = [
  { href: "#blog", label: "Blog" },
  { href: "#events", label: "Events" },
  { href: "#docs", label: "Docs" },
  { href: "#support", label: "Support" },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-[#FAFAFA]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6B35E8] to-transparent" />
      <div className="absolute inset-x-0 top-8 h-px bg-gradient-to-r from-transparent via-[#3F13A4] to-transparent opacity-60" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#6B35E8]/40 bg-[#050505] p-1">
                <Image src={chainhouseLogo} alt="ChainHouse logo" fill sizes="48px" className="object-contain" />
              </div>
              <div>
                <span className="text-xl font-semibold">ChainHouse</span>
                <p className="text-xs uppercase tracking-[0.4em] text-[#CFC2FF]">Web3 Learning Hub</p>
              </div>
            </div>
            <p className="text-sm text-[#B5B5B5]">
              Empowering the next wave of blockchain builders with curated knowledge, immersive events, and an engaged global community.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://x.com"
                aria-label="ChainHouse on X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6B35E8]/50 bg-[#050505] transition duration-200 hover:bg-[#6B35E8]/20"
              >
                <Image src={xLogo} alt="X logo" width={20} height={20} />
              </Link>
              <Link
                href="https://discord.com"
                aria-label="Join ChainHouse on Discord"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3F13A4]/50 bg-[#050505] transition duration-200 hover:bg-[#3F13A4]/20"
              >
                <Image src={discordLogo} alt="Discord logo" width={22} height={22} />
              </Link>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-10 text-sm text-[#D6D6D6] sm:grid-cols-4">
            <div className="space-y-4 sm:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#CFC2FF]">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="transition-colors duration-200 hover:text-[#6B35E8]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 sm:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#CFC2FF]">Resources</h3>
              <ul className="space-y-3">
                {resources.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="transition-colors duration-200 hover:text-[#6B35E8]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-xs space-y-4 rounded-3xl border border-[#3F13A4]/40 bg-[#050505]/70 p-6">
            <h3 className="text-base font-semibold">Stay in the Loop</h3>
            <p className="text-sm text-[#B5B5B5]">
              Subscribe for curated resources, event invites, and product releases from the ChainHouse ecosystem.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="name@email.com"
                className="flex-1 rounded-full border border-[#6B35E8]/40 bg-[#050505] px-4 py-2 text-[#FAFAFA] placeholder:text-[#595959] focus:border-[#6B35E8] focus:outline-none"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-full bg-gradient-to-r from-[#6B35E8] to-[#3F13A4] px-5 py-2 text-sm font-semibold text-[#FAFAFA] transition duration-200 hover:shadow-[0_12px_30px_-12px_rgba(107,53,232,0.8)]"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#3F13A4]/30 pt-6 text-xs text-[#595959] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} ChainHouse. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#privacy" className="transition-colors duration-200 hover:text-[#D6D6D6]">
              Privacy Policy
            </Link>
            <Link href="#terms" className="transition-colors duration-200 hover:text-[#D6D6D6]">
              Terms of Service
            </Link>
            <Link href="#brand" className="transition-colors duration-200 hover:text-[#D6D6D6]">
              Brand Assets
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

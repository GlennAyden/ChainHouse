import Image from "next/image";
import Link from "next/link";

import chainhouseLogo from "@/../assets/chainhouse-logo.png";
import discordLogo from "@/../assets/discord-logo.png";
import xLogo from "@/../assets/x-twitter-logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/mint", label: "Mint" },
  { href: "/#content", label: "Content" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 pt-6 sm:px-6">
      <div className="flex w-full max-w-4xl items-center rounded-full border border-[#3F13A4]/25 bg-[#FAFAFA] px-4 py-3 text-[#050505] shadow-[0_18px_35px_-24px_rgba(107,53,232,0.9)]">
        <Link href="/" className="flex items-center gap-3 pl-2 pr-6">
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#050505]">
            <Image src={chainhouseLogo} alt="ChainHouse logo" fill sizes="36px" className="object-contain" />
          </span>
          <span className="text-lg font-semibold tracking-tight">ChainHouse</span>
        </Link>

        <nav className="flex flex-1 items-center justify-center border-x border-[#050505]/10 px-8">
          <ul className="flex items-center gap-10 text-sm font-semibold">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-[#3F13A4]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 pl-6 pr-2">
          <Link
            href="https://x.com"
            aria-label="ChainHouse on X"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#050505]/10 bg-[#FAFAFA] transition duration-200 hover:border-[#3F13A4]"
          >
            <Image src={xLogo} alt="X logo" width={18} height={18} />
          </Link>
          <Link
            href="https://discord.com"
            aria-label="Join ChainHouse on Discord"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#050505]/10 bg-[#FAFAFA] transition duration-200 hover:border-[#6B35E8]"
          >
            <Image src={discordLogo} alt="Discord logo" width={20} height={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}
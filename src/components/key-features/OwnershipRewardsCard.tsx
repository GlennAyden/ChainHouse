import type { CSSProperties } from "react";

import FeatureCard from "@/components/key-features/FeatureCard";

type OwnershipRewardsCardProps = {
  className?: string;
};

type EllipseStyle = CSSProperties & {
  "--x"?: string;
  "--y"?: string;
  "--hover-x"?: string;
  "--hover-y"?: string;
  "--opacity"?: number;
  "--hover-opacity"?: number;
};

const outlineStyle: EllipseStyle = {
  "--opacity": 0,
  "--hover-opacity": 1,
  "--y": "0px",
  "--hover-y": "-72px",
};

const solidStyle: EllipseStyle = {
  "--opacity": 1,
  "--hover-opacity": 1,
  "--y": "0px",
  "--hover-y": "54px",
};

export default function OwnershipRewardsCard({ className }: OwnershipRewardsCardProps) {
  const containerClass = [className, "group"].filter(Boolean).join(" ");

  return (
    <FeatureCard title="Ownership & Rewards" className={containerClass} shadow="subtle">
      <div className="mt-8 flex justify-center" aria-hidden>
        <div className="relative h-36 w-48">
          <span
            className="rewards-ellipse block h-10 w-40 rounded-full border-2 border-[#6B35E8]"
            style={outlineStyle}
          />
          <span
            className="rewards-ellipse block h-14 w-44 rounded-full bg-[#6B35E8] transition-shadow duration-500 ease-out group-hover:shadow-[0_22px_45px_-24px_rgba(107,53,232,0.75)]"
            style={solidStyle}
          />
        </div>
      </div>
      <p className="mt-8 text-sm text-[#595959]">
        Owning the NFT means lifetime membership proof, with potential gamification like EXP, leaderboards,
        airdrops, and tiered access.
      </p>
    </FeatureCard>
  );
}
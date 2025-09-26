import type { CSSProperties } from "react";

import FeatureCard from "@/components/key-features/FeatureCard";

type NFTExclusivityCardProps = {
  className?: string;
};

type FrameConfig = {
  id: string;
  color: string;
  x: number;
  hoverX: number;
  opacity?: number;
  hoverOpacity?: number;
  delay?: number;
  zIndex?: number;
};

type FrameStyle = CSSProperties & {
  "--x"?: string;
  "--hover-x"?: string;
  "--opacity"?: number;
  "--hover-opacity"?: number;
};

const frames: FrameConfig[] = [
  { id: "left-extra-3", color: "#6B35E8", x: -260, hoverX: -150, opacity: 0, hoverOpacity: 0.35, delay: 120, zIndex: 7 },
  { id: "left-extra-2", color: "#6B35E8", x: -220, hoverX: -110, opacity: 0, hoverOpacity: 0.55, delay: 160, zIndex: 8 },
  { id: "left-extra-1", color: "#6B35E8", x: -180, hoverX: -70, opacity: 0, hoverOpacity: 0.75, delay: 200, zIndex: 9 },
  { id: "base-left", color: "#6B35E8", x: -140, hoverX: -30, opacity: 1, hoverOpacity: 1, zIndex: 10 },
  { id: "base-center", color: "#6B35E8", x: -10, hoverX: 0, opacity: 1, hoverOpacity: 1, zIndex: 11 },
  { id: "base-right", color: "#595959", x: 120, hoverX: 30, opacity: 1, hoverOpacity: 1, zIndex: 10 },
  { id: "right-extra-1", color: "#595959", x: 160, hoverX: 70, opacity: 0, hoverOpacity: 0.75, delay: 200, zIndex: 9 },
  { id: "right-extra-2", color: "#595959", x: 200, hoverX: 110, opacity: 0, hoverOpacity: 0.55, delay: 240, zIndex: 8 },
  { id: "right-extra-3", color: "#595959", x: 240, hoverX: 150, opacity: 0, hoverOpacity: 0.35, delay: 280, zIndex: 7 },
];

export default function NFTExclusivityCard({ className }: NFTExclusivityCardProps) {
  const containerClass = [className, "group"].filter(Boolean).join(" ");

  return (
    <FeatureCard title="NFT-Based Exclusivity" className={containerClass}>
      <p className="mt-3 max-w-xl text-sm text-[#595959]">
        Membership is verified through NFTs, making it unique and impossible to counterfeit.
      </p>
      <div className="mt-12 flex w-full items-center justify-center" aria-hidden>
        <div className="relative h-40 w-[600px]">
          {frames.map((frame) => {
            const style: FrameStyle = {
              borderColor: frame.color,
              zIndex: frame.zIndex,
              transitionDelay: frame.delay ? `${frame.delay}ms` : undefined,
              "--x": `${frame.x}px`,
              "--hover-x": `${frame.hoverX}px`,
              "--opacity": frame.opacity ?? 1,
              "--hover-opacity": frame.hoverOpacity ?? frame.opacity ?? 1,
            };

            return <span key={frame.id} className="nft-frame border-2" style={style} />;
          })}
        </div>
      </div>
    </FeatureCard>
  );
}
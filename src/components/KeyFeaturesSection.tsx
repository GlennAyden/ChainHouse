import CommunityCard from "@/components/key-features/CommunityCard";
import EducationCard from "@/components/key-features/EducationCard";
import NFTExclusivityCard from "@/components/key-features/NFTExclusivityCard";
import OwnershipRewardsCard from "@/components/key-features/OwnershipRewardsCard";

export default function KeyFeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 pb-24 pt-12 sm:px-10 lg:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(107,53,232,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(63,19,164,0.18) 1px, transparent 1px)",
          backgroundSize: "140px 140px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(107,53,232,0.22),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(circle_at_bottom,rgba(63,19,164,0.27),transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-12">
          <NFTExclusivityCard className="lg:col-span-8" />
          <OwnershipRewardsCard className="lg:col-span-4" />
          <EducationCard className="lg:col-span-4" />
          <CommunityCard className="lg:col-span-8" />
        </div>
      </div>
    </section>
  );
}
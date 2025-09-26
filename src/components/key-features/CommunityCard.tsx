import FeatureCard from "@/components/key-features/FeatureCard";

type CommunityCardProps = {
  className?: string;
};

const purpleDots = new Set(["1-2", "2-9", "3-4", "4-11", "5-7"]);
const grayDots = new Set(["2-4", "3-7", "5-3"]);

const totalRows = 6;
const totalCols = 11;

export default function CommunityCard({ className }: CommunityCardProps) {
  return (
    <FeatureCard title="Active Global Community" className={className}>
      <div className="mt-8 flex flex-col gap-4" aria-hidden>
        {Array.from({ length: totalRows }).map((_, row) => (
          <div key={`row-${row}`} className="flex gap-4">
            {Array.from({ length: totalCols }).map((_, col) => {
              const key = `${row + 1}-${col + 1}`;
              const isPurple = purpleDots.has(key);
              const isGray = grayDots.has(key);
              const colorClass = isPurple
                ? "bg-[#6B35E8]"
                : isGray
                ? "bg-[#595959]"
                : "bg-[#050505]";

              return <span key={key} className={`h-3 w-3 rounded-full ${colorClass}`} />;
            })}
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-[#595959]">
        Connect with learners, developers, investors, and Web3 enthusiasts worldwide for networking and collaboration.
      </p>
    </FeatureCard>
  );
}
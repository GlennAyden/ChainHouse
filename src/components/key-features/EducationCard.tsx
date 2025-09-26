import FeatureCard from "@/components/key-features/FeatureCard";

type EducationCardProps = {
  className?: string;
};

const educationPattern = [
  ["outline", "outline", "outline", "gray"],
  ["outline", "outline", "outline", "gray"],
  ["outline", "outline", "outline", "gray"],
  ["solid", "solid", "solid", "gray"],
];

export default function EducationCard({ className }: EducationCardProps) {
  return (
    <FeatureCard
      title="Curated & Guided Blockchain Education"
      className={className}
      shadow="subtle"
    >
      <div className="mt-8 grid w-max grid-cols-4 gap-2" aria-hidden>
        {educationPattern.flat().map((type, index) => {
          const isGray = type === "gray";
          const isSolid = type === "solid";
          const baseClasses = "h-6 w-6 rounded-[6px] border-2";
          const colorClasses = isGray ? "border-[#C9C9C9] bg-[#C9C9C9]" : "border-[#6B35E8]";
          const fillClass = isSolid && !isGray ? "bg-[#6B35E8]" : "";

          return (
            <span
              key={`education-square-${index}`}
              className={[baseClasses, colorClasses, fillClass].filter(Boolean).join(" ")}
            />
          );
        })}
      </div>
      <p className="mt-8 text-sm text-[#595959]">
        Gain access to premium articles, workshops, AMAs, and learning materials curated for both beginners and builders.
      </p>
    </FeatureCard>
  );
}
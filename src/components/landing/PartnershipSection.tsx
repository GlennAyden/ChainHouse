const partners = ["Partner 1", "Partner 2", "Partner 3", "Partner 4"];

export default function PartnershipSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 pb-28 pt-14 sm:px-10 lg:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            "linear-gradient(rgba(107,53,232,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(63,19,164,0.12) 1px, transparent 1px)",
          backgroundSize: "160px 160px",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(107,53,232,0.2),transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-6xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-[#FAFAFA]">Our Partnership</h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex h-28 w-28 items-center justify-center rounded-full bg-[#FAFAFA] text-xs font-medium uppercase tracking-[0.25em] text-[#050505]"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
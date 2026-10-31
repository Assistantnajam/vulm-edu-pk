/** Purple course banner with the faint hexagon pattern used by both course card types. */
export function CourseHeader({
  code,
  title,
  category,
  credits,
  creditsLabel,
}: {
  code: string;
  title: string;
  category: string;
  credits: number;
  creditsLabel: string;
}) {
  return (
    <div
      className="relative overflow-hidden px-[25px] py-[14px] font-roboto text-white"
      style={{
        background:
          "radial-gradient(60% 140% at 85% 130%, rgba(255,255,255,0.12) 0 40%, transparent 41%), linear-gradient(100deg,#7a4bd1,#8656d8 55%,#7140c7)",
      }}
    >
      <h3 className="truncate text-[18px] font-medium leading-[26px]">
        {code} - {title}
      </h3>
      <p className="text-[14px] font-light leading-[24px] text-white/80">{category}</p>
      <p className="text-[14px] font-light leading-[24px] text-white/80">
        {credits} {creditsLabel}
      </p>
    </div>
  );
}

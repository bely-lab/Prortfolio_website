
type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export function PageIntro({ eyebrow, title, intro }: Props) {
  return (
    <div className="max-w-4xl border-b border-[#dcded6] pb-12 pt-20 md:pb-16 md:pt-24">
      <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#72766f]">
        {eyebrow}
      </p>

      <h1 className="max-w-4xl text-4xl font-medium leading-[1.15] tracking-[-0.045em] text-[#20231f] sm:text-5xl md:text-6xl">
        {title}
      </h1>

      {intro && (
        <p className="mt-7 max-w-2xl text-base leading-7 text-[#656a62] md:text-lg md:leading-8">
          {intro}
        </p>
      )}
    </div>
  );
}

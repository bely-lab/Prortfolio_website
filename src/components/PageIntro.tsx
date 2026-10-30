type Props = { eyebrow: string; title: string; intro?: string };

export function PageIntro({ eyebrow, title, intro }: Props) {
  return (
    <div className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {intro && <p className="page-lede">{intro}</p>}
    </div>
  );
}

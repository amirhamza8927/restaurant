export function SectionTitle({
  eyebrow,
  title,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      <h2 className="font-serif text-4xl leading-tight md:text-[58px]">{title}</h2>
      {eyebrow ? (
        <p className="mt-5 text-lg leading-8 md:text-2xl">{eyebrow}</p>
      ) : null}
    </div>
  );
}

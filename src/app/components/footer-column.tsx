export function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-serif text-[22px] font-bold">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="text-[16px] font-medium leading-none whitespace-nowrap">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

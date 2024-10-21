export default function Item({
  name,
  quantity,
  category,
}: {
  name: string;
  quantity: number;
  category: string;
}) {
  return (
    <li className="item flex flex-col bg-slate-400 p-4 rounded w-[40rem]">
      <p className="font-bold text-xl text-slate-950">{name}</p>
      <p className="opacity-70 text-slate-950">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}

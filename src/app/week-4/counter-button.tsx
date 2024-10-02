const buttonClassName =
  "bg-slate-800 hover:bg-slate-950 w-12 h-12 rounded select-none";

export default function CounterButton({
  text,
  enabled,
  onClick = () => {},
}: {
  text: string;
  enabled: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      id="increment"
      className={
        enabled
          ? buttonClassName
          : `${buttonClassName} pointer-events-none bg-gray-400`
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
}

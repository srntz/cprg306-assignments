const buttonClassName = "hover:bg-slate-950 w-12 h-12 rounded select-none";

export default function CounterButton({
  text,
  enabled,
  onClick = () => {},
  className,
}: {
  text: string;
  enabled: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      id="increment"
      className={
        enabled
          ? `${buttonClassName} ${className} bg-slate-800`
          : `${buttonClassName} ${className} pointer-events-none bg-gray-500`
      }
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
}

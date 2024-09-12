export default function Header({ headerTitle }: { headerTitle: string }) {
  return (
    <header className="w-full h-28 flex justify-center items-center">
      <h1 className="text-2xl">{headerTitle}</h1>
    </header>
  );
}

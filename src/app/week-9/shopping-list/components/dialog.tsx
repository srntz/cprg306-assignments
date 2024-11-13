export default function Dialog({
  children,
  show,
}: {
  children?: React.ReactNode;
  show: boolean;
}) {
  return (
    <>
      <div
        className={`${show || "hidden"} fixed h-full w-full backdrop-blur-sm bg-gray-950 bg-opacity-70 left-0 top-0 flex justify-center items-center`}
      >
        <div className="bg-white bg-opacity-80 p-5 w-5/12 rounded-xl shadow-xl">
          {children}
        </div>
      </div>
    </>
  );
}

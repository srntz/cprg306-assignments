import Link from "next/link";

export default function StudentInfo() {
  return (
    <div id="student-info">
      <h2 className="text-2xl mb-1">Denis Pechenkin</h2>
      <Link
        href={"https://github.com/s-raniytuz/cprg306-assignments.git"}
        className="opacity-40 hover:ml-2 transition-all text-blue-200 text-[1rem]"
      >
        My Github Repository
      </Link>
    </div>
  );
}

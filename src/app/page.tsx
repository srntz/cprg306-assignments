import Link from "next/link";
import Header from "../components/global/Header";

export default function Home() {
  return (
    <div id="home-page" className="w-full h-full">
      <Header headerTitle="CPRG 306 Assignments" />
      <div id="link-container" className="flex flex-col gap-6">
        <Link
          href={"/week-2"}
          className="hover:bg-slate-800 hover:ml-3 rounded h-10 w-48 flex items-center p-3 transition-all"
        >
          Week 2
        </Link>
      </div>
    </div>
  );
}

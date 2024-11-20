"use client";

import { useAuthContext } from "@/app/week-9/utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, githubSignIn, firebaseSignOut } = useAuthContext();

  return (
    <>
      {!user ? (
        <div className="w-full h-screen flex justify-center items-center">
          <button
            className="bg-white w-28 h-10 rounded-md text-slate-950 hover:bg-gray-200"
            onClick={githubSignIn}
          >
            Login
          </button>
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center items-center flex-col gap-5">
          <img src={user.photoURL || ""} className="w-36 rounded-lg" />

          <p className="text-xl">Welcome, {user.displayName}!</p>

          <div className="flex gap-10">
            <Link href={"/week-10/shopping-list"}>
              <button className="bg-white w-28 h-10 rounded-md text-slate-950 hover:bg-gray-200">
                Shopping List
              </button>
            </Link>

            <button
              className="bg-white w-28 h-10 rounded-md text-slate-950 hover:bg-gray-200"
              onClick={firebaseSignOut}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
}

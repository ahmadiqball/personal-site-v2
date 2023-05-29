import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ahmad Iqbal | Resume",
};

export default function Blog() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl text-bgDark dark:text-white lg:text-4xl pb-6 lg:pb-10 font-semibold">
        Upcoming blog page...
      </h1>
      <Link
        href="/"
        className="px-5 py-3 bg-bgDark bg-opacity-25 hover:bg-opacity-50 dark:bg-gray-500 dark:text-white font-medium rounded-md"
      >
        Return Home
      </Link>
    </div>
  );


}

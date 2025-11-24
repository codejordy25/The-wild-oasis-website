import Link from "next/link";

import Navigation from "@/app/_components/Navigation";
function page() {
  return (
    <div>
      <h1>The wild oasis. Welcome to the paradise. </h1>
      <Link href="/cabins">Explore luxy cabin</Link>
    </div>
  );
}

export default page;

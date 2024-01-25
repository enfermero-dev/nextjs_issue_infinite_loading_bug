import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4 text-xl flex flex-col gap-4">
      <h1>Welcome</h1>
      <p>Navigate to the menu and between pages clicking the links, checkout the networks activity on the inspect tools, refreshing the browser allows the bug to happen again</p>
      <Link href="/menu" className="bg-purple-800 px-4 py-2 rounded-full ">Go to menu</Link>
    </div>
  );
}

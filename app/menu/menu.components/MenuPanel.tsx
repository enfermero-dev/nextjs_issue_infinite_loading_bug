import Link from "next/link"

export const MenuPanel = () => {
    return (
        <div className="flex flex-col gap-4 p-4 bg-purple-950">
            <h1>Menu panel page</h1>
            <div className="flex flex-col gap-4">
                <Link href="/menu" className="bg-purple-800 px-4 py-2 rounded-full ">Go to menu</Link>
                <Link href="/menu/second" className="bg-purple-800 px-4 py-2 rounded-full ">Go to Second page</Link>
            </div>
        </div>
    )
}

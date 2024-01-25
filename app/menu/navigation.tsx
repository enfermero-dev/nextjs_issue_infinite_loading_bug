import Link from 'next/link'
import React from 'react'

export const navigation = () => {
  return (
    <>
        <h2>Navigation panel</h2>
        <div className="flex flex-col gap-2">
            <Link href="/second" className="bg-purple-800 px-4 py-2 rounded-full ">Go to Second page</Link>
        </div>
    </>
  )
}

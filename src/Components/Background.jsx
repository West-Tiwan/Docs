import React from 'react'

const Background = () => {
    return (
        <>
            <div className={"w-full h-screen fixed z-[2]"}>
            <div className={"w-full py-10 flex items-center justify-center text-zinc-400 font-semibold text-xl"}>Documents</div>
            <h1 className={"tracking-tighter leading-none text-[19vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900"}>Docs</h1>
            </div>
        </>
    )
}
export default Background

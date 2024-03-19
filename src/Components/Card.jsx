import React from 'react'
import { FaFileAlt } from "react-icons/fa";
// import { FaDownload } from "react-icons/fa6";

const Card = (props) => {
    return (
        <div className={"relative w-60 h-72 rounded-[30px] bg-green-300 p-6 overflow-hidden"}>
            <FaFileAlt/>
            <p className={"text-s mt-3 font-semibold leading-tight text-center"}>{props.title}</p>
            <p className={"text-xs mt-3 leading-tight"}>{props.desc}</p>
            {/*<div className={"footer absolute bottom-0 left-0 w-full py-2 px-6 "}>*/}
            {/*    <div className={"flex items-center justify-between mb-4"}>*/}
            {/*        <h5>0.4 mb</h5>*/}
            {/*        <FaDownload />*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
export default Card

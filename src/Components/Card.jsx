import React from 'react'
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";

const Card = (props) => {
    return (
        <motion.div drag whileDrag={{scale:1.1}} dragConstraints={props.refrence} className={"relative w-60 h-72 rounded-[30px] bg-green-300 p-6 overflow-hidden"}>
            <FaFileAlt/>
            <p className={"text-s mt-3 font-semibold leading-tight text-center"}>{props.data.title}</p>
            <p className={"text-xs mt-3 leading-tight"}>{props.data.desc}</p>
        </motion.div>
    )
}
export default Card

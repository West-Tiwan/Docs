import React ,{useState , useEffect, useRef} from 'react'
import Card from "./Card.jsx";

const Foreground = () => {
    const [data, setData] = useState({});
    const ref = useRef(null);
    useEffect(() => {
        setData({
            title:"lorem isaerfsa awrf e dsss afc",
            desc:"desc wafviedugbvc askefcvbsfo asefichs awsfcoihs wefnsdc sdcbhdoawd afcoihaedfno fecioahscnfwef afcoihaedfno fecioahscnfwef",
        });},[])

    return (
        <div ref={ref} className={"w-full h-full top-0 left-0 fixed z-[3]"}>
            <Card data={data} refrence={ref} />
        </div>
    )
}
export default Foreground

// eslint-disable-next-line no-unused-vars
import React ,{useState} from 'react'
import Card from "./Card.jsx";

const Foreground = () => {
    const [data, setData] = useState([]);
    setData([{
        title:"lorem isaerfsa awrf e dsss afc",
        desc:"desc wafviedugbvc askefcvbsfo asefichs awsfcoihs wefnsdc sdcbhdoawd afcoihaedfno fecioahscnfwef sidchdaiowebdfqwefd sciohqwebdf cdfoiefdhcwqeondfb",
    }])
    return (
        <div className={"w-full h-full top-0 left-0 fixed z-[3]"}>
            <Card data={data} />
        </div>
    )
}
export default Foreground

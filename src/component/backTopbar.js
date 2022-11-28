import ArrowKiri from '../attributes/arrow-kiri.png'
import { Link } from "react-router-dom";

// dibikin class
const backTopbar = () => {
    return (
        <div className='flex text-tulisan ml-5 pt-5 pb-5 items-center'>
            <Link to="/redirect"><img src={ArrowKiri} alt="" className='h-4/5'/></Link>
            <span className='text-2xl ml-20'>Create New Thread</span>
        </div>
    )
}

export default backTopbar
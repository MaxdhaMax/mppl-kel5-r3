import Hamburger from "../attributes/hamburger.png"
import Search from "../attributes/search.png"
import { Link } from "react-router-dom"

// masih perlu revisi 


const TopBar = () => {
    return (
        <div>
            <section className='bg-background'>
                <div className=" flex justify-between pt-5 pb-5 ml-8 mr-8">
                    <img src={Hamburger} alt="" />
                    <Link to="/search"><img src={Search} alt=''/></Link>
                </div>
            </section>
        </div>
    )
}

export default TopBar

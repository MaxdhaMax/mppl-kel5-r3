import Hamburger from "../attributes/hamburger.png"
import Search from "../attributes/search.png"

// masih perlu revisi 


const TopBar = () => {
    return (
        <div>
            <section className='bg-background'>
                <div className=" flex justify-between pt-5 pb-5 ml-8 mr-8">
                    <img src={Hamburger} alt="" />
                    <img src={Search} alt=''/>
                </div>
            </section>
        </div>
    )
}

export default TopBar

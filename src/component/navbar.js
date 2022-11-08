import HomeActive from '../attributes/home-active.png'
import Notif from '../attributes/notif.png'
import Profile from '../attributes/profile.png'

const Navbar = () => {
    return (
        <div>
            <section className='bg-background border-t border-slate-300 mt-52'>
                <div className=" flex justify-around ml-14 mr-14 pt-5 pb-5">
                    <img src={HomeActive} alt="" />
                    <img src={Notif} alt="" />
                    <img src={Profile} alt=''/>
                </div>
            </section>
        </div>
    )
}

export default Navbar
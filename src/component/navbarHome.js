import HomeAktif from '../attributes/home-active.png'
import Notif from '../attributes/notif.png'
import Profile from '../attributes/profile.png'
import { Link } from 'react-router-dom'

const NavbarHome = () => {
    return (
        <section className='bg-background-abu border-t border-slate-300 flex justify-around w-full pt-5 pb-5 bottom-0 fixed z-20 '>
            <img src={HomeAktif} alt="" />
            <Link to="/notification"><img src={Notif} alt="" /></Link>
            <Link to="/profile"><img src={Profile} alt=''/></Link>
        </section> 
    )
}

export default NavbarHome
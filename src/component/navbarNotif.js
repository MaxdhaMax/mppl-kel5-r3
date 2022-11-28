import Home from '../attributes/home.png'
import NotifAktif from '../attributes/notif-active.png'
import Profile from '../attributes/profile.png'
import { Link } from 'react-router-dom'

const NavbarNotification = () => {
    return (
        <section className='bg-background-abu border-t border-slate-300 flex justify-around w-full pt-5 pb-5 bottom-0 fixed z-20 '>
            <Link to="/redirect"><img src={Home} alt="" /></Link>
            <img src={NotifAktif} alt="" />
            <Link to="/profile"><img src={Profile} alt=''/></Link>
        </section> 
    )
}

export default NavbarNotification
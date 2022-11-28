import Home from '../attributes/home.png'
import Notif from '../attributes/notif.png'
import ProfileAktif from '../attributes/profile-active.png'
import { Link } from 'react-router-dom'

const NavbarProfile = () => {
    return (
        <section className='bg-background-abu border-t border-slate-300 flex justify-around w-full pt-5 pb-5 bottom-0 fixed z-20 '>
            <Link to="/redirect"><img src={Home} alt="" /></Link>
            <Link to="/notification"><img src={Notif} alt="" /></Link>
            <img src={ProfileAktif} alt=''/>
        </section> 
    )
}

export default NavbarProfile
import Navbar from "../component/navbar"
import TopBar from "../component/topbar"
import Profil from '../attributes/gambar-profil.png'
import Profil2 from '../attributes/profile-image-2.png'
import Profil3 from '../attributes/profile-image-3.png'
import Thread from "../component/thread"
import { Link } from "react-router-dom"

const Home = () => {
    return(
        <div>
            <div className="container h-screen w-screen bg-background grid grid-flow-row auto-rows-max">
                <TopBar/>
                <Link to="/create-thread">
                <div className="thread flex no-wrap items-center justify-center mt-5">
                    <img src={Profil} alt="" />
                    <input type="text" name="text" class="ml-4 px-3 py-1 bg-background text-tulisan border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-9/12 rounded-lg sm:text-sm focus:ring-1" disabled placeholder="Create New Thread .." />
                </div>
                </Link>
                <Link to="/see-thread"><Thread nama="Maxdha Max" image={Profil} hastag="#Ruang #Komdat" title="Ruang lab yang buat komdat ada di mana ya?" desc="jadi gw nyari ruang lab buat komdat, uda keliling2 ilkom tapi gaketemu. itu sebelah mana sih?"/></Link>
                <Thread nama="Freask Mretes" image={Profil2} hastag="#Soal" title="Ada yang punya soal OAK tahun lalu?" desc="Besok UTS OAK, bagi soal tahun lalu dong kalau ada yang punya"/>
                <Thread nama="Treasa Makres" image={Profil3} hastag="#Ruang" title="Ruang lab yang buat komdat ada di mana ya?" desc="jadi gw nyari ruang lab buat komdat, uda keliling2 ilkom tapi gaketemu. itu sebelah mana sih?"/>
                <Thread nama="Freask Mretes" image={Profil2} hastag="#Ruang" title="Ruang lab yang buat komdat ada di mana ya?" desc="jadi gw nyari ruang lab buat komdat, uda keliling2 ilkom tapi gaketemu. itu sebelah mana sih?"/>
                <Navbar type="home"/> 
            </div>
        </div>
    )
}

export default Home
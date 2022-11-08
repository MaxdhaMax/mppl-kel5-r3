import Navbar from "../component/navbar"
import TopBar from "../component/topbar"
import Profil from '../attributes/gambar-profil.png'
import Thread from "../component/thread"

const Home = () => {
    return(
        <div>
            <div className="container h-screen bg-background">
                <div className="content grid grid-flow-row auto-rows-max">
                    <TopBar/>
                    <div className="thread flex no-wrap items-center justify-center mt-5">
                        <img src={Profil} alt="" />
                        <input type="text" name="text" class="ml-4 px-3 py-1 bg-background text-tulisan border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-9/12 rounded-lg sm:text-sm focus:ring-1" placeholder="Create New Thread .." />
                    </div>
                    <Thread nama="Maxdha Maxiwinata" hastag="#Ruang" title="Ruang lab yang buat komdat ada di mana ya?" desc="jadi gw nyari ruang lab buat komdat, uda keliling2 ilkom tapi gaketemu. itu sebelah mana sih?"/>
                    <Navbar/>
                </div>
            </div>
        </div>
    )
}

export default Home
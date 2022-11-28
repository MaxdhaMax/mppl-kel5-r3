import TopBar from "../component/topbar"
import BackgroundProfile from "../attributes/background-image.png"
import ProfileBigger from "../attributes/profile-bigger.png"
import Twitter from "../attributes/Twitter.png"
import Instagram from "../attributes/Instagram.png"
import ThreadProfile from "../component/threadProfile"
import Navbar from "../component/navbar"

const Profile = () => {
    return(
        <div className="bg-background grid grid-flow-row auto-rows-max">
            <TopBar/>
            <div className="image grid mt-6 justify-items-center relative">
                <img src={BackgroundProfile} alt="" className="w-full"/>
                <img src={ProfileBigger} alt="" className="absolute top-32"/>
            </div>
            <caption className="grid mt-6 justify-items-center text-tulisan mt-16">
                <span className="text-2xl">Maxdha Max</span>
                <div className="social-media flex no-warp mt-2 ">
                    <div className="twitter flex no-wrap items-center">
                        <img src={Twitter} alt="" className="h-5/6"/>
                        <span className="text-xs ml-1">Maxdha</span>
                    </div>
                    <div className="instagram flex no-wrap items-center ml-20">
                        <img src={Instagram} alt="" className="h-5/6"/>
                        <span className="text-xs ml-1">Maxdha</span>
                    </div>
                </div>
                <span className="text-sm mt-3">Jett and Chamber main, Valorant for life !!</span>
            </caption>
            <section className="flex no-wrap  justify-around mt-8">
                <span className="text-2xl text-tulisan">Thread</span>
                <span className="text-2xl text-tulisan-light">Comments</span>
            </section>
            <div className="thread">
                <ThreadProfile title="Ruang lab yang buat komdat ada di mana ya?" desc="jadi gw nyari ruang lab buat komdat, uda keliling2 ilkom tapi gaketemu. itu sebelah mana sih?"/>
                <ThreadProfile title="Ruang lab yang buat komdat ada di mana ya?" desc="jadi gw nyari ruang lab buat komdat, uda keliling2 ilkom tapi gaketemu. itu sebelah mana sih?"/>
                <ThreadProfile title="Ruang lab yang buat komdat ada di mana ya?" desc="jadi gw nyari ruang lab buat komdat, uda keliling2 ilkom tapi gaketemu. itu sebelah mana sih?"/>
            </div>
            <Navbar type="profile"/>
        </div>
    )
}

export default Profile
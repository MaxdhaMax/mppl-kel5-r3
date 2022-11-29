import TopBar from "../component/topbar"
import BackgroundProfile from "../attributes/background-image.png"
import ProfileBigger from "../attributes/profile-bigger.png"
import Twitter from "../attributes/Twitter.png"
import Instagram from "../attributes/Instagram.png"
import ThreadProfile from "../component/threadProfile"
import CommentProfile from "../component/commentProfile"
import Navbar from "../component/navbar"
import { useState } from "react"


const Profile = () => {
    const [Thread,SetKeadaanThread] = useState(true)
    return(
        <div className="bg-background grid grid-flow-row auto-rows-max h-screen">
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
            {
                    Thread === true ? <div className="flex no-wrap  justify-around mt-5"><span className="text-2xl text-tulisan" onClick={() => SetKeadaanThread(true)}>Thread</span>
                    <span className="text-2xl text-tulisan-light" onClick={() => SetKeadaanThread(false)}>Comments</span></div> 
                    : <div className=" flex no-wrap  justify-around mt-5">
                        <span className="text-2xl text-tulisan-light" onClick={() => SetKeadaanThread(true)}>Thread</span>
                        <span className="text-2xl text-tulisan" onClick={() => SetKeadaanThread(false)}>Comments</span>
                    </div> 
            }
            {
                Thread === true ? <div className="thread">
                <ThreadProfile title="Ruang lab yang buat komdat ada di mana ya?" desc="jadi gw nyari ruang lab buat komdat, uda keliling2 ilkom tapi gaketemu. itu sebelah mana sih?"/>
                <ThreadProfile title="Ruang lab yang buat komdat ada di mana ya?" desc="jadi gw nyari ruang lab buat komdat, uda keliling2 ilkom tapi gaketemu. itu sebelah mana sih?"/>
                <ThreadProfile title="Ruang lab yang buat komdat ada di mana ya?" desc="jadi gw nyari ruang lab buat komdat, uda keliling2 ilkom tapi gaketemu. itu sebelah mana sih?"/>
                <ThreadProfile title="Ruang lab yang buat komdat ada di mana ya?" desc="jadi gw nyari ruang lab buat komdat, uda keliling2 ilkom tapi gaketemu. itu sebelah mana sih?"/>
            </div>
                : <div className="Comments">
                <CommentProfile nama="Maxdha Max" comment="Hallooo"/>
                <CommentProfile nama="Maxdha Max" comment="Samaa aku juga gatau"/>
                <CommentProfile nama="Maxdha Max" comment="Besok libur weh"/>
                <CommentProfile nama="Maxdha Max" comment="Haii juga"/>
                <CommentProfile nama="Maxdha Max" comment="Salam Kenal"/>
            </div>

                
            }
            

            <Navbar type="profile"/>
        </div>
    )
}

export default Profile
import React from "react"
import BackTopbar from "../component/backTopbar"
import Thread from "../component/thread"
import Comment from "../component/comment"
import Navbar from "../component/navbar"
import Profil from '../attributes/gambar-profil.png'
import Profil2 from '../attributes/profile-image-2.png'
import Profil3 from '../attributes/profile-image-3.png'

class seeThread extends React.Component {
    render(){
        return (
            <div className="bg-background h-screen">
                <BackTopbar judul="See Thread"/>
                <Thread image={Profil} nama="Maxdha Maxiwinata" hastag="#Ruang #Komdat" title="Ruang lab yang buat komdat ada di mana ya?" desc="jadi gw nyari ruang lab buat komdat, uda keliling2 ilkom tapi gaketemu. itu sebelah mana sih?"/>
                {/* tambahin new comment */}
                <div className="comment">
                    <Comment image={Profil2} nama="Freask Mretes" comment="sama, gw juga gatau"/>
                    <Comment image={Profil3} nama="Treasa Makres" comment="sama weh dimana yaa"/>
                    <Comment image={Profil} nama="Maxdha Max" comment="kayanya gw tau, waitt"/>
                    <Comment image={Profil2} nama="Freask Mretes" comment="dimana nih? gw nungguin nihh"/>
                </div>
                <Navbar type="home"/> 
            </div>
        )
    }
}

export default seeThread
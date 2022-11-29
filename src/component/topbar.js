import Hamburger from "../attributes/hamburger.png"
import Search from "../attributes/search.png"
import { Link } from "react-router-dom"
import React from "react"
// masih perlu revisi 


export default class TopBar extends React.Component {
    render(){
        return (
            <div>
                <section className='bg-background'>
                    <div className=" flex justify-between pt-6 pb-5 ml-8 mr-8">
                        <img src={Hamburger} alt="" />
                        <Link to="/search"><img src={Search} alt=''/></Link>
                    </div>
                </section>
            </div>
        )
    }
    
}

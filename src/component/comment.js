import React from "react"
import Profil from '../attributes/gambar-profil.png'

class Comment extends React.Component{
    render(){
        return(
            <div className="border-t border-slate-300 mt-5">
                <div className="flex no-wrap mt-3 ml-6">
                <img src={this.props.image} alt="" className='w-fixed h-4/5'/>
                    <caption className='grid grid-flow-row auto-rows-max ml-5 justify-items-start'>
                        <span className='text-tulisan'>{this.props.nama}</span>
                        <span className="text-sm text-tulisan-light">{this.props.comment}</span>
                    </caption>
                </div>
            </div>
        )
    }
}

export default Comment
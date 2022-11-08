import Profil from '../attributes/gambar-profil.png'
import React from 'react'


class Thread  extends React.Component {
    render () {
        return (
            <div className="border-t border-slate-300 mt-5">
            <div className="continer grid grid-flow-row auto-rows-max  ml-6 mt-2">
                <div className="profile&caption flex items-center">
                    <img src={Profil} alt="" className='w-fixed h-4/5'/>
                    <caption className='grid grid-flow-row auto-rows-max ml-5 justify-items-start'>
                        <span className='text-tulisan'>{this.props.nama}</span>
                        <span className="text-sm text-tulisan-light">{this.props.hastag}</span>
                    </caption>
                </div>
                <div className="content grid grid-flow-row auto-rows-max mt-2">
                    <span className='text-tulisan'>{this.props.title}</span>
                    <span className='text-xs text-tulisan-light'>{this.props.desc}</span>
                </div>
            </div>
        </div>
        )
    }
}

export default Thread
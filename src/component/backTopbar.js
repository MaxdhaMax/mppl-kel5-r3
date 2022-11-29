import ArrowKiri from '../attributes/arrow-kiri.png'
import { Link } from "react-router-dom";
import React from 'react';

// dibikin class
export default class backTopbar extends React.Component {
    render(){
        return (
            <div className='flex text-tulisan ml-5 pt-5 pb-5 items-center'>
                <Link to="/redirect"><img src={ArrowKiri} alt="" className='h-4/5'/></Link>
                <span className='text-2xl ml-28'>{this.props.judul}</span>
            </div>
        )
    }
}
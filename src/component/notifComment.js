import CommentSesudah from '../attributes/comment-sesudah.png'
import profileLiked from '../attributes/profileliked.png'
import React from 'react'

class NotifLiked extends React.Component {
    render() {
        return (
            <div className="container bg-background flex justify-center">
            <div className="border border-slate-300 flex items-center no-wrap p-3 w-10/12 rounded-md mt-5 text-tulisan">
                <img src={CommentSesudah} alt="" className='w-1/8 h-2/5 ml-2' />
                <div className="profile-caption ml-3">
                    <img src={profileLiked} alt="" />
                    <span className=''>{this.props.name} replied to your thread</span>
                </div>
            </div>
        </div>
        )
    }
}

export default NotifLiked
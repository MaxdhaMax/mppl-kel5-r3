import React from 'react'
import NotifComment from './notifComment'
import NotifLiked from './notifLiked'
import NotifDislike from './notifdisliked'


class notifComponent extends React.Component {
    loadComponent() {
        switch (this.props.type) {
            case 'likes' :
                return <NotifLiked name={this.props.name}/>;
            case 'dislikes' :
                return <NotifDislike name={this.props.name}/>
            case 'comment' :
                return <NotifComment name={this.props.name}/>
            default:
                return 0
        }
    }

    render(){
        return (
            <div>
                {this.loadComponent()}
            </div>
        )
    }
}

export default notifComponent
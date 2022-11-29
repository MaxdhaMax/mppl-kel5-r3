import Comment from '../attributes/comment.png'
import ArrowUp from '../attributes/arrow-up.png'
import ArrowDown from '../attributes/arrow-down.png'
import ArrowUpSesudah from '../attributes/arrow-up-sesudah.png'
import ArrowDownSesudah from '../attributes/arrow-down-sesudah.png'
import React from 'react'


class Thread  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes : 0,
            liked : false,
            dislikes : 0,
            disliked : false
        }
    }


    render () {
        return (
            <div className="border-t border-slate-300 mt-7 bg-background">
            <div className="container grid grid-flow-row auto-rows-max  ml-6 mt-4">
                <div className="profile&caption flex items-center">
                    <img src={this.props.image} alt="" className='w-fixed h-4/5'/>
                    <caption className='grid grid-flow-row auto-rows-max ml-5 justify-items-start'>
                        <span className='text-tulisan'>{this.props.nama}</span>
                        <span className="text-sm text-tulisan-light">{this.props.hastag}</span>
                    </caption>
                </div>
                <div className="content grid grid-flow-row auto-rows-max mt-2 w-11/12">
                    <span className='text-tulisan'>{this.props.title}</span>
                    <span className='text-xs text-tulisan-light'>{this.props.desc}</span>
                </div>
                <div className="icons flex no-wrap mt-3 text-tulisan justify-around w-10/12">
                    <div className="comment flex no-wrap items-center">
                        
                        <img src={Comment} alt="" className='' />
                        <span className='text-xs ml-1'>0</span>
                    </div>
                    <div className="comment flex no-wrap items-center">
                        {
                            this.state.liked === false ? <img src={ArrowUp} alt="" className='' onClick={() => this.setState({likes: this.state.likes + 1, liked: true})} />
                            : <img src={ArrowUpSesudah} alt="" onClick={() => this.setState({likes: this.state.likes - 1, liked: false})} />
                        }
                        <span className='text-xs ml-1'>{this.state.likes}</span>
                    </div>
                    <div className="comment flex no-wrap items-center">
                        {
                            this.state.disliked === false ? <img src={ArrowDown} alt="" className='' onClick={() => this.setState({dislikes: this.state.dislikes + 1, disliked: true})} />
                            : <img src={ArrowDownSesudah} alt="" onClick={() => this.setState({dislikes: this.state.dislikes - 1, disliked: false})}/>
                        }
                        <span className='text-xs ml-1'>{this.state.dislikes}</span>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Thread
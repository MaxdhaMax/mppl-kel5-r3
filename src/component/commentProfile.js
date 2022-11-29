import React from "react"

class CommentProfile extends React.Component{
    render(){
        return(
            <div className="mt-5">
                <div className="flex no-wrap mt-3 ml-6">
                    <caption className='grid grid-flow-row auto-rows-max ml-5 justify-items-start'>
                        <span className='text-tulisan'>{this.props.nama}</span>
                        <span className="text-sm text-tulisan-light">{this.props.comment}</span>
                    </caption>
                </div>
            </div>
        )
    }
}

export default CommentProfile
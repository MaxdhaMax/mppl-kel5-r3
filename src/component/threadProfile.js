import React from 'react'


class Thread  extends React.Component {
    render () {
        return (
            <div className=" ml-7 mt-7 bg-background">
                <div className="content grid grid-flow-row auto-rows-max mt-2 w-11/12">
                    <span className='text-tulisan'>{this.props.title}</span>
                    <span className='text-xs text-tulisan-light mt-2'>{this.props.desc}</span>
                </div>
            </div>
        )
    }
}

export default Thread
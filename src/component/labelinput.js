import React from 'react'

class labelInput extends React.Component {
    render(){
        return(
            <label class="block mt-5">
                <span class="block text-xl text-tulisan">{this.props.title}</span>
                <input type={this.props.type} name={this.props.name} class="mt-4 px-3 py-1 bg-background text-tulisan border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-11/12 rounded-md sm:text-sm focus:ring-1"  />
            </label>
        )
    }
}

export default labelInput
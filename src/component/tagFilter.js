import React from "react";

class TagFilter extends React.Component {
    render() {
        return (
            <div className="py-2 px-2 border border-slate-300 bg-background text-tulisan mt-5 rounded-md">
                {this.props.tags}
            </div>
        )
    }
}

export default TagFilter
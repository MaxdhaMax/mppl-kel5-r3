import BackTopbar from "../component/backTopbar"
import React from "react"
import { useState } from "react"

const Search = () => {

    let [Tags, setTags] = useState("")

    const handleChange = (event) => {
        setTags(event.target.value);
    }

    return (
        <div className="bg-background">
            <BackTopbar/>
            <div className=" flex flex-wrap justify-center text-tulisan">
            <input type="text" name="keyword" class="mt-4 px-3 py-1 bg-background text-tulisan border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-11/12 rounded-md sm:text-sm focus:ring-1" placeholder="Enter Keyword..." />
            <div className="Tags basis-full flex flex-wrap ml-5 mt-5">
                <span className="text-xl">Tags</span>
                {/* list tags */}
                {/* transfer input jadi tags */}
                <input type="text" name="tags" class="mt-4 px-3 py-1 bg-background text-tulisan border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-11/12 rounded-md sm:text-sm focus:ring-1" onChange={handleChange} placeholder="Search Tag" />
            </div>
            </div>
        </div>
    )
}


export default Search
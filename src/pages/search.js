import BackTopbar from "../component/backTopbar"
import React from "react"
import TagFilter from "../component/tagFilter"
import { useState } from "react"


const Search = () => {

    const [tags, setTags] = useState('');
    const [updated, setUpdated] = useState('');

    const handleChange = (event) => {
        setTags(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          // 👇 Get input value
          setUpdated(tags);
        }
      };

      return (
        <div className="bg-background h-screen">
            <BackTopbar judul="Filter"/>
            <div className=" flex flex-wrap justify-center text-tulisan">
            <input type="text" name="keyword" class="mt-4 px-3 py-1 bg-background text-tulisan border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-11/12 rounded-md sm:text-sm focus:ring-1" placeholder="Enter Keyword..." />
            <div className="Tags basis-full flex flex-wrap ml-5 mt-5">
                <span className="text-xl basis-full">Tags</span>
                {/* list tags */}
                {/* transfer input jadi tags */}
                {
                    <TagFilter tags={updated}/>
                }
                <div className="basis-full">
                <input type="text" name="tags" class="mt-4 px-3 py-1 bg-background text-tulisan border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-11/12 rounded-md sm:text-sm focus:ring-1" onChange={handleChange} onKeyDown={handleKeyDown} placeholder="Search Tag" />
                </div>
            </div>
            <div className="button flex justify-end basis-full">
                <button className='mr-8 mt-10 align-items-end text-tulisan inline-block px-6 py-2 border border-slate-300 font-medium text-xs  uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-1'>Search</button>
            </div>
            </div>
        </div>
    )
}


export default Search
import Back from '../attributes/back.png'
import { Link } from "react-router-dom";

const signUp = () => {
    return (
        <div className='bg-background h-screen pt-3'>
            <header className=' mt-3 ml-6'>
                <Link to = "/" className='flex no-wrap'>
                <img src={Back} alt="" className='mr-5'/>
                <span className='text-tulisan text-md'>Sign Up</span>
                </Link>
                
                </header>
            <section className='flex flex-wrap justify-end'>
                
                
                <form className='basis-full mt-10 ml-6'>
                    <label class="block">
                        <span class="block text-xl text-tulisan">
                        NIM
                        </span>
                        <input type="text" name="text" class="mt-3 px-3 py-1 bg-background text-tulisan border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-11/12 rounded-md sm:text-sm focus:ring-1"  />
                    </label>
                    <label class="block mt-5">
                        <span class="block text-xl text-tulisan">
                        Email
                        </span>
                        <input type="email" name="email" class="mt-3 px-3 py-1 bg-background text-tulisan border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-11/12 rounded-md sm:text-sm focus:ring-1"  />
                    </label>
                    <label class="block mt-5">
                        <span class="block text-xl text-tulisan">
                        Email
                        </span>
                        <input type="text" name="text" class="mt-3 px-3 py-1 bg-background text-tulisan border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-11/12 rounded-md sm:text-sm focus:ring-1"  />
                    </label>
                    <label class="block mt-5">
                        <span class="block text-xl text-tulisan">
                        Password
                        </span>
                        <input type="text" name="text" class="mt-3 px-3 py-1 bg-background text-tulisan border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-11/12 rounded-md sm:text-sm focus:ring-1"  />
                    </label>
                    <label class="block mt-5">
                        <span class="block text-xl text-tulisan">
                        Retype Password
                        </span>
                        <input type="text" name="text" class="mt-3 px-3 py-1 bg-background text-tulisan border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-11/12 rounded-md sm:text-sm focus:ring-1"  />
                    </label>
                </form>
                <Link to="verify"><button className='mr-8 mt-10 text-tulisan inline-block px-6 py-2 border border-slate-300 font-medium text-xs  uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-1'>Sign Up</button></Link>
            </section>
        </div>
    )
}

export default signUp
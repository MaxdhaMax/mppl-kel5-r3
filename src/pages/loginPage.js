import Logo from '../logo.png'
import Pattern from '../pattern.png'

const loginPage = () => {
    return (
        <div>
            <section className='bg-background w-cover h-cover flex flex-wrap justify-center '>
                <img src={Logo}  alt="" className='mt-24'/>
                <form className='basis-full mt-10 ml-6'>
                    <label class="block">
                        <span class="block text-xl text-tulisan">
                        Username
                        </span>
                        <input type="email" name="email" class="mt-4 px-3 py-1 bg-background text-tulisan border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-11/12 rounded-md sm:text-sm focus:ring-1"  />
                    </label>
                    <label class="block mt-10">
                        <span class="block text-xl text-tulisan">
                        Password
                        </span>
                        <input type="email" name="email" class="mt-4 px-3 py-1 bg-background text-tulisan border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-11/12 rounded-md sm:text-sm focus:ring-1"  />
                    </label>
                </form>
                <caption className='mt-14 flex align-items-start'>
                    <span className='text-tulisan text-sm pr-10'>Don't have any account yet?
                    <br></br> Sign Up
                    </span>
                    <button className='text-tulisan inline-block px-6 py-2 border-2 border-slate-300 font-medium text-xs  uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-1'>Login</button>
                </caption>
                <img src={Pattern} alt="" className='mt-28'/>
            </section>
        </div>
    )
}

export default loginPage
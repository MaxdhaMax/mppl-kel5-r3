import { Link } from "react-router-dom"


const Verify = () => {
    return (
        // Pake Grid
        <div>
            <section className='bg-background h-screen grid grid-flow-row auto-rows-max place-items-center text-tulisan'>
                <span className="text-2xl mt-8">Sign Up</span>
                <span className="text-md mt-6"> Please enter the verification code from your E-mail </span>
                <input type="password" name="password" class="mt-4 px-3 py-4 bg-background text-tulisan border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-6/12 rounded-md sm:text-sm focus:ring-1"  />
                <button className='mt-4 text-tulisan inline-block px-6 py-2 border border-slate-300 font-medium text-xs  uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-1'>Verify</button>
                <span className="text-md mt-6"> Didn't receive any email? </span>
                <Link to="/resend"> <span className="text-md"> Resend email</span></Link>
            </section> 
        </div>
    )
}

export default Verify
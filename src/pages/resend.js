const Resend = () => {
    return(
        <div>
            <section className="bg-background h-screen text-tulisan flex flex-col">
                <title className="flex justify-center">
                    <span className="text-2xl mt-10">Resend Email</span>
                </title>
                
                <label class="mt-10 ml-5">
                    <span class="block text-lg">
                    New Email
                    </span>
                    <input type="email" name="email" class="mt-3 px-3 py-1 bg-background text-tulisan border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-11/12 rounded-md sm:text-sm focus:ring-1"  />
                </label>
                <div className="flex justify-end mr-8 mt-10">
                <button className='mt-4 text-tulisan inline-block px-6 py-2 border border-slate-300 font-medium text-xs  uppercase rounded hover:bg-black hover:bg-opacity-5 w-3/12 focus:outline-none focus:ring-1'>Verify</button>
                </div>
            </section>
        </div>
    )
}
export default Resend
import LabelInput from "../component/labelinput"
import { Link } from "react-router-dom";

const Resend = () => {
    return(
        <div>
            <section className="bg-background h-screen text-tulisan flex flex-col">
                <title className="flex justify-center">
                    <span className="text-2xl mt-10">Resend Email</span>
                </title>
                <form action="" className="mt-4 ml-6">
                    <LabelInput title="New Email" type="email" name="email"/>
                </form>
                <div className="flex justify-end mr-8 mt-10">
                <Link to="/"> <button className='mt-4 text-tulisan inline-block px-6 py-2 border border-slate-300 font-medium text-xs  uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-1'>Verify</button></Link>
                </div>
            </section>
        </div>
    )
}
export default Resend
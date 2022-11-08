import Logo from '../logo.png'
import Pattern from '../pattern.png'
import { Link } from "react-router-dom";
import LabelInput from '../component/labelinput';

const loginPage = () => {
    return (
        <div>
            <section className='bg-background w-cover h-cover flex flex-wrap justify-center '>
                <img src={Logo}  alt="" className='mt-24'/>
                <form className='basis-full mt-10 ml-6'>
                    <LabelInput title="Username" type="text" name="username"/>
                    <LabelInput title="Password" type="password" name="password"/>
                </form>
                <caption className='mt-14 flex align-items-start'>
                    <span className='text-tulisan text-sm pr-10'>Don't have any account yet?
                    <br></br> <Link to = "sign-up">Sign Up</Link>
                    </span>
                    <Link to="home"><button className='text-tulisan inline-block px-6 py-2 border border-slate-300 font-medium text-xs  uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-1'>Login</button></Link>
                </caption>
                <img src={Pattern} alt="" className='mt-28'/>
            </section>
        </div>
    )
}

export default loginPage
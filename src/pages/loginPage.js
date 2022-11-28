import Logo from '../logo.png'
import Pattern from '../pattern.png'
import { Link } from "react-router-dom";
import LabelInput from '../component/labelinput';

const loginPage = () => {
    return (
        <div>
            <section className='bg-background w-screen h-screen flex flex-wrap justify-center '>
                <img src={Logo}  alt="" className='mt-24 w-5/12 h-1/4'/>
                <form className='basis-full ml-6'>
                    <LabelInput title="Username" type="text" name="username"/>
                    <LabelInput title="Password" type="password" name="password"/>
                </form>
                <caption className='flex align-items-start z-10'>
                    <span className='text-tulisan text-sm pr-10'>Don't have any account yet?
                    <br></br> <Link to = "/sign-up">Sign Up</Link>
                    </span>
                    <Link to="home"><button className='text-tulisan inline-block px-6 py-2 border border-slate-300 font-medium text-xs  uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-1  cursor-pointer'>Login</button></Link>
                </caption>
                <img src={Pattern} alt="" className='fixed bottom-0'/>
            </section>
        </div>
    )
}

export default loginPage
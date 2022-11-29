import BackTopbar from "../component/backTopbar"
import LabelInput from "../component/labelinput"
import Camera from '../attributes/camera.png'
import Image from '../attributes/image.png'
import Link from '../attributes/link.png'
import Files from '../attributes/files.png'

const createThread = () => {
    return (
        <div className="bg-background h-screen">
            <BackTopbar judul="Create Thread"/>
            <form action="" className="mt-5 ml-6">
                <LabelInput title="Title" type="text" name="title"></LabelInput>
                <label class="block mt-5 ">
                    <span class="block text-xl text-tulisan">Description</span>
                    <textarea type="text" name="text" class="  mt-4 h-32 px-3 py-3 bg-background text-tulisan border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-11/12 rounded-md sm:text-sm focus:ring-1"/>
                    <div className="icons flex justify-start mt-3  ml-4">
                        <img src={Camera} alt="" />
                        <img src={Image} alt="" className="ml-4"/>
                        <img src={Link} alt="" className="ml-4"/>
                        <img src={Files} alt="" className="ml-4"/>
                    </div>
                </label>
                <LabelInput title="Tags" type="text" name="tags"></LabelInput>
                <div className="button flex justify-end">
                <button className='mr-8 mt-10 text-tulisan inline-block px-6 py-2 border border-slate-300 font-medium text-xs  uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-1'>Post</button>
                </div>
            </form>
        </div>
    )
}

export default createThread
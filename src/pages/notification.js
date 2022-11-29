import TopBar from "../component/topbar"
import Navbar from "../component/navbar"
import NotifComponent from "../component/notifComponent"


const notification = () => {
    return (
        <div className="container bg-background h-screen w-screen">
            <TopBar/>
            <NotifComponent type="likes" name="Maxdha"/> 
            <NotifComponent type="dislikes" name="Maxdha"/>
            <NotifComponent type="comment" name="Maxdha"/> 
            <Navbar type="notification"/> 
        </div>
    )
}

export default notification
import { Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./pages/loginPage"
import SignUp from "./pages/signUp"
import Verify from "./pages/verify"
import Resend from "./pages/resend"
import Home from "./pages/home"
import Profile from "./pages/profile"
import CreateThread from "./pages/createThread"
import Notification from "./pages/notification"
import Search from "./pages/search"

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={ <LoginPage/> } />
            <Route path="/sign-up" element={ <SignUp/> } />
            <Route path="/verify" element={ <Verify/> } />
            <Route path="/resend" element={ <Resend/> } />
            <Route path="home" element={ <Home/> } />
            <Route path="/profile" element={ <Profile/> } />
            <Route path="/create-thread" element={ <CreateThread/> } />
            <Route path="/notification" element={ <Notification/> } />
            <Route path="/redirect" element={ <Navigate to="/home" /> } />
            <Route path="/search" element={ <Search/> } />
        </Routes>
    </div>
  )
}

export default App
import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/loginPage"
import SignUp from "./pages/signUp"
import Verify from "./pages/verify"
import Resend from "./pages/resend"

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={ <LoginPage/> } />
            <Route path="sign-up" element={ <SignUp/> } />
            <Route path="sign-up/verify" element={ <Verify/> } />
            <Route path="sign-up/verify/resend" element={ <Resend/> } />
            {/* <Route path="/" element={ <Home/> } /> */}

            {/* <Route path="about" element={ <About/> } />
            <Route path="contact" element={ <Contact/> } /> */}
        </Routes>
    </div>
  )
}

export default App
import { Container } from "@mui/material"
import { AuthProvider } from "../contexts/AuthContext"
import { Route , Routes,BrowserRouter as Router } from "react-router-dom"
import Root from "../Routes/private/Root"
import LoginRoute from "../Routes/private/public/LoginRoute"
import SignupRoute from "../Routes/private/public/SignupRoute"
import Profile from "./profile/Profile"
import ProfileRoute from "../Routes/private/ProfileRoute"


function App() {

  return (

    <>
      <Router>
      <AuthProvider>
       <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/signup" element={<SignupRoute />}></Route>
        <Route path="/login" element={<LoginRoute />}></Route>
        <Route path="/profile" element={<ProfileRoute />}></Route>
       </Routes>
      </AuthProvider>
      </Router>

    </>


  )
}

export default App

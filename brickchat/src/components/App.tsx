import { Container } from "@mui/material"
import { AuthProvider } from "../contexts/AuthContext"
import { Route , Routes,BrowserRouter as Router } from "react-router-dom"
import Root from "../Routes/private/Root"
import LoginRoute from "../Routes/private/public/LoginRoute"
import SignupRoute from "../Routes/private/public/SignupRoute"
import Profile from "./profile/Profile"


function App() {

  return (

    <Container>
      <Router>
      <AuthProvider>
       <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/signup" element={<SignupRoute />}></Route>
        <Route path="/login" element={<LoginRoute />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
       </Routes>
      </AuthProvider>
      </Router>

    </Container>


  )
}

export default App

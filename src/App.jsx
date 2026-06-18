import { BrowserRouter, Routes,Route } from "react-router-dom";
import SignIn from "./Pages/Signin"
import Register from "./Pages/Register"
import RegisterStep2 from "./Pages/RegisterStep2"
import Dashboard from "./Pages/Dashboard"

function App() {


  return (
    <BrowserRouter>
    <Routes>
   <Route path="/"element={<SignIn />} />
   <Route path="/register"element={<Register/>}/>
  <Route path="/register-step2" element={<RegisterStep2 />} />
  <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

    </BrowserRouter>
  )
}

export default App;

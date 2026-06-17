import { BrowserRouter, Routes,Route } from "react-router-dom";
import SignIn from "./Pages/Signin"
import Register from "./Pages/Register"

function App() {


  return (
    <BrowserRouter>
    <Routes>
   <Route path="/"element={<SignIn />} />
   <Route path="/register"element={<Register/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App;

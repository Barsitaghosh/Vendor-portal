import leftimage from "../assets/1.webp"
import { useNavigate } from "react-router-dom"
function SignIn() {
  const navigate = useNavigate()
  return (
    <div style={{display:"flex",height:"100vh"}}>

      {/* Left Side - Image Panel */}
      <div style={{ width: "50%",height: "100vh", background: `url(${leftimage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
           <div style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    // backgroundColor: "rgba(75, 0, 130, 0.6)",
    overflow: "hidden",
    position: "relative",
  }}>

    {/* Text at Bottom ← ADD THIS INSIDE OVERLAY */}
    <div style={{
      position: "absolute",
      bottom: "40px",
      left: "30px",
      color: "white",
    }}>
      <h2 style={{color: "white", margin: 0 }}>Grow Your Business with Biye Co.</h2>
      <p style={{color: "white"}}>Join the premier network of trusted wedding professionals 
      and connect with couples planning their dream celebrations.</p>
    </div>

  </div>
        
    
        </div>
        
      

      {/* Right Side - White Card */}
      <div style={{ width: "50%",height: "100vh", backgroundColor: "white",display: "flex",
      justifyContent: "center",
       alignItems: "center", }}>
        <div style={{
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "50px 40px",
        width: "75%",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    }}>
    <h1>Sign In</h1>
    <input type="email"placeholder="Email" style={{width:"100%",padding:"10px",margin:"15px 0",borderRadius:"5px",border:"1px solid #ccc"}}/>
    <input type="password" placeholder="Password" style={{width:"100%",padding:"10px",margin:"15px 0",borderRadius:"5px",border:"1px solid #ccc"}}/>
    <button style={{width:"100%",padding:"10px",backgroundColor:"#4A90E2",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"}}>Sign In</button>
 <p style={{ textAlign: "center", marginTop: "16px", fontSize: "14px" }}>
  Don't have an account?{" "}
  <span
    onClick={() => navigate("/register")}
    style={{ color: "#4b0082", cursor: "pointer", fontWeight: "bold" }}
  >
    Register here
  </span>
</p>
  </div>
  
      </div>

     
    </div>
  );
}
export default SignIn;
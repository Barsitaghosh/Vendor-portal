import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [agreed, setAgreed] = useState(false)

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    marginBottom: "16px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
    boxSizing: "border-box",
    outline: "none",
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f3f0ff",
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "20px",
        width: "480px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
      }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <span style={{
            backgroundColor: "#f3f0ff",
            color: "#4b0082",
            padding: "6px 16px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}>
            VENDOR PORTAL
          </span>
          <h2 style={{
            color: "#3b0764",
            fontSize: "28px",
            margin: "16px 0 8px 0",
          }}>
            Create Account
          </h2>
          <p style={{ color: "#888", fontSize: "14px" }}>
            Join our network of premium wedding vendors
          </p>
        </div>

        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        {/* Select Role */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={inputStyle}
        >
          <option value="">Select Role</option>
          <option value="photographer">Photographer</option>
          <option value="caterer">Caterer</option>
          <option value="decorator">Decorator</option>
          <option value="venue">Venue</option>
        </select>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        {/* Phone */}
        <input
          type="tel"
          placeholder="Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password (min 8 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={inputStyle}
        />

        {/* Checkbox */}
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "10px",
          marginBottom: "24px",
          backgroundColor: "#f9f9f9",
          padding: "12px",
          borderRadius: "8px",
        }}>
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            style={{ marginTop: "2px", cursor: "pointer" }}
          />
          <label style={{ fontSize: "13px", color: "#555", lineHeight: "1.5" }}>
            By checking this box, I confirm that I have read and agreed to{" "}
            <span style={{ color: "#4b0082", fontWeight: "bold", cursor: "pointer" }}>
              Vendor Terms & Conditions
            </span>{" "}
            and{" "}
            <span style={{ color: "#4b0082", fontWeight: "bold", cursor: "pointer" }}>
              Privacy Policy
            </span>
          </label>
        </div>

        {/* Create Account Button */}
        <button
          onClick={() => navigate("/register-step2")}
          disabled={!agreed}
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: agreed ? "#4b0082" : "#c4b0d8",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: agreed ? "pointer" : "not-allowed",
            opacity: agreed ? 1 : 0.7,
            marginBottom: "16px",
          }}
        >
          Create Account
        </button>

        {/* Sign In Link */}
        <p style={{ textAlign: "center", fontSize: "14px", color: "#888" }}>
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            style={{ color: "#4b0082", cursor: "pointer", fontWeight: "bold" }}
          >
            Sign In
          </span>
        </p>

      </div>
    </div>
  )
}

export default Register
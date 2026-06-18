import { useState } from "react"
import { useNavigate } from "react-router-dom"

function RegisterStep2() {
  const navigate = useNavigate()
  const [businessName, setBusinessName] = useState("")
  const [regNumber, setRegNumber] = useState("")
  const [businessType, setBusinessType] = useState("service")
  const [category, setCategory] = useState("")
  const [region, setRegion] = useState("")
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

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
        width: "600px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
      }}>

        <h2 style={{ color: "#3b0764", marginBottom: "24px" }}>
          Business Details
        </h2>

        {/* Business Name */}
        <label style={{ fontSize: "12px", fontWeight: "bold", color: "#555" }}>
          BUSINESS NAME
        </label>
        <input
          type="text"
          placeholder="Business Name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "16px",
            borderRadius: "8px", border: "1px solid #ddd", 
            boxSizing: "border-box", marginTop: "6px" }}
        />

        {/* Registration Number */}
        <label style={{ fontSize: "12px", fontWeight: "bold", color: "#555" }}>
          BUSINESS REGISTRATION NUMBER (Optional)
        </label>
        <input
          type="text"
          placeholder="Optional"
          value={regNumber}
          onChange={(e) => setRegNumber(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "16px",
            borderRadius: "8px", border: "1px solid #ddd",
            boxSizing: "border-box", marginTop: "6px" }}
        />

        {/* Business Type */}
        <label style={{ fontSize: "12px", fontWeight: "bold", color: "#555" }}>
          BUSINESS TYPE
        </label>
        <div style={{ display: "flex", gap: "24px", margin: "10px 0 16px 0" }}>
          <label>
            <input
              type="radio"
              value="product"
              checked={businessType === "product"}
              onChange={(e) => setBusinessType(e.target.value)}
            /> Product
          </label>
          <label>
            <input
              type="radio"
              value="service"
              checked={businessType === "service"}
              onChange={(e) => setBusinessType(e.target.value)}
            /> Service
          </label>
        </div>

        {/* Service Category */}
        <label style={{ fontSize: "12px", fontWeight: "bold", color: "#555" }}>
          SERVICE CATEGORY
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "16px",
            borderRadius: "8px", border: "1px solid #ddd",
            boxSizing: "border-box", marginTop: "6px" }}
        >
          <option value="">Select Category</option>
          <option value="accommodation">Accommodation & Guest Stay</option>
          <option value="catering">Catering</option>
          <option value="photography">Photography</option>
          <option value="decoration">Decoration</option>
          <option value="venue">Venue</option>
        </select>

        {/* Service Region */}
        <label style={{ fontSize: "12px", fontWeight: "bold", color: "#555" }}>
          SERVICE REGION
        </label>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "16px",
            borderRadius: "8px", border: "1px solid #ddd",
            boxSizing: "border-box", marginTop: "6px" }}
        >
          <option value="">Select Region</option>
          <option value="city">City Level</option>
          <option value="state">State Level</option>
          <option value="national">National</option>
        </select>

        {/* Country and State side by side */}
        <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: "12px", fontWeight: "bold", color: "#555" }}>
              COUNTRY
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              style={{ width: "100%", padding: "12px", marginTop: "6px",
                borderRadius: "8px", border: "1px solid #ddd",
                boxSizing: "border-box" }}
            >
              <option value="">Select Country</option>
              <option value="india">India</option>
              <option value="australia">Australia</option>
              <option value="usa">USA</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: "12px", fontWeight: "bold", color: "#555" }}>
              STATE
            </label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              style={{ width: "100%", padding: "12px", marginTop: "6px",
                borderRadius: "8px", border: "1px solid #ddd",
                boxSizing: "border-box" }}
            >
              <option value="">Select State</option>
              <option value="karnataka">Karnataka</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="westbengal">West Bengal</option>
            </select>
          </div>
        </div>

        {/* City */}
        <label style={{ fontSize: "12px", fontWeight: "bold", color: "#555" }}>
          CITY
        </label>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "16px",
            borderRadius: "8px", border: "1px solid #ddd",
            boxSizing: "border-box", marginTop: "6px" }}
        />

        {/* Address */}
        <label style={{ fontSize: "12px", fontWeight: "bold", color: "#555" }}>
          ADDRESS
        </label>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "24px",
            borderRadius: "8px", border: "1px solid #ddd",
            boxSizing: "border-box", marginTop: "6px" }}
        />

        <h3 style={{ color: "#3b0764", marginBottom: "16px" }}>
          Public Contact Information
        </h3>

        {/* Phone and Email side by side */}
        <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: "12px", fontWeight: "bold", color: "#555" }}>
              PUBLIC PHONE
            </label>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ width: "100%", padding: "12px", marginTop: "6px",
                borderRadius: "8px", border: "1px solid #ddd",
                boxSizing: "border-box" }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: "12px", fontWeight: "bold", color: "#555" }}>
              EMAIL
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "12px", marginTop: "6px",
                borderRadius: "8px", border: "1px solid #ddd",
                boxSizing: "border-box" }}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={() => navigate("/dashboard")}
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#4b0082",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Complete Registration
        </button>

        {/* Back Button */}
        <p style={{ textAlign: "center", marginTop: "16px", fontSize: "14px" }}>
          <span
            onClick={() => navigate("/register")}
            style={{ color: "#4b0082", cursor: "pointer", fontWeight: "bold" }}
          >
            ← Back
          </span>
        </p>

      </div>
    </div>
  )
}

export default RegisterStep2
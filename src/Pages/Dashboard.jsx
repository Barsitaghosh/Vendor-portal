import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f3f0ff" }}>

      {/* Navbar */}
      <div style={{
        backgroundColor: "white",
        padding: "16px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}>
        <h2 style={{ color: "#4b0082", margin: 0 }}>BiyeCo</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ color: "#555" }}>Welcome, Vendor</span>
          <button
            onClick={() => navigate("/")}
            style={{
              backgroundColor: "#4b0082",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: "32px" }}>

        {/* Welcome Message */}
        <h1 style={{ color: "#3b0764", marginBottom: "8px" }}>
          Welcome Back! 👋
        </h1>
        <p style={{ color: "#888", marginBottom: "32px" }}>
          Manage your vendor profile and services here.
        </p>

        {/* Stat Cards */}
        <div style={{ display: "flex", gap: "24px", marginBottom: "32px" }}>

          {/* Card 1 */}
          <div style={{
            backgroundColor: "white",
            padding: "24px",
            borderRadius: "16px",
            flex: 1,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}>
            <p style={{ color: "#888", fontSize: "14px" }}>Total Services</p>
            <h2 style={{ color: "#4b0082", fontSize: "36px", margin: "8px 0" }}>0</h2>
          </div>

          {/* Card 2 */}
          <div style={{
            backgroundColor: "white",
            padding: "24px",
            borderRadius: "16px",
            flex: 1,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}>
            <p style={{ color: "#888", fontSize: "14px" }}>Total Orders</p>
            <h2 style={{ color: "#4b0082", fontSize: "36px", margin: "8px 0" }}>0</h2>
          </div>

          {/* Card 3 */}
          <div style={{
            backgroundColor: "white",
            padding: "24px",
            borderRadius: "16px",
            flex: 1,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}>
            <p style={{ color: "#888", fontSize: "14px" }}>Profile Status</p>
            <h2 style={{ color: "#4b0082", fontSize: "36px", margin: "8px 0" }}>50%</h2>
          </div>

        </div>

        {/* Recent Activity */}
        <div style={{
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}>
          <h3 style={{ color: "#3b0764", marginBottom: "16px" }}>
            Recent Activity
          </h3>
          <p style={{ color: "#aaa", textAlign: "center", padding: "24px 0" }}>
            No activity yet. Complete your profile to get started!
          </p>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/dashboard_css.css";

function Dashboard() {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      navigate("/");
    }
  };

  const stats = [
    { label: "Total Revenue", value: "$45,231", change: "+20.1%", positive: true, icon: "💰" },
    { label: "Active Users", value: "2,543", change: "+12.5%", positive: true, icon: "👥" },
    { label: "Projects", value: "42", change: "-3.2%", positive: false, icon: "📊" },
    { label: "Tasks Completed", value: "156", change: "+8.4%", positive: true, icon: "✓" },
  ];

  const recentActivities = [
    { action: "New project created", time: "2 minutes ago", icon: "📁" },
    { action: "Report generated", time: "1 hour ago", icon: "📄" },
    { action: "Team member added", time: "3 hours ago", icon: "👤" },
    { action: "Payment processed", time: "5 hours ago", icon: "💳" },
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            {!sidebarCollapsed && <span className="logo-text">Dashboard</span>}
          </div>
          <button 
            className="collapse-btn" 
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            aria-label="Toggle sidebar"
          >
            {sidebarCollapsed ? "→" : "←"}
          </button>
        </div>

        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            <span className="nav-icon">📊</span>
            {!sidebarCollapsed && <span className="nav-label">Overview</span>}
          </button>
          <button 
            className={`nav-item ${activeTab === "analytics" ? "active" : ""}`}
            onClick={() => setActiveTab("analytics")}
          >
            <span className="nav-icon">📈</span>
            {!sidebarCollapsed && <span className="nav-label">Analytics</span>}
          </button>
          <button 
            className={`nav-item ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            <span className="nav-icon">📁</span>
            {!sidebarCollapsed && <span className="nav-label">Projects</span>}
          </button>
          <button 
            className={`nav-item ${activeTab === "tasks" ? "active" : ""}`}
            onClick={() => setActiveTab("tasks")}
          >
            <span className="nav-icon">✓</span>
            {!sidebarCollapsed && <span className="nav-label">Tasks</span>}
          </button>
          <button 
            className={`nav-item ${activeTab === "settings" ? "active" : ""}`}
            onClick={() => setActiveTab("settings")}
          >
            <span className="nav-icon">⚙️</span>
            {!sidebarCollapsed && <span className="nav-label">Settings</span>}
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-sidebar-btn" onClick={handleLogout}>
            <span className="nav-icon">🚪</span>
            {!sidebarCollapsed && <span className="nav-label">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-content">
            <div>
              <h1 className="page-title">Welcome back, User</h1>
              <p className="page-subtitle">Here's what's happening with your projects today</p>
            </div>
            <div className="header-actions">
              <button className="icon-btn notification-btn">
                <span className="notification-badge">3</span>
                🔔
              </button>
              <div className="user-avatar">U</div>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <p className="stat-label">{stat.label}</p>
                <h3 className="stat-value">{stat.value}</h3>
                <p className={`stat-change ${stat.positive ? "positive" : "negative"}`}>
                  {stat.change} from last month
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Charts and Activity Grid */}
        <section className="content-grid">
          {/* Chart Card */}
          <div className="chart-card">
            <div className="card-header">
              <h3 className="card-title">Revenue Overview</h3>
              <select className="time-selector">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="chart-placeholder">
              <div className="chart-bars">
                <div className="bar" style={{ height: "60%" }}></div>
                <div className="bar" style={{ height: "80%" }}></div>
                <div className="bar" style={{ height: "45%" }}></div>
                <div className="bar" style={{ height: "90%" }}></div>
                <div className="bar" style={{ height: "70%" }}></div>
                <div className="bar" style={{ height: "85%" }}></div>
                <div className="bar" style={{ height: "95%" }}></div>
              </div>
              <div className="chart-labels">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="activity-card">
            <div className="card-header">
              <h3 className="card-title">Recent Activity</h3>
              <button className="view-all-btn">View All →</button>
            </div>
            <div className="activity-list">
              {recentActivities.map((activity, index) => (
                <div key={index} className="activity-item" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                  <div className="activity-icon">{activity.icon}</div>
                  <div className="activity-content">
                    <p className="activity-action">{activity.action}</p>
                    <p className="activity-time">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="quick-actions">
          <h3 className="section-title">Quick Actions</h3>
          <div className="action-buttons">
            <button className="action-btn">
              <span className="action-icon">➕</span>
              Create Project
            </button>
            <button className="action-btn">
              <span className="action-icon">📝</span>
              New Task
            </button>
            <button className="action-btn">
              <span className="action-icon">👥</span>
              Invite Team
            </button>
            <button className="action-btn">
              <span className="action-icon">📊</span>
              Generate Report
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
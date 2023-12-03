import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (    
    <div className="dashboard">
        <input type="checkbox" id="check"/>
        <header>
        <label for="check">
            <i class="fas fa-bars" id="sidebar_btn"></i>
        </label>
        <div class="left_area">
            <h3>Coding <span>Snow</span></h3>
        </div>
        <div class="right_area">
            <a href="#" class="logout_btn">Logout</a>
        </div>
        </header>
        <div class="sidebar">
        <div class="profile-div">
            <img src="https://picsum.photos/id/166/200/200" class="profile_image" alt=""/>
            <h4>Jessica</h4>
        </div>
        <a href="#">
            <i class="fas fa-desktop"></i>
            <span>Dashboard</span>
        </a>
        <a href="#">
            <i class="fas fa-cogs"></i>
            <span>Component</span>   
        </a>
        <a href="#">
            <i class="fas fa-table"></i>
            <span>Tables</span>   
        </a>
        <a href="#">
            <i class="fas fa-th"></i>
            <span>Forms</span>  
        </a>
        <a href="#">
            <i class="fas fa-info-circle"></i>
            <span>About</span>  
        </a>
        <a href="#">
            <i class="fas fa-sliders-h"></i>
            <span>Settings</span>  
        </a>
        </div>
        <div class="content">
        </div>
    </div>
    );
}

export default Dashboard;
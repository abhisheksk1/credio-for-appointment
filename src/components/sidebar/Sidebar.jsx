import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css";
import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Request from "../request-page/Request"
import HomePage from "../home-page/HomePage";
import Schedule from "../schedule-page/Schedule"
import Checkout from "../checkout-page/Checkout"

const Sidebar = () => {
    return (
        <Router>
           <Route path="/" component={HomePage} />
            <Route path="/requests" component={Request} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/checkout" component={Checkout} />
            
        <div>
            <div className="card sidebar-card">
                <div className="col">
                    <div className="text-center">
                        <div className="sidebar-item">
                            <Link to="/">
                            <div className="item1">
                                <i class="fas fa-home sidebar-icon"></i>
                                <span className="sidebar-text">Home</span>
                            </div>
                            </Link>
                            <div className="item2">
                                <i class="fas fa-book sidebar-icon"></i>
                                <span className="sidebar-text">Menu</span>
                            </div>
                            <div className="item3">
                                <i class="far fa-bookmark sidebar-icon"></i>
                                <span className="sidebar-text">Orders</span>
                            </div>
                            <div className="item4">
                                <i class="fas fa-tv sidebar-icon"></i>
                                <span className="sidebar-text">Point of Sale</span>
                            </div>
                            <Link to="/schedule">
                            <div className="item5">
                                <i class="fas fa-home sidebar-icon"></i>
                                <span className="sidebar-text">Schedule</span>
                            </div>
                            </Link>
                            <Link to="/requests">
                            <div className="item6">
                                <i class="fas fa-sliders-h sidebar-icon"></i>
                                <span className="sidebar-text">Request</span>
                            </div>
                            </Link>
                            <Link to="/checkout">
                            <div className="item7">
                                <i class="fas fa-home sidebar-icon"></i>
                                <span className="sidebar-text">Checkout</span>
                            </div>
                            </Link>
                            <div className="item8">
                                <i class="far fa-clock sidebar-icon"></i>
                                <span className="sidebar-text">TimeCards</span>
                            </div>
                            <div className="item9">
                                <i class="fas fa-user sidebar-icon" style={{
                                    color: "black"
                                }}></i>
                                <span className="sidebar-text">Employees</span>
                            </div>
                            <div className="item10">
                                <i class="fas fa-cog sidebar-icon"></i>
                                <span className="sidebar-text">Settings</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Router>
    )
}

export default Sidebar

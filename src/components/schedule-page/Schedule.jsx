import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./schedule.css";
import influ from "../../image/influ.png"

const Schedule = () => {
    return (
        <div>
            <div className="container-fluid schedule-page">
                <div className="schedule-header">
                    <h1>Schedule</h1>
                    <button className="btn btn--light">
                        <i class="fas fa-calendar"></i>
                        Month
                    </button>
                </div>
                <div className="card month-card">
                    <div className="month-name">OCT 2021</div>
                    <div className="day-name">
                        <span className="sun">Sun</span>
                        <span className="mon">Mon</span>
                        <span className="tue">Tue</span>
                        <span className="wed">Wed</span>
                        <span className="thu">Thu</span>
                        <span className="fri">Fri</span>
                        <span className="sat">Sat</span>
                    </div>
                    <div className="date-1-7">
                        <span className="sun">1</span>
                        <span className="mon">2</span>
                        <span className="tue">3</span>
                        <span className="wed">4</span>
                        <span className="thu">5</span>
                        <span className="fri">6</span>
                        <span className="sat">7</span>
                    </div>
                    <div className="date-8-14">
                        <span className="sun">8</span>
                        <span className="mon">9</span>
                        <span className="tue">10</span>
                        <span className="wed">11</span>
                        <span className="thu">12</span>
                        <span className="fri">13</span>
                        <span className="sat">14</span>
                    </div>
                    <div className="date-15-21">
                        <span className="sun">15</span>
                        <span className="mon">16</span>
                        <span className="tue">17</span>
                        <span className="wed">18</span>
                        <span className="thu">19</span>
                        <span className="fri">20</span>
                        <span className="sat">21</span>
                    </div>
                    <div className="date-22-28">
                        <span className="sun">22</span>
                        <span className="mon">23</span>
                        <span className="tue">24</span>
                        <span className="wed">25</span>
                        <span className="thu">26</span>
                        <span className="fri">27</span>
                        <span className="sat">28</span>
                    </div>
                    <div className="date-29-31">
                        <span className="sun">29</span>
                        <span className="mon">30</span>
                        <span className="tue">31</span>
                        
                    </div>
                    <div className="h1"></div>
                    <div className="h2"></div>
                    <div className="h3"></div>
                    <div className="h4"></div>
                    <div className="h5"></div>
                    <div className="v1"></div>
                    <div className="v2"></div>
                    <div className="v3"></div>
                    <div className="v4"></div>
                    <div className="v5"></div>
                    <div className="v6"></div>
                </div>
                <div className="schedule-rightbar">
                    <div className="card inner-card">
                        <h3 className="card-header">Details</h3>
                        <div className="user-detail">
                            <i class="fas fa-user"></i>
                            <div className="username">
                                <div className="name">Christo Josh</div>
                                <div className="phone">012-9983457123</div>
                            </div>
                        </div>
                        <div className="date-time">
                            <div className="date">Monday, 11 OCT</div>
                            <div className="current-time">4:30pm</div>
                        </div>
                        <div className="purpose">
                            <div className="date">Haircut</div>
                            <div className="current-time" style={{
                                paddingLeft: "9.5rem"
                            }}>299</div>
                        </div>
                        <span className="done">Done</span>
                        <span className="assigned">Assigned to:</span>
                        <div className="assigned-detail">
                            <img src={influ} alt="" className="influ-image" />
                            <div className="assigned-person-name">
                                <span className="name">Lema</span>
                                <span className="profession">Hairdresser</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./request.css";
import influ from "../../image/influ.png";

const Request = () => {
    return (
        <div>
            <div className="container-fluid request-page">
                <div className="request-header">
                    <h1>Request</h1>
                    <i class="fas fa-sort-amount-down"></i>
                    <span className="filter">Filters</span>
                </div>
                <div className="pt-5 request-detail">
                    <span className="customers">Customers</span>
                    <span className="staff">Staff</span>
                    <span className="service">Service</span>
                    <span className="schedule">Scheduled for</span>
                    <span className="price">Price</span>
                </div>
                <div className="today pt-2">Today</div>
                <div className="request-detail-row">
                    <i class="fas fa-user customer-icon"></i>
                    <div className="customer-detail">
                        <div className="name">Christo Josh</div>
                        <span className="time" style={{
                            fontSize: "18px"
                        }}>8:33pm</span>
                    </div>
                    <img src={influ} alt="" className="staffImg" />
                    <span className="service-detail">
                        Body Massage Wave Haircut
                    </span>
                    <div className="schedule-detail">
                        <div className="name">21 OCT, 2021</div>
                        <span className="time" style={{
                            fontSize: "18px"
                        }}>9:00pm</span>
                    </div>
                    <div className="price-detail">
                        <div className="name">199</div>
                        <span className="time" style={{
                            fontSize: "18px",
                            color: "skyblue"
                        }}>prepaid</span>
                    </div>
                    <div className="confirmation-button">
                        <button className="btn btn-primary">Accept</button>
                        <button className="btn btn-light">Decline</button>
                    </div>
                </div>

                <div className="today pt-5">WEDNESDAY, 17 OCT</div>
                <div className="request-detail-row">
                    <i class="fas fa-user customer-icon"></i>
                    <div className="customer-detail">
                        <div className="name">Christo Josh</div>
                        <span className="time" style={{
                            fontSize: "18px"
                        }}>8:33pm</span>
                    </div>
                    <img src={influ} alt="" className="staffImg" />
                    <span className="service-detail">
                        Body Massage Wave Haircut
                    </span>
                    <div className="schedule-detail">
                        <div className="name">21 OCT, 2021</div>
                        <span className="time" style={{
                            fontSize: "18px"
                        }}>9:00pm</span>
                    </div>
                    <div className="price-detail">
                        <div className="name">199</div>
                        <span className="time" style={{
                            fontSize: "18px",
                            color: "skyblue"
                        }}>prepaid</span>
                    </div>
                    <div className="confirmation-button">
                        <button className="btn btn-primary">Accept</button>
                        <button className="btn btn-light">Decline</button>
                    </div>
                </div>

                <div className="request-detail-row pt-4">
                    <i class="fas fa-user customer-icon"></i>
                    <div className="customer-detail">
                        <div className="name">Christo Josh</div>
                        <span className="time" style={{
                            fontSize: "18px"
                        }}>8:33pm</span>
                    </div>
                    <img src={influ} alt="" className="staffImg" />
                    <span className="service-detail">
                        Body Massage Wave Haircut
                    </span>
                    <div className="schedule-detail">
                        <div className="name">21 OCT, 2021</div>
                        <span className="time" style={{
                            fontSize: "18px"
                        }}>9:00pm</span>
                    </div>
                    <div className="price-detail">
                        <div className="name">199</div>
                        <span className="time" style={{
                            fontSize: "18px",
                            color: "skyblue"
                        }}>prepaid</span>
                    </div>
                    <div className="confirmation-button">
                        <button className="btn accepted">Accepted</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Request

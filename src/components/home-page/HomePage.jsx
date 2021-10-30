import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import N from "../../image/N.png";
import influ from "../../image/influ.png";

const HomePage = () => {
    return (
        <div>
            <div className="px-5 container-fluid home-page">
                <h1 className="header">Good morning, Jacob!</h1>
                <div className="pt-5 row header-card-container">
                    <div className=" pt-5 col-md-3 col-sm-12 col-xs-12">
                        <div className="card header-card">
                            <div className="pl-5 card-body">
                                <h4 className="card-title">247</h4>
                                <span className="card-text">Total requests</span>
                            </div>
                        </div>
                    </div>
                    <div className=" pt-5 col-md-3 col-sm-12 col-xs-12">
                        <div className="card header-card">
                            <div className="pl-5 card-body">
                                <h4 className="card-title">24</h4>
                                <span className="card-text">Pending Sessions</span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 col-md-3 col-sm-12 col-xs-12">
                        <div className="card header-card">
                            <div className="pl-5 card-body">
                                <h4 className="card-title">24</h4>
                                <span className="card-text">Completed Sessions</span>
                            </div>
                        </div>
                    </div>
                    <div className=" pt-5 col-md-3 col-sm-12 col-xs-12">
                        <div className="card header-card">
                            <div className="pl-5 card-body">
                                <h4 className="card-title">24</h4>
                                <span className="card-text">Cancelled Sessions</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-5 row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="card middle-card">
                            <div className="card-body">
                                <h6>Sales Overview</h6>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="text-in-column">
                                            <span className="sales-text">Total Sessions</span>
                                            <span className="text-no">780</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="middle-card-column">
                                            <i class="fas fa-signal middle-card-icon"></i>
                                            <div className="text-in-column">
                                                <span className="sales-text">Revenue</span>
                                                <span className="text-no">11530</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-5">
                                    <div className="col col-md-6">
                                        <div className="middle-card-column">
                                            <img className="middle-card-img" src={N} alt="" />
                                            <div className="text-in-column">
                                                <span className="sales-text">Cost</span>
                                                <span className="text-no">11530</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="text-in-column">
                                            <span className="sales-text">Profit</span>
                                            <span className="text-no">11530</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="card middle-card">
                            <div className="card-body">
                                <h6>Inventory Summary</h6>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="middle-card-column">
                                            <i class="fas fa-cart-plus middle-card-icon"></i>
                                            <div className="text-in-column">
                                                <span className="sales-text">No of Purchase</span>
                                                <span className="text-no">780</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="middle-card-column">
                                            <i class="fas fa-signal middle-card-icon"></i>
                                            <div className="text-in-column">
                                                <span className="sales-text">Revenue</span>
                                                <span className="text-no">11530</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-5">
                                    <div className="col col-md-6">
                                        <div className="middle-card-column">
                                            <img className="middle-card-img" src={N} alt="" />
                                            <div className="text-in-column">
                                                <span className="sales-text">Cost</span>
                                                <span className="text-no">11530</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="text-in-column">
                                            <span className="sales-text">Profit</span>
                                            <span className="text-no">11530</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="row pt-5">
                    <div className="col-md-12 col-sm-12">
                        <div className="card footer-card">
                            <div className="card-body">
                                <div className="footer-card-header">
                                    <h4 className="ongoing">Ongoing</h4>
                                    <h4 className="other-appointment">Other appointments</h4>
                                </div>
                                <div className="row pt-5 footer-detail">
                                    <i class="fas fa-user footer-icon"></i>
                                    <div className="person-detail1">
                                        <span className="name">Christo Josh</span>
                                        <span className="time">8:30pm</span>
                                    </div>
                                    <img src={influ} alt="" className="influ" />
                                    <div className="person-work">
                                        <span>Body massage Wave Haircut</span>
                                    </div>
                                    <div className="person-detail2">
                                        <span className="name">21 OCT, 2021</span>
                                        <span className="time">9:00pm</span>
                                    </div>
                                    <div className="person-detail3">
                                        <span className="name">299</span>
                                        <span className="time">prepaid</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default HomePage

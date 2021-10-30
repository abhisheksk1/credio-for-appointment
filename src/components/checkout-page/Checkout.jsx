import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./checkout.css";
import influ from "../../image/influ.png";

const Checkout = () => {
    return (
        <div>
            <div className="container-fluid checkout-page">
                <h1 className="checkout-header">Checkout</h1>
                <div className="card outer-card">
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
                <div className="rightbar">
                    <h1 className="payment-header">Payment Details</h1>
                    <span className="payment-footer">
                        Complete your session by Providing payments details.
                    </span>
                    <div className="card-details pt-4">
                        <label for="basic-url" className="label">Card details*</label>
                        <div class="input-group pt-2 mb-3">
                            <input 
                                type="text" 
                                class="form-control" 
                                id="basic-url" 
                                aria-describedby="basic-addon3"
                                placeholder="Card Number"
                            />
                        </div>
                    </div>

                    <div className="card-details pt-4">
                        <label for="basic-url" className="label">Card Holder's Name*</label>
                        <div class="input-group pt-2 mb-3">
                            <input 
                                type="text" 
                                class="form-control" 
                                id="basic-url" 
                                aria-describedby="basic-addon3"
                                placeholder="Name here"
                            />
                        </div>
                    </div>
                    <div className="card-details pt-4">
                        <label for="basic-url" className="label">Any Discount Number?</label>
                        <div class="input-group pt-2 mb-3">
                            <input 
                                type="text" 
                                class="form-control" 
                                id="basic-url" 
                                aria-describedby="basic-addon3"
                            />
                        </div>
                    </div>
                    <div className="subtotal-detail">
                        <span className="subtotal">Subtotal</span>
                        <div className="subtotal-amount">299</div>
                    </div>
                    <div className="discount-detail">
                        <span className="subtotal">Discount</span>
                        <div className="subtotal-amount">0</div>
                    </div>
                    <div className="total-detail">
                        <span className="subtotal">Total</span>
                        <div className="subtotal-amount" style={{marginLeft: "20.5rem"}}>299</div>
                    </div>
                    <button className="btn pay-now">Pay Now</button>
                    <span className="button-footer">
                        Payments are secured and encrypted
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Checkout

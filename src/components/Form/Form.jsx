import React from "react";
import { Link } from "react-router-dom";

import Button from "./../Button/Button";

import "./Form.css";

const Form = () => {
    return (
        <div className="form-container">
            <div className="btn-section">
                <Link to="/">
                    <Button text="back" />
                </Link>
            </div>
            <div className="form-section">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="text"
                            phone="phone"
                            id="phone"
                            placeholder="Number"
                        />
                    </div>

                    <div className="form-group">
                        <h5>Subscriber to Added: </h5>
                        <p>Name: Shilpa</p>
                        <p>Phone: 4687897748</p>
                    </div>

                    <Button text="add" />
                </form>
            </div>
        </div>
    );
};

export default Form;

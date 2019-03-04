import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "./../Button/Button";

import "./Form.css";

const Form = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleChange = e => {
        // set input value into state
        if (e.target.name === "name") {
            setName(e.target.value);
        } else {
            setPhone(e.target.value);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        // validate phone number
        const phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!phone.match(phoneNumber)) {
            alert("Enter valid Number");
        } else {
            // clear input text
            setName("");
            setPhone("");
        }
    };

    return (
        <div className="form-container">
            <div className="btn-section">
                <Link to="/">
                    <Button text="back" />
                </Link>
            </div>
            <div className="form-section">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            onChange={handleChange}
                            autoComplete="off"
                            value={name}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Enter Phone Number"
                            onChange={handleChange}
                            value={phone}
                            autoComplete="off"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <h5>Subscriber to Added: </h5>
                        <p>Name: {name}</p>
                        <p>Phone: {phone}</p>
                    </div>

                    <Button text="add" />
                </form>
            </div>
        </div>
    );
};

export default Form;

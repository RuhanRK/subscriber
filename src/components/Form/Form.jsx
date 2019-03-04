import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import uuid from "uuid";

import Button from "./../Button/Button";
import { setSubscriber } from "./../../actions/actions";

import "./Form.css";
import FormBox from "../FormBox/FormBox";

const Form = props => {
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
            // set input value into redux store
            props.setSubscriber({
                id: uuid(),
                name,
                phone
            });

            // clear input text after successfully submit
            setName("");
            setPhone("");

            // push back to home page
            props.history.push("/");
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
                <FormBox
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    name={name}
                    phone={phone}
                    text={"add"}
                />
            </div>
        </div>
    );
};

export default connect(
    null,
    { setSubscriber }
)(withRouter(Form));

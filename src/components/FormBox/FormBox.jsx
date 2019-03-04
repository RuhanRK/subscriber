import React from "react";
import Button from "../Button/Button";

const FormBox = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    onChange={props.handleChange}
                    autoComplete="off"
                    value={props.name}
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
                    onChange={props.handleChange}
                    value={props.phone}
                    autoComplete="off"
                    required
                />
            </div>

            <div className="form-group">
                <h5>Subscriber to Added: </h5>
                <p>Name: {props.name}</p>
                <p>Phone: {props.phone}</p>
            </div>

            <Button text={props.text} />
        </form>
    );
};

export default FormBox;

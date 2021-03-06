import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Button from "./../Button/Button";
import { selectSubscriber, updateSubscriber } from "./../../actions/actions";
import FormBox from "../FormBox/FormBox";

class UpdateForm extends Component {
    state = {
        name: "",
        phone: ""
    };

    handleChange = e => {
        // set input value into state
        if (e.target.name === "name") {
            this.setState({
                name: e.target.value
            });
        } else {
            this.setState({
                phone: e.target.value
            });
        }
    };

    componentDidMount() {
        this.props.selectSubscriber(this.props.match.params.id);
    }

    // prevent inifiite render
    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.name === this.state.name &&
            prevState.phone === this.state.phone
        ) {
            if (this.props.selectedSubscriber) {
                const subscriber = this.props.selectedSubscriber[0];
                this.setState({
                    name: subscriber.name,
                    phone: subscriber.phone
                });
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        // validate phone number
        const phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        if (!this.state.phone.match(phoneNumber)) {
            alert("Enter valid Number");
        } else {
            const updatedSubscriberInput = {
                id: this.props.match.params.id,
                name: this.state.name,
                phone: this.state.phone
            };

            // set updated input inot redux store
            this.props.updateSubscriber(updatedSubscriberInput);
            // push back to home page after edit
            this.props.history.push("/");
        }
    };

    render() {
        const { name, phone } = this.state;

        return (
            <div className="form-container">
                <div className="btn-section">
                    <Link to="/">
                        <Button text="back" />
                    </Link>
                </div>
                <div className="form-section">
                    <FormBox
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        name={name}
                        phone={phone}
                        text={"update"}
                    />
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    selectedSubscriber: state.selectedSubscriber
});

export default connect(
    mapStateToProps,
    { selectSubscriber, updateSubscriber }
)(withRouter(UpdateForm));

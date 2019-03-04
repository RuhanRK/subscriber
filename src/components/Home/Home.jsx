import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Button from "../Button/Button";
import { deleteSubscriber } from "../../actions/actions";

import "./Home.css";

const Home = ({ subscriber, deleteSubscriber }) => {
    const handleClick = id => {
        deleteSubscriber(id);
    };
    return (
        <div>
            <div className="container">
                <div className="add-section">
                    <Link to="/add">
                        <Button text="add" />
                    </Link>
                </div>
                <div className="table-section">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>phone</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {subscriber.map(subs => (
                                <tr key={subs.id}>
                                    <td>{subs.name}</td>
                                    <td>{subs.phone}</td>
                                    <td>
                                        <button
                                            onClick={() => handleClick(subs.id)}
                                            className={`btn btn-delete`}
                                        >
                                            delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// get state value from redux store
const mapStateToProps = state => ({
    subscriber: state.subscriber
});
export default connect(
    mapStateToProps,
    { deleteSubscriber }
)(Home);

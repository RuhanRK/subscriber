import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Button from "../Button/Button";

import "./Home.css";

const Home = ({ subscriber }) => {
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
                                        <Button text="delete" />
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
export default connect(mapStateToProps)(Home);

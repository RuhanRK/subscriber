import React from "react";
import "./Home.css";
import Button from "../Button/Button";

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="add-section">
                    <Button text="add" />
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
                            <tr>
                                <td>Shilpa</td>
                                <td>54548484</td>
                                <td>
                                    <Button text="delete" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default Home;

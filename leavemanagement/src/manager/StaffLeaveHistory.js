import React, { Component } from 'react';
import { Table, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import ManagerSideBar from './ManagerSideBar';
import "../common/Styles.css"

class StaffLeaveHistory extends Component {
    render() {
        const headerStyle = {
            margin: "0 0 0 10px"
        };

        const divStyle = {
            background: "#B8E2FC",
            width: "auto",
            margin: "0 0 0 0",
            padding: "25px 0 25px 20px",
            borderRadius: "5px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        };

        return (
            <div className="menuContainer">
                <div className="menu">
                    <div>
                        <ManagerSideBar />
                    </div>
                    <div className="content">
                        <div style={divStyle}>
                            <span className="header"><h3 style={headerStyle}>Leave History</h3></span>
                        </div><br />
                        <div className="container">
                            <Table bordered responsive>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Leave Type</th>
                                        <th>Status</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StaffLeaveHistory;
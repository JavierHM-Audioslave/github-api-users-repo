import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";



/**
 * Renders the Spinner
 * @returns JSX component
 */
const SpinnerWrapper = () => {


    return (
        <Row className="mt-5 h-100">
            <Col xs="12" className="h-100 d-flex justify-content-center">
                <Spinner animation="border" variant="success" />
            </Col>
        </Row>
    );
};


export default SpinnerWrapper;
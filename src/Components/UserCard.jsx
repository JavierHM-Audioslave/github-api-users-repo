import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";



/**
 * Renders the card itself displaying information about the user
 * @param login A string indicating the username of the user
 * @param avatar An URL indicating the link to user profile picture
 * @param name A string representing the user's name
 * @param company A string representing the company's name the user works for
 * @param blog A string representing the user's blog
 * @param location A string representing the user's location
 * @param email A string indicating the user's email
 * @returns A JSX component
 */
const UserCard = ({login, avatar, name, company, blog, location, email}) => {


    return (

        <Col xs="12" md="6" lg="4" className="mb-5">
            <Card className="border border-danger">
                <Card.Img src={avatar}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>Username: {login || "N/A"}</ListGroup.Item>
                    <ListGroup.Item>Company: {company || "N/A"}</ListGroup.Item>
                    <ListGroup.Item>Blog: {blog || "N/A"}</ListGroup.Item>
                    <ListGroup.Item>Location: {location || "N/A"}</ListGroup.Item>
                    <ListGroup.Item>Email: {email || "N/A"}</ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    );
};


export default UserCard;
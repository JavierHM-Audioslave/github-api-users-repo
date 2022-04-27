import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



/**
 * Renders the card itself displaying information about a repository
 * @param userName A string representing the user's name
 * @param repoName A string representing the repository's name
 * @param repoLink An URL to the current repo in Github site
 * @param repoDescription A string representing a description about the repository
 * @returns A JSX component
 */
const RepositoryCard = ({userName, repoName, repoLink, repoDescription}) => {



    return (
        <Col xs="12" md="6" xl="4" className="mb-5">
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>{repoName}</Card.Title>
                    <Card.Text>
                        {repoDescription}
                    </Card.Text>
                    <Button href={repoLink} variant="primary" target="_blank">Repo Link</Button>
                </Card.Body>
                <Card.Footer className="text-muted">{userName}</Card.Footer>
            </Card>
        </Col>
    );
};


export default RepositoryCard;
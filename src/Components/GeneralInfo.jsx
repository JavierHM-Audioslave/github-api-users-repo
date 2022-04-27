import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserCard from "./UserCard";
import RepositoryCard from "./RepositoryCard";



/**
 * Renders general information on what information the entire site displays
 * @returns A jsx component 
 */
const GeneralInfo = () => {


    return (
        <Container>
            <Row>
                <Col xs="12" className="p-4 d-flex flex-column justify-content-center">
                    <h2 className="text-center">INFORMATION PROVIDED BY USER</h2>
                    <div className="d-flex justify-content-center my-3">
                        <UserCard login="Login-Example" avatar="https://avatars.githubusercontent.com/u/1?v=4" name="Name-Example" company="Company-Example" blog="Blog-Example" location="Location-Example" email="ejemplo@gmail.com" />
                    </div>
                </Col>
                <Col xs="12" className="p-4 d-flex flex-column justify-content-center">
                    <h2 className="text-center">INFORMATION PROVIDED BY REPO</h2>
                    <div className="d-flex justify-content-center my-3">
                        <RepositoryCard userName="Name-Example" repoName="Repo-Name" repoLink="https://github.com/leahneukirchen/coset-mirror" repoDescription="Description-Example" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};


export default GeneralInfo;
import React from "react";
import NavigationBar from "./NavigationBar";
import Container from "react-bootstrap/Container";
import GeneralInfo from "./GeneralInfo";


const Home = () => {


    return (
        <Container>
            <NavigationBar isSearchForUsers={true}/>
            <GeneralInfo/>
        </Container>
    );
};


export default Home;
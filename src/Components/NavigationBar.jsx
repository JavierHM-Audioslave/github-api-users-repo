import React, { useCallback } from "react";
import {NavLink, useHistory} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";


/**
 * Renders the navigation bar as well as the search bar the which indicates whether to search for users or user's repo
 * @param {boolean} isSearchForUsers In case the client performs a search, this parameter indicates if to search for users or to search for user's repos 
 * @returns A jsx component rendering the complete navigation bar.
 */
const NavigationBar = ({isSearchForUsers}) => {

    const history = useHistory();


    const displayUser = useCallback( e => {
        e.preventDefault();
        const input = e.target[0].value;
        isSearchForUsers ? history.push(`/users/${input}`) : history.push(`/repositories/${input}`);
    }, []);


    return (
        <Navbar expand="lg" className="my-4 bg-secondary justify-content-center" sticky="top">
            <Container>
                <NavLink to="/" className="navbar-brand fs-1 fs-lg-4 text-white">Github API</NavLink>
                <Navbar.Toggle/>
                <Navbar.Collapse className="fs-3 mt-2 mt-lg-0 ms-lg-3">
                    <Nav>
                        <NavLink data-testid="users" to="/users" className="nav-link">Users</NavLink>
                        <NavLink data-testid="repositories" to="/repositories" className="nav-link">Repositories</NavLink>
                    </Nav>
                    <Form onSubmit={ displayUser } className="ms-sm-auto mt-3 mt-lg-0">
                        <InputGroup>
                            <FormControl placeholder="Buscar"/>
                            <Button type="submit">BUSCAR</Button>
                        </InputGroup>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default NavigationBar;
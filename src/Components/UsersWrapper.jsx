import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavigationBar from "./NavigationBar";
import UserCard from "./UserCard";
import SpinnerWrapper from "./SpinnerWrapper";
import PaginationWrapper from "./PaginationWrapper";
import { urlGetUser, urlGetUsersOfAPagination } from "../Constants/links";
import useSetIndexAtBeginning from "../Hooks/useSetIndexAtBeginning";
import useFetchUsers from "../Hooks/useFetchUsers";



/**
 * Wrapper component the which executes the logic in order to decide whether to display one user card, many user cards or the spinner while it is retrieving the user information on the Github API
 * @param {boolean} isSearch Indicates if the data to be fetched is for one user or for many.
 * @returns A jsx component rendering the cards with the user's information
 */
const UsersWrapper = ({isSearch}) => {

    useSetIndexAtBeginning();
    let {isLoading, name, filteredEntities} = useFetchUsers({isSearch, userLogic: true, url1: urlGetUser, url2: urlGetUsersOfAPagination});

    

    return (
        
        <Container>
            <NavigationBar isSearchForUsers={true}/>
            
            <Row data-testid="row-representing-appearance-of-userswrapper-component">
                {/* En caso de existir, renderiza el usuario que ingresò el cliente en el cuadro de bùsqueda */}
                {/* Renders the user filled in the search box */}
                { !isLoading && name && filteredEntities && <UserCard login={filteredEntities.login} avatar={filteredEntities.avatar_url} name={filteredEntities.name} company={filteredEntities.company} blog={filteredEntities.blog} location={filteredEntities.location} email={filteredEntities.email} key={filteredEntities.id} /> }

                {/* Renderiza 30 usuarios correspondientes a la paginaciòn en la que estè el cliente. Estos 30 usuarios renderizados se los trae desde la API */}
                {/* Renders 30 users corresponding to the pagination the client set. These 30 rendered users are fetched from API Github endpoint */}
                { !isLoading && !name && filteredEntities && filteredEntities.map( user => <UserCard login={user.login} avatar={user.avatar_url} name={user.name} company={user.company} blog={user.blog} location={user.location} email={user.email} key={user.id} /> )}

                {/* Renderiza un spinner en caso de que la/s tarjeta/s no hayan sido todavìa devueltas por la API de Github */}
                {/* Renders a spinner in case the cards are being retrieved */}
                { isLoading && <SpinnerWrapper/> }
            </Row>

            {/* Renderiza la paginaciòn en caso de corresponder  */}
            {/* Renders the pagination */}
            { !name && <PaginationWrapper /> }
        </Container>
    );
};


export default UsersWrapper;
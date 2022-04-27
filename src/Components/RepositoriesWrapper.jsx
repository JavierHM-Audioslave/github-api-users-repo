import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavigationBar from "./NavigationBar";
import RepositoryCard from "./RepositoryCard";
import PaginationWrapper from "./PaginationWrapper";
import SpinnerWrapper from "./SpinnerWrapper";
import { urlGetRepo, urlGetReposOfAPagination } from "../Constants/links";
import useFetchUsers from "../Hooks/useFetchUsers";
import useSetIndexAtBeginning from "../Hooks/useSetIndexAtBeginning";




/**
 * Wrapper component the which executes the logic in order to decide whether to display the repositories of a user, the repositories of many users or the spinner while it is retrieving the repositories information on the Github API
 * @param {boolean} isSearch Indicates if the data to be fetched is for one repo or for many.
 * @returns A jsx component rendering the repositories
 */
const RepositoriesWrapper = ({isSearch = false}) => {

    useSetIndexAtBeginning();
    let {isLoading, name, filteredEntities} = useFetchUsers({isSearch, userLogic: false, url1: urlGetRepo, url2: urlGetReposOfAPagination});


    
    return (
        <Container>
            <NavigationBar isSearchForUsers={false}/>

            <Row data-testid="row-representing-appearance-of-repositorieswrapper-component">
                {/* Renderiza todos los repos que pertenecen al usuario que el cliente ingresò en la barra de bùsquedas */}
                { !isLoading && name && filteredEntities && filteredEntities.map( repo => <RepositoryCard name={repo.owner.login} userLink={repo.owner.url} repoName={repo.name} repoLink={repo.html_url} repoDescription={repo.description} repoForked={repo.fork} key={repo.id} /> )}

                {/* Renderiza repos de forma general para que el cliente los pueda ir viendo a travès de la paginaciòn */}
                { !isLoading && !name && filteredEntities && filteredEntities.map( repo => <RepositoryCard name={repo.owner.login} userLink={repo.owner.url} repoName={repo.name} repoLink={repo.html_url} repoDescription={repo.description} repoForked={repo.fork} key={repo.id} /> )}

                {/* Renderiza un spinner en caso de que la/s tarjeta/s no hayan sido todavìa devueltas por la API de Github */}
                { isLoading && <SpinnerWrapper/> }


                { !name && <PaginationWrapper/> }
            </Row>
        </Container>
    );
}


export default RepositoriesWrapper;
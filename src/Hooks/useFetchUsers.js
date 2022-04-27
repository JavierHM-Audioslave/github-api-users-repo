import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getCurrentIndex } from "../Selectors";
import { consumeAPI } from "../Services/usersService";
import { PER_PAGE } from "../Constants/general";


/**
 * Custom hook in charge of deciding what and how to retrieve entities (such as Users or Repositories)
 * @param {boolean} isSearch Indicates if the call to this hook was made for searching only one entity or many
 * @param {boolean} userLogic Indicates if the fetching must be done for users or repositories
 * @param {string} url1 Indicates the Github API url for searching only one entity (user or repository)
 * @param {string} url2 Indicates the Github API url for searching many entities (users or repositories)
 * @returns {isLoading, name, filteredEntities}
 */
const useFetchUsers = ({isSearch, userLogic, url1, url2}) => {

    const {name} = useParams();
    const [filteredEntities, setFilteredEntities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const index = useSelector(getCurrentIndex);

    useEffect(() => {

        setIsLoading(true);

        if( isSearch ) {
            const getAUser = async () => {
                try {
                    const response = await consumeAPI(url1(name));
                    console.log(response);
                    if( response.status !== 200 ) return new Promise.reject("La API no ha devuelto la informaciòn de usuario");
                    setFilteredEntities(response.data);
                    setIsLoading(false);
                } catch(error) {
                    console.error(error);
                }
            }

            getAUser();
        } else {
            const getUsersOfAPagination = async () => {
                try {
                    const response = await consumeAPI(url2( (index-1)*PER_PAGE ) || 1 );
                    console.log(response.data);
                    if( response.status !== 200 ) return new Promise.reject("La API no ha devuelto los usuarios contenidos en el ìndice de paginaciòn");

                    // In case this custom hook was call by UsersWrapper component...
                    if( userLogic ) {
                        let specificInfoByUser = [];
                        const rawUser = response.data;
                        for( let i = 0; i<rawUser.length; i++) {
    
                            const getActualUsersOfAPagination = async () => {
                                try {
                                    // console.log(user.url)
                                    const info = await consumeAPI(rawUser[i].url);
                                    if( info.status !== 200 ) console.error("La informaciòn del usuario " + info.data.id + " no pudo ser recuperada");
                                    specificInfoByUser.push(info.data);
                                    return;
                                } catch( error ) {
                                    console.error(error);
                                    throw new Error(error);
                                }
                            }
    
                            await getActualUsersOfAPagination();
                        }
    
                        setFilteredEntities(specificInfoByUser);
                        setIsLoading(false);
                    } else {
                        setFilteredEntities(response.data);
                    }

                    setIsLoading(false);

                } catch(error) {
                    console.error(error);
                }
            };

            getUsersOfAPagination();
        }

    }, [isSearch, index, name]);




    
    return({isLoading, name, filteredEntities});
};

export default useFetchUsers;
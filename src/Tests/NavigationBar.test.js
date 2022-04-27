// Configuro Enzyme porque tambièn lo voy a usar ademàs de react-testing-library
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

import { fireEvent, render, screen, detach, cleanup } from "@testing-library/react";
import NavigationBar from "../Components/NavigationBar";
import Navbar from "react-bootstrap/Navbar";
import App from "../App";
import { createMemoryHistory } from "history";
import useSetIndexAtBeginning from "../Hooks/useSetIndexAtBeginning";
import { Provider } from "react-redux";
import configureStore from "../Store/index";

import useFetchUsers from "../Hooks/useFetchUsers";





jest.mock("../Hooks/useSetIndexAtBeginning");
jest.mock("../Hooks/useFetchUsers");
const store = configureStore();



describe("NavigationBar", () => {

    // Test case ran with Enzyme //
    it("renders Navbar component", () => {
        // Enzyme.configure({ adapter: new Adapter() });      

        const wrapper = shallow(<NavigationBar/>);
        expect(wrapper.find(Navbar)).toHaveLength(1);
    });


    // Test case ran with react-testing-library
    it("clicking on Users link leads to rendering UsersWrapper component", () => {
        
        // Los dos mocks de abajo sirven para que los dos custom hooks que usa el componente UsersWrapper, devuelvan lo que necesito
        useSetIndexAtBeginning.mockImplementation(() => {return;})
        useFetchUsers.mockImplementation( () => {
            return {isLoading: false, name: "algo", filteredEntities: {login: "login", avatar: "https://avatars.githubusercontent.com/u/1?v=4", name: "name", company: "company", location: "location", email: "hola@hotmail.com", key: "1"}}
        } );
        const history = createMemoryHistory();
        const wrapper = render(
            <Provider store={store}>
                <App history={history}/>
            </Provider>
        );
        const button = screen.getByTestId("users");
        expect(screen.queryByTestId("row-representing-appearance-of-userswrapper-component")).not.toBeInTheDocument();
        fireEvent.click(button);
        expect(screen.getByTestId("row-representing-appearance-of-userswrapper-component")).toBeInTheDocument();
        cleanup(wrapper);
    });


        // Test case ran with react-testing-library
        it("clicking on Users link leads to rendering UsersWrapper component", () => {
        
            // Los dos mocks de abajo sirven para que los dos custom hooks que usa el componente RepositoriesWrapper, devuelvan lo que necesito
            useSetIndexAtBeginning.mockImplementation(() => {return;})
            useFetchUsers.mockImplementation( () => {
                return {isLoading: false, name: "algo", filteredEntities: [{
                    owner: {
                        login: "login",
                        url: "www.soyURL.com"
                    },
                    name: "soyName",
                    html_url: "soyHTML_URL",
                    description: "soyDescription",
                    fork: "soyFork",
                    id: "2"
                }]}
            } );

            const history = createMemoryHistory();
            const {debug} = render(
                <Provider store={store}>
                    <App history={history}/>
                </Provider>
            );
            const button = screen.getByTestId("repositories");
            expect(screen.queryByTestId("row-representing-appearance-of-repositorieswrapper-component")).not.toBeInTheDocument();
            fireEvent.click(button);
            expect(screen.getByTestId("row-representing-appearance-of-repositorieswrapper-component")).toBeInTheDocument();
        });


});
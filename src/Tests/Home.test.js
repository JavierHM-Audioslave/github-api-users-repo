import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import Home from "../Components/Home";
import NavigationBar from "../Components/NavigationBar";
import GeneralInfo from "../Components/GeneralInfo";


describe("Header", () => {

    it("renders NavigationBar component", () => {
        const wrapper = shallow(<Home/>);
        expect(wrapper.find(NavigationBar)).toHaveLength(1);
    });

    it("renders GeneralInfo component", () => {
        const wrapper = shallow(<Home/>);
        expect(wrapper.find(GeneralInfo)).toHaveLength(1);
    });
});
import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Matches } from './Matches';
import { AuthProvider } from '../../Context/authContext'


Enzyme.configure({ adapter: new Adapter() });

describe('Matches', () => {

    const params = {
        context: { email: "test@test.com", 
            isAuthenicated: false
        },
    };

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Matches />, params.context);
    });

    afterEach(() => {
        wrapper.unmount();
    });
    
    test('renders', () => {
		const component = renderer.create(
			<MemoryRouter>
                <AuthProvider value={params.context}>
                    <Matches />
                </AuthProvider>
			</MemoryRouter>
		).toJSON();

		expect(component).toMatchSnapshot();
    });

    test("loading must be true when rendered", () => {
        expect(wrapper.state().loading).toBeTruthy();
    })




});
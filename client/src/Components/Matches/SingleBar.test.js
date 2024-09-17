import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SingleBar  from './SingleBar';


Enzyme.configure({ adapter: new Adapter() });

describe('SingleBar', () => {
    const params = {
        width: "10%;",
        color: "#FF0000"
    };

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<SingleBar width={params.width} color={params.color} />);
    });
    
    test('renders', () => {
		const component = renderer.create(
			<MemoryRouter>
				<SingleBar />
			</MemoryRouter>
		).toJSON();
		
		expect(component).toMatchSnapshot();
    });
    

    test('check props', () => {
        expect(wrapper.prop('width')).toBe(params.width);
        expect(wrapper.prop('color')).toBe(params.color);
    });
    

});
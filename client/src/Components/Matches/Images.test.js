import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Images } from './Images';


Enzyme.configure({ adapter: new Adapter() });

describe('Images', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Images />);
    });
    
    test('renders', () => {
		const component = renderer.create(
			<MemoryRouter>
				<Images  />
			</MemoryRouter>
		).toJSON();
		
		expect(component).toMatchSnapshot();
    });
    

});
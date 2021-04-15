import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Bar } from './Bar';


Enzyme.configure({ adapter: new Adapter() });

describe('Bar', () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Bar  />);
    });
    
    test('renders', () => {
		const component = renderer.create(
			<MemoryRouter>
				<Bar  />
			</MemoryRouter>
		).toJSON();
		
		expect(component).toMatchSnapshot();
    });
    

});
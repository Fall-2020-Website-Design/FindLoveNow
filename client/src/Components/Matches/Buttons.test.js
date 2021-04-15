import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Buttons } from './Buttons';


Enzyme.configure({ adapter: new Adapter() });

describe('Buttons', () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Buttons  />);
    });
    
    test('renders', () => {
		const component = renderer.create(
			<MemoryRouter>
				<Buttons  />
			</MemoryRouter>
		).toJSON();
		
		expect(component).toMatchSnapshot();
    });
    

});
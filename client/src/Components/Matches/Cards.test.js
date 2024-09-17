import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Cards } from './Cards';


Enzyme.configure({ adapter: new Adapter() });

describe('Cards', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Cards />);
    });
    
    test('renders', () => {
		const component = renderer.create(
			<MemoryRouter>
				<Cards  />
			</MemoryRouter>
		).toJSON();
		
		expect(component).toMatchSnapshot();
    });
    

});
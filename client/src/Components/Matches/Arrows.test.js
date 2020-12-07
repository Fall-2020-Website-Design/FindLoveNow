import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Arrows } from './Arrows';


Enzyme.configure({ adapter: new Adapter() });

describe('Arrows', () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Arrows  />);
    });
    
    test('renders', () => {
		const component = renderer.create(
			<MemoryRouter>
				<Arrows  />
			</MemoryRouter>
		).toJSON();
		expect(component).toMatchSnapshot();
    });
    
    test('left arrow', () => {
		wrapper.find('#left').simulate('click');
		
    });
    
    test('right arrow', () => {
        wrapper.find('#right').simulate('click');
	});
});
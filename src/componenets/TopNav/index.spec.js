import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import TopNav from './'

Enzyme.configure({ adapter: new Adapter() });

test('TopNav component should render as expected', ()=>{
    // snapshots
    const component = shallow(<TopNav />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot()
});


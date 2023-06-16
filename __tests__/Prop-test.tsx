import 'react-native'
import React from 'react'
import Componen from '../Component'
import renderer from 'react-test-renderer'

import Enzyme , {shallow} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import TextInputComponent from '../components/TextInputComponent';

Enzyme.configure({ adapter: new Adapter() });


it('Testing props', ()=> {
    const wrapper = shallow(<Componen data='this is data' />).props()
    console.log(wrapper.children[1].props.children);
    expect(wrapper.children[1].props.children).toEqual('this is data');
})

// it('Testing props' , ()=> {
//     const wrapper = shallow(<TextInputComponent searchText='Hello'  />).props()
//     console.log(wrapper.children)
//    expect(wrapper.children[1].props.children).toEqual('hello')
// })
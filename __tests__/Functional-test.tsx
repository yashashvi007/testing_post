import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import Home from '../Home';

it('function and state test case' , ()=> {
    let HomeData = renderer.create(<Home/>).getInstance()
    HomeData.onChangeText("search")
    expect(HomeData.state.searchText).toEqual("search")
})



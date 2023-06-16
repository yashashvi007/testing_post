import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Home from '../Home';

let findElement = function(tree , element ){
    let result = undefined;
    for(node in tree.children){
        if(tree.children[node].props.testID == element){
            result = true;
        }
    }
    return result
}

it('find Element' ,()=> {
    let tree = renderer.create(
        <Home/>
    ).toJSON();
    expect(findElement(tree , 'searchbar')).toBeDefined();
})


it('find element' , ()=> {
    let tree = renderer.create(
        <Home/>
    ).toJSON();
    expect(findElement(tree , 'list')).toBeDefined();
})
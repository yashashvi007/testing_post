import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'

type MyProps = {
   searchText : string, 
   onChangeText : any
}

type MyState = {

}

export default class TextInputComponent extends Component<MyProps , MyState> {
  render() {
    const {searchText , onChangeText} = this.props
    return (
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={searchText}
      />
    )
  }
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      }
})
import { Text, View } from 'react-native'
import React from 'react'

type MyProps = {
    data : string
}

type MyState = {
    data : string
}

class Componen extends React.Component<MyProps , MyState> {

  render() {
    const {data} = this.props
    return (
      <View>
        <Text>Component</Text>
        <Text>{data}</Text>
      </View>
    )
  }
}

export default Componen
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Dimensions from 'Dimensions'

const width = Dimensions.get('window').width

const n = 3

class Cell extends Component {
  render () {
    return (
      <View style={{
        flex: 0,
        height: width / n - 5,
        width: width / n - 5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5
      }}>
        <Text style={{
          fontSize: 42
        }}>
          {this.props.index}
        </Text>
      </View>
    )
  }
}

class Row extends Component {
  render () {
    const { num, index } = this.props
    const cells = Array(num).fill(index * num).map((n, i) => (
      <Cell key={i} index={n + i + 1} />
    ))
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {cells}
      </View>
    )
  }
}

export default class App extends Component {
  render () {
    const rows = Array(n).fill(0).map((_, i) => (
      <Row key={i} num={n} index={i} />
    ))
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          flex: 0,
          justifyContent: 'center',
          alignItems: 'center',
          height: width,
          width
        }}>
          {rows}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

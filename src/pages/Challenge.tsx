import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TopDrawerNavigation from '../Menu/TopDrawerNavigation'

const Challenge = () => {
  return (
    <View style={styles.container}>
      <TopDrawerNavigation/>
      <View>
          <Text style={styles.title}>
              EN PRODUCTION
          </Text>
      </View>
    </View>
  )
}

export default Challenge

const styles = StyleSheet.create({
  container:{
    padding: 16,
    paddingTop: 40,
    flex: 1,
    backgroundColor : "#ECEBE1",
  },
  title: {
    marginTop:15,
    fontSize:28,
    textAlign: "left",
    paddingBottom:20,
    paddingLeft:25,
    paddingTop:20,
    fontWeight:"bold"
  },
})
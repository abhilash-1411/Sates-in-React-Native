

import React,{useState} from 'react';

import {
 
  StyleSheet,
  Text,
 Button,
  View,
} from 'react-native';






const App=()=> {
  const [name,setName]=useState("Adixoo")
  let data="sam"

  function testName(){
    setName("Brand")
    data="Peter"

  }
  return (
    <View>
      <Text style={{fontSize:30}}>States in React-Native</Text>
      <Text style={{fontSize:30}}>{name}</Text>
      <Text style={{fontSize:30}}>{data}</Text>
      <Button title='Update Name' onPress={testName}/>
    </View>
  )
          
}


export default App;

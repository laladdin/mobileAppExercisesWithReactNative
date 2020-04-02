import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

const [number1, setNumber1] = useState(''); 
const [number2, setNumber2] = useState('');  
const [result, setResult] = useState('');
const [history, setHistory] = useState([]);

const sum = () => {
  const result2 = parseInt(number1) + parseInt(number2)
  setResult(result2)
  setHistory([...history, number1 + ' + ' + number2 + ' = ' + result2])
}

const subtraction = () => {
  const result2 = parseInt(number1) - parseInt(number2)
  setResult(result2)
  setHistory([...history, number1 + ' - ' + number2 + ' = ' + result2])
}

  return (
    <View style={styles.container}>
      <View style={styles.textinputContainer}>
      <Text>Result: {result} </Text>
      <TextInput style={styles.textinputs} keyboardType="numeric" onChangeText={(text) => setNumber1(text)} value={number1}/>
      <TextInput style={styles.textinputs} keyboardType="numeric" onChangeText={(text) => setNumber2(text)} value={number2}/>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={sum} title="+"/>
        <Button onPress={subtraction} title="-"/>
      </View>
      <View style={styles.list}>
        <Text>History:</Text>
        <FlatList data={history}renderItem={({item}) =>
          <Text>{item} </Text>}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 1,
    backgroundColor: '#fff',
    
  },
  textinputContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent:'flex-end',
  },
  textinputs: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    marginTop: 20,
    paddingRight: 80,
    paddingLeft: 80,
  },
  list: {
    flex: 2,
    alignItems: 'center', 
  },
});


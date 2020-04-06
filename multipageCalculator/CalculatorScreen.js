import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';

export default function CalculatorScreen(props) {

    const { navigate } = props.navigation;

    const [number1, setNumber1] = useState(''); 
    const [number2, setNumber2] = useState('');  
    const [result, setResult] = useState('');
    const [history, setHistory] = useState([]);

    const sum = () => {
        const result2 = parseInt(number1) + parseInt(number2)
        setResult(result2)
        setHistory([...history, number1 + ' + ' + number2 + ' = ' + result2])
        setNumber1('');
        setNumber2('');
      }
      
      const subtraction = () => {
        const result2 = parseInt(number1) - parseInt(number2)
        setResult(result2)
        setHistory([...history, number1 + ' - ' + number2 + ' = ' + result2])
        setNumber1('');
        setNumber2('') 
      }

      return (
        <View style={styles.container}>
          <ImageBackground style={styles.backgroundimage}
              source={require('./assets/numbers.jpg')}>
          <View style={styles.textinputContainer}>
          <Text style={styles.text}>Result: {result} </Text>
          <TextInput style={styles.textinputs} keyboardType="numeric" onChangeText={(text) => setNumber1(text)} value={number1}/>
          <TextInput style={styles.textinputs} keyboardType="numeric" onChangeText={(text) => setNumber2(text)} value={number2}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={sum} title="+"/>
            <Button onPress={subtraction} title="-"/>
            <Button onPress={() => navigate('History', {history: history})} title="History"/>
          </View>
          </ImageBackground>
        </View>
      );
}

      const styles = StyleSheet.create({
        container: {
          flex: 1
        },
        backgroundimage: {
          width: '100%',
          height: '100%'
        },
        textinputContainer: {
          flex: 1, 
          alignItems: 'center', 
          justifyContent:'flex-end'
        },
        text: {
          fontWeight: 'bold',
          fontSize: 20,
          backgroundColor: '#ffffff'
        },
        textinputs: {
          width: 220,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          backgroundColor: '#ffffff',
          textAlign: 'center',
          fontSize: 20
        },
        buttonContainer: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
          marginTop: 20,
          paddingRight: 80,
          paddingLeft: 80
        },
      });
      
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CalculatorApp() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '%') {
      try {
        const percentageResult = (eval(input) / 100).toString();
        setInput(percentageResult);
        setResult(percentageResult);
      } catch (error) {
        setResult('Error');
      }
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const renderButtons = () => {
    const buttons = [
      'C', '%', 
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+', 
    ];

    return buttons.map((button) => (
      <TouchableOpacity
        key={button}
        style={button === '%' || button === 'C' ? styles.specialButton : styles.button}
        onPress={() => handlePress(button)}
      >
        <Text style={styles.buttonText}>{button}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{input}</Text>
      </View>
      <View style={styles.buttonsContainer}>{renderButtons()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c3c3c',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#3c3c3c',
    padding: 20,
  },
  resultText: {
    fontSize: 54,
    color: 'white',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#3c3c3c',
    padding: 20,
  },
  inputText: {
    fontSize: 42,
    color: 'white',
  },
  buttonsContainer: {
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '22%',
    height: '17%',
    backgroundColor: '#808080',
    borderColor: '#808080',
    borderWidth: 1,
    elevation: 5, 
    borderRadius: 60,
    margin: 5
  },
  specialButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '47%',
    height: '17%',
    backgroundColor: '#fd7f20', 
    borderColor: '#808080',
    borderWidth: 1,
    elevation: 5, 
    borderRadius: 100,
    margin: 5,
  },
  buttonText: {
    fontSize: 36,
    color: 'white',
  },
});

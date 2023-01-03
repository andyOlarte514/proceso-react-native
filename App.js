/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';

import {validateText} from './utils.js';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [messageTextBalanced, setMessageTextBalanced] = useState('');

  const handleValidateText = () => {
    return validateText(inputValue)
      ? setMessageTextBalanced(
          'Los parentesis, corchetes, etc. en el STRING estan equilibrados',
        )
      : setMessageTextBalanced(
          'Los parentesis, corchetes, etc. en el STRING NO estan equilibrados',
        );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={value => setInputValue(value)}
        />
        <Button
          disabled={!inputValue}
          title="Validate Text"
          onPress={handleValidateText}
        />
        {inputValue && messageTextBalanced && (
          <Text>{messageTextBalanced}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  input: {
    borderWidth: 2,
    borderColor: '#808080',
    marginBottom: 5,
  },
});

export default App;

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
  return (
    <View style={ { padding: 30 } }>

      <View style={ {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        } }
      >
        <TextInput
          placeholder="Type something"
          style={{
            borderColor: 'blue',
            borderWidth: 1,
            marginTop: 10,
            marginBottom: 10,
            padding: 10,
            width: '80%'
          }}
        />
        <Button title="ADD" />
      </View>

      <View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

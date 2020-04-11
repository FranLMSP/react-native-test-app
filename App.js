import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')

  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal])
  }

  return (
    <View style={ styles.screen }>

      <View style={ styles.inputContainer }
      >
        <TextInput
          placeholder="Type something"
          style={ styles.input }
          onChangeText={ goalInputHandler }
          value={ enteredGoal }
        />
        <Button title="ADD" onPress={ addGoalHandler } />
      </View>

      <View>
        { courseGoals.map((goal) => <Text>{ goal }</Text>) }
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderColor: 'blue',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    width: '80%'
  }
});

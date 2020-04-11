import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
  }

  return (
    <View style={ styles.inputContainer }
    >
      <TextInput
        placeholder="Type something"
        style={ styles.input }
        onChangeText={ goalInputHandler }
        value={ enteredGoal }
      />
      <Button title="ADD" onPress={ props.onAddGoal.bind(this, enteredGoal) } />
    </View>

  )
}

const styles = StyleSheet.create({
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
})

export default GoalInput
